import React from 'react';

export default props => {

  let level=props.level
  let instructions=props.instructions

  return (
    <div className="level">
      <h1>Level {level}</h1>
      <p>{instructions}</p>
    </div>
  )
}
