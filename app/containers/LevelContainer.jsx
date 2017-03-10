import React, {Component} from 'react';
import Level from 'APP/app/components/Level';
import Annyang from 'APP/public/js/annyang.js';

/*TEMPORARY DUMMY DATA*/
let dummy={
  level: 1,
  instructions:"It's dark in here.",
  affirmation: "That's better.",
  spell: 'lumos'
}

export default class LevelContainer extends Component {

  constructor() {
    super();
    this.state= {
      currLevel: dummy,
      completed: false,
      feedback: ""
    }
  }

  componentDidMount(){
    let annyang=getAnnyang();
    let thisLevel= this;

    annyang.addCallback('result', function(phrases) {
      thisLevel.setState({feedback : phrases[0]});
      let spell=thisLevel.state.currLevel.spell;

      console.log("spell:", spell)
      console.log("you said:", phrases[0]);

      if(phrases[0].includes(spell)){ thisLevel.setState({completed : true}); }
      console.log("completed", thisLevel.state.completed);
    }.bind(thisLevel));
  }

  render() {
    return (
      <div>
        <Level
          level={this.state.currLevel.level}
          instructions={this.state.currLevel.instructions}
          affirmation={this.state.currLevel.affirmation}
          completed={this.state.completed}
        />

      {!this.state.completed ? <p className="level">You: {this.state.feedback} ...</p> : null}
      </div>
    )
  }
}
