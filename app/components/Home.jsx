import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export class Home extends Component {
  constructor(){
    super()
    this.state={
      houses:{
        gryffindor: {points: 5000},
        hufflepuff: {points: 300},
        ravenclaw: {points: 250},
        slytherin: {points: 200},
      }
    }
  }

  getHouse(num){
    switch(num){
      case 1: return "gryffindor"
      case 2: return "hufflepuff"
      case 3: return "ravenclaw"
      case 4: return "slytherin"
      default: return ""
    }
  }

  render (){
    let guest= "wizard/witch"
    return (
      <div className="home">
        <div className="greetings">
          {this.props.user ? <div className={this.getHouse(this.props.user.house_id)}></div> : <div className="hogwarts"></div>}
        <h1>Welcome, {this.props.user? this.props.user.name : guest}!</h1>
        {this.props.user? <h3>Points: {this.props.user.points}</h3> : <h3>Sign in to win points for your house!</h3>}
      </div>
        <h2><Link to="level/1" className="playButton">Win Points</Link></h2>
        <div>
          <h2>House Cup Stats:</h2>
          <div className="flexContainer">
            <div className="flexItem gryffindor"></div><div className="flexItem">{this.state.houses.gryffindor.points}</div>
          </div>
          <div className="flexContainer">
            <div className="flexItem hufflepuff"></div><div className="flexItem">{this.state.houses.hufflepuff.points}</div>
          </div>
          <div className="flexContainer">
            <div className="flexItem ravenclaw"></div><div className="flexItem">{this.state.houses.ravenclaw.points}</div>
          </div>
          <div className="flexContainer">
            <div className="flexItem slytherin"></div><div className="flexItem">{this.state.houses.slytherin.points}</div>
          </div>
        </div>
      </div>

    )
  }

}

export const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

export default connect(mapStateToProps)(Home);
