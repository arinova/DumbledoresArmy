import React from 'react';
import {Link} from 'react-router';

export default props => {

  let level=props.level
  let instructions=props.instructions
  let affirmation=props.affirmation
  let stage=props.stage
  let completed=true

  return (
    <div className="level">
      <h1>Level {level}</h1>
      <div className="levelStage">

        {!completed ?
          <div className="dark">

          </div> :
          <div className="light">

          </div> }




      </div>
      {!completed ? <p>{instructions}</p> : <div><p>{affirmation}</p><p><Link to={`/level/${level+1}`}>Next Level</Link></p></div>}
    </div>
  )
}
