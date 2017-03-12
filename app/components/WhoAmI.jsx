import React from 'react'
import {Link} from 'react-router';

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
    <Link to="/home"><span className="whoami-user-name">{user && user.name}    </span></Link>
    <button className="btn logout" onClick={logout}>Logout</button>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
) (WhoAmI)
