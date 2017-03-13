import axios from 'axios'

const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  case ADD_POINTS_TO_USER:
    return action.user
  }
  return state
}

const ADD_POINTS_TO_USER = 'ADD_POINTS_TO_USER'
export const addPointsToUser = user => ({
  type: ADD_POINTS_TO_USER, user
})

export const addPoints = (user, points) =>
  dispatch =>
    axios.post(`/api/users/${user.id}`,
      {addPoints: points})
      .then((user) => {
        console.log("before dipatch", user)
        dispatch(addPointsToUser(user.data))
      })
      .catch(console.error)




const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default reducer
