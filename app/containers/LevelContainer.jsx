import React, {Component} from 'react';
import { connect } from 'react-redux';

import Level from 'APP/app/components/Level';
import Annyang from 'APP/public/js/annyang.js';
import LevelList from 'APP/public/js/levellist.js';
import { selectLevel, toggleCompleted } from 'APP/app/reducers/level';

export  class LevelContainer extends Component {

  constructor(props) {
    super(props);
    console.log("going to level", this.props.level);

    this.state= {
      levelList: getLevels(),
      feedback: ""
    }
  }

  componentDidMount(){
    let annyang=getAnnyang();
    let thisLevel= this;

    annyang.addCallback('result', function(phrases) {
      thisLevel.setState({feedback : phrases[0]});
      let currLevel= this.state.levelList[this.props.level.level-1];
      let spell=currLevel.spell;

      console.log("spell:", spell)
      console.log("you said:", phrases[0]);

      if(phrases[0].toLowerCase().includes(spell) || phrases.indexOf(spell)>-1){ this.props.toggleCompleted(true) }
      console.log("completed", this.props.level.completed);
    }.bind(thisLevel));
  }

  render() {
    let currLevel= this.state.levelList[this.props.level.level-1];
    let completed= this.props.level.completed;
    return (
      <div>
        <Level
          level={currLevel.level}
          label={currLevel.label}
          instructions={currLevel.instructions}
          affirmation={currLevel.affirmation}
          levelTotal={this.state.levelList.length}
          completed={completed}
        />

      {!this.state.completed ? <p className="level">You: {this.state.feedback} ...</p> : null}
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    level: state.level,
    user: state.auth
  };
};

export const mapDispatchToProps = dispatch=>{
   return {
     toggleCompleted: function(boolean){
       dispatch(toggleCompleted(boolean));
     },
     selectLevel: function(level){
       dispatch(selectLevel(level));
     }
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelContainer);
