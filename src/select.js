import React, { Component } from 'react';
import {SkillList, SkillChosen} from './select';
import $ from 'jquery';

class PokemonSelect extends Component{
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
                    }
                });
            }

            this.setState({chosenList: chosenList});
        }
    }

    loadSkillList() {
        $.ajax({
            url: 'https://api.myjson.com/bins/2go1h',
            type: 'GET',
            dataType: 'json',
        })
        .done(list => {
            if (list) {
                this.setState({skillList: list});
            }
        })
        .fail(error => {
            console.log(error.status);
        });
    }

    render() {
        return (
            <div className="skill-wrapper">
                <div className="skill-picker">
                    <SkillList
                        list={this.state.skillList}
                        addChosen={this.addToChosen}
                      />
                </div>
                <div className="skill-chosen">
                    <SkillChosen
                        list={this.state.chosenList}
                         />
                </div>
            </div>
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
              <h4>{skill.name}</h4>
              <img src={skill.img} alt="" />
              <div className="skill-description">
                <ul>
                  <li>Skill level <span className="skill-value">{skill.level}</span></li>
                  <li>Skill type <span className="skill-value">{skill.type}</span></li>
                </ul>
                <p className="skill-info">{skill.info}</p>
              </div>
            </li>
        )
    }
}

class SkillChosen extends React.Component {
    render() {

        let chosenItems = this.props.list.map((item, index) => {
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

export default PokemonSelect;