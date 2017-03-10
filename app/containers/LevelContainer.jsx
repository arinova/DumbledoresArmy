import React, {Component} from 'react';
import Level from 'APP/app/components/Level';
import Annyang from 'APP/public/js/commands.js';

/*TEMPORARY DUMMY DATA*/
let dummy={
  level: 1,
  instructions:"It's dark in here.",
  affirmation: "That's better."
}

export default class LevelContainer extends Component {

  constructor() {
    super();
    this.state= {
      currLevel: dummy,
      completed: false
    }
  }

  componentDidMount(){
    let annyang=getAnnyang();
    console.log("annyang", annyang)
    let command={'lumos': function() {
      this.setState({completed : true})
      console.log('Let there be light!!!!!');
    }.bind(this)}
    annyang.addCommands(command);
  }

  render() {
    return (
      <Level
        level={this.state.currLevel.level}
        instructions={this.state.currLevel.instructions}
        affirmation={this.state.currLevel.affirmation}
        completed={this.state.completed}
      />
    )
  }
}
