import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export class Home extends Component {
  constructor(){
    super()
    this.state={
      houses:{
        gryffindor: {points: 1},
        hufflepuff: {points: 1},
        ravenclaw: {points: 1},
        slytherin: {points: 1},
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
    console.log("userrrr::", this.props.user);
    return (
      <div className="home">
        {this.props.user ? <div className={getHouse(this.props.user.house_id)}></div> : null}
        <h1>Welcome, {this.props.user? this.props.user.name : guest}!</h1>
        {this.props.user? <h3>Points: {this.props.user.points}</h3> : <h3>Sign in to win points for your house!</h3>}
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
