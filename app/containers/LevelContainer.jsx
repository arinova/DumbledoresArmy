import React, {Component} from 'react';
import Level from 'APP/app/components/Level';

export default class LevelContainer extends Component {

  constructor() {
    super();
    this.state= {
      level: 1,
      instructions:"Open the Door."
    }
  }

  render() {
    return (
      <Level
        level={this.state.level}
        instructions={this.state.instructions}
      />
    )
  }
}
