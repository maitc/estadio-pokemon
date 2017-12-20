import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from './logo'

class Selection extends Component {
	    constructor(props) {
        super(props);

        this.state = {
            skillList: [],
            chosenList: [],
        }

        this.addToChosen = this.addToChosen.bind(this);
    }

    componentWillMount() {
        this.loadSkillList();
    }

    addToChosen(itemId, state) {
        let chosenList = this.state.chosenList;
        let skillList = this.state.skillList;

        if (!chosenList.length) {
            chosenList = skillList.filter((item, index) => {
                return itemId === item.id;
            });

            this.setState({chosenList: chosenList});
            return;
        } else {
            let notAdded = chosenList.every((item, index) => {
                if (item.id === itemId) {
                    chosenList.splice(index, 1);
                    return false;
                } else {
                    return true;
                }
            });

            if (notAdded) {
                skillList.forEach((item) => {
                    if (item.id === itemId) {
                        chosenList.push(item);
                        console.log(item)
                    }
                });
            }

            this.setState({chosenList: chosenList});
        }
    }

    loadSkillList() {
        fetch('https://api.myjson.com/bins/q2477', { method: 'GET' })
        .then(response => (response.json()))
        .then(list => {
            let arrPKMN = list[0][this.props.match.params.difficulty]
            if (arrPKMN) {
                this.setState({skillList: arrPKMN})
            }
        })
        .catch(error => {
            console.log(error.status);
        });
    }

    render() {
        return (
            <div className="welcome">
                <Logo />
                <div className="login">
                    <h3>Choose your Pókemon team</h3>
                </div>
                <div className="skill-wrapper">
                    <div className="skill-picker">
                        <SkillList
                            arrPKMN={this.state.skillList}
                            addChosen={this.addToChosen}
                          />
                    </div>
                    <div className="skill-chosen">
                        <SkillChosen
                            arrPKMN={this.state.chosenList}
                             />
                        <Link to="/battle" className="btn btn-lg btn-danger" onClick={this.handleSubmit}>Battle!</Link>
                    </div>
                </div>
            </div>
        )
    }
}
	class SkillList extends React.Component {
	    constructor(props) {
	        super(props);
	    }

    render() {
        let skillList = this.props.arrPKMN.map((listItem, index) => {
            return <SkillListItem 
                        key={index}
                        listInfo={listItem}
                        addChosen={this.props.addChosen}
                     />
        });

	        return (
	            <ul>
	                {skillList}
	            </ul>
	        )
	    }
	}

class SkillListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    onListItemClick(itemId, event) {
        let active = this.state.active;
        this.setState({active: !active});
        this.props.addChosen(itemId, active);
    }

    render() {
        let chosenClass = "skill-item";
        let skill = this.props.listInfo;

        chosenClass += this.state.active ? " picked" : "";

        return (
                 <li onClick={this.onListItemClick.bind(this, skill.id)} className={chosenClass}>
                  <h4>{skill.PKMN}</h4>
                  <p>{skill.HP}</p>
                  <div className="skill-description">
                    <ul>
                      <li>Skill level <span className="skill-value">{skill.LVL}</span></li>
                      <li>Skill type <span className="skill-value">{skill.DMG}</span></li>
                    </ul>
                    <p className="skill-info">{skill.id}</p>
                  </div>
                </li>
        )
    }
}

	class SkillChosen extends React.Component {
	    render() {

	        let chosenItems = this.props.arrPKMN.map((item, index) => {
	            return <SkillChosenItem key={index} item={item} />
	        });
	      
	        return (
	            <div className="skill-panel">
	                <h4>Your choice <span className="skill-SP"></span></h4>
	                <u className="skill-items">
	                    {chosenItems}
	                </u>
	            </div>
	        )
	    }
	}

	class SkillChosenItem extends React.Component {
	    render() {
	        let item = this.props.item;
	        return (
	            <li><img src={item.img} alt="" /><span>{item.name}</span></li>
	        )
	    }
	}




export default withRouter(Selection);