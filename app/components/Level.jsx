import React from 'react';
import {Link} from 'react-router';

export default props => {

  let level=props.level
  let instructions=props.instructions
  let affirmation=props.affirmation
  let preStage= props.preStage
  let postStage= props.postStage
  let completed=props.completed

  return (
    <div>

      <div className="level">
          <h1>Level <span id="levelNum">{level}</span></h1>
          <div className="levelStage">

            {!completed ?
              preStage() :
              postStage()
            }
          </div>
          {!completed ? <p>{instructions}</p> :
            <div><p>{affirmation}</p><p><Link to={`/level/${level+1}`}>Next Level</Link></p></div>
          }
        </div>
    </div>


  )
}
