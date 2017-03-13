import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import axios from 'axios';

export class Home extends Component {
  constructor(){
    super()
    this.state={
        gryffindor: {points: 5000},
        hufflepuff: {points: 300},
        ravenclaw: {points: 250},
        slytherin: {points: 200},
    }
  }

  componentDidMount(){
    axios.get('/api/houses/1')
      .then(res => {
        console.log("res", res.data);
        return res.data
      })
      .then(gryffindors =>{
        let points= gryffindors.reduce((acc, curr)=>{
          return acc +  curr.points
        }, 0)
        this.setState({gryffindor :{points : points}})
      }).catch(console.error)

      axios.get('/api/houses/2')
        .then(res => {
          console.log("res", res.data);
          return res.data
        })
        .then(hufflepuffs =>{
          let points= hufflepuffs.reduce((acc, curr)=>{
            return acc +  curr.points
          }, 0)
          this.setState({hufflepuff :{points : points}})
        }).catch(console.error)

        axios.get('/api/houses/3')
          .then(res => {
            console.log("res", res.data);
            return res.data
          })
          .then(ravenclaws =>{
            let points= ravenclaws.reduce((acc, curr)=>{
              return acc +  curr.points
            }, 0)
            this.setState({ravenclaw :{points : points}})
          }).catch(console.error)

        axios.get('/api/houses/4')
          .then(res => {
            console.log("res", res.data);
            return res.data
          })
          .then(slytherins =>{
            let points= slytherins.reduce((acc, curr)=>{
            return acc +  curr.points
            }, 0)
            this.setState({slytherin :{points : points}})
          }).catch(console.error)

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
            <div className="flexItem gryffindor"></div><div className="flexItem">{this.state.gryffindor.points}</div>
          </div>
          <div className="flexContainer">
            <div className="flexItem hufflepuff"></div><div className="flexItem">{this.state.hufflepuff.points}</div>
          </div>
          <div className="flexContainer">
            <div className="flexItem ravenclaw"></div><div className="flexItem">{this.state.ravenclaw.points}</div>
          </div>
          <div className="flexContainer">
            <div className="flexItem slytherin"></div><div className="flexItem">{this.state.slytherin.points}</div>
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
