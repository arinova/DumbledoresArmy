const reducer = (state={level: 1, completed:false}, action) => {

  const newState = Object.assign({}, state);

  switch(action.type) {
  case SELECT_LEVEL:
    newState.level= action.level
    newState.completed= false
    return newState

  case TOGGLE_COMPLETED:
    newState.completed= action.completed
    return newState

  }

  return state
}

const SELECT_LEVEL= 'SELECT_LEVEL'

export const selectLevel = level => ({
	type: SELECT_LEVEL,
	level: level
});

const TOGGLE_COMPLETED='TOGGLE_COMPLETED'

export const toggleCompleted = completed => ({
	type: TOGGLE_COMPLETED,
	completed: completed
});

export default reducer
