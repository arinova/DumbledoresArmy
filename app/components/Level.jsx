import React from 'react';

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
      <p>{!completed ? instructions : affirmation}</p>
    </div>
  )
}
