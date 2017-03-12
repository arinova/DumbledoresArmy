import React from 'react';
import {Link} from 'react-router';

export default props => {

  let level=props.level
  let instructions=props.instructions
  let affirmation=props.affirmation
  let label=props.label
  let completed=props.completed

  return (
    <div>

      <div className="level">
          <h1>Level <span id="levelNum">{level}</span></h1>
          <div className="levelStage">

            {!completed ?
              <div className={`preStage ${label}`}></div> :
              <div className={`postStage ${label}`}></div>
            }
          </div>
          {!completed ? <p>{instructions}</p> :
            <div><p>{affirmation}</p><p><Link to={`/level/${level+1}`}>Next Level</Link></p></div>
          }
        </div>
    </div>


  )
}
