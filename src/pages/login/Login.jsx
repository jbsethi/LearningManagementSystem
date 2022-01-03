import React from 'react'

import { useDispatch } from 'react-redux'

import { setLoginStatus } from '../../store/user'

const Login = () => {
  const dispatch = useDispatch()

  const submitForm = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    console.log(data)

    dispatch(setLoginStatus(true))
  }

  return (
    <div>
      Login

      <form onSubmit={submitForm}>
        <div>
          <label>Email</label><br/>
          <input name="email" type="text" />
        </div>
        <div>
          <label>Password</label><br/>
          <input name="password" type="password" />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login
