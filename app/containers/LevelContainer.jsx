import React, {Component} from 'react';
import Level from 'APP/app/components/Level';

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
      currLevel: dummy
    }
  }

  render() {
    return (
      <Level
        level={this.state.currLevel.level}
        instructions={this.state.currLevel.instructions}
        affirmation={this.state.currLevel.affirmation}
      />
    )
  }
}
