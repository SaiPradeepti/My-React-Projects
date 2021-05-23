import React,{ useReducer } from 'react'
import { loginReducer } from './loginReducer'

const initialState = {
  username: '',
  email: '',
  password: '',
  password2: '',
  success: {
    usernameSuccess: '',
    emailSuccess: '',
    passwordSuccess: '',
    password2Success: '',
  },
  error: {
    usernameError: '',
    emailError: '',
    passwordError: '',
    password2Error: '',
  },
  usernameErrorMsg: '',
  emailErrorMsg: '',
  passwordErrorMsg: '',
  password2ErrorMsg: '',
  inputsValid: '',
  isloggedin:''
}

const App = () => {
  const [state,dispatch] = useReducer(loginReducer,initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:'checkRequired'});
    dispatch({type: 'checkValues',payload:{usernameLength: [3,15],passwordLength:[6,25]}});
    dispatch({type: 'checkallInputs'});
  }

  if(state.inputsValid){
    setTimeout(()=>{
      dispatch({type:'login'});
    }, 1500);
  }

  return (
    <div className="container">
      {
        state.isloggedin && <h1 style={{textAlign:'center'}}>You've regiestered with us!</h1>
      }
      {
        !state.isloggedin && <>
        <h1>register with us</h1>
        <form id="form" className="form">
            <div className="form-control">
              <label htmlFor="username">username</label>
              <input type="text" id="username" onChange={(e) => dispatch({type:'field',payload: {field:'username', value: e.target.value}})}  placeholder="Enter your name" className={`${state.success.usernameSuccess?'success':false} ${state.error.usernameError?'error':false}`} />
              <small style={{visibility: `${state.error.usernameError ? 'visible' : 'hidden'}`}}>{state.usernameErrorMsg}</small>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" onChange={(e) => dispatch({type:'field',payload: {field:'email', value: e.target.value}})} placeholder="Enter Email id" className={`${state.success.emailSuccess?'success':false} ${state.error.emailError?'error':false}`} />
              <small style={{visibility: `${state.error.emailError ? 'visible' : 'hidden'}`}}>{state.emailErrorMsg}</small>
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="text" id="password"onChange={(e) => dispatch({type:'field',payload: {field:'password', value: e.target.value}})} placeholder="Enter password" className={`${state.success.passwordSuccess?'success':false} ${state.error.passwordError?'error':false}`} />
              <small style={{visibility: `${state.error.passwordError ? 'visible' : 'hidden'}`}}>{state.passwordErrorMsg}</small>
            </div>
            <div className="form-control">
              <label htmlFor="password2">Confirm Password</label>
              <input type="text" id="password2" onChange={(e) => dispatch({type:'field',payload: {field:'password2', value: e.target.value}})} placeholder="Enter password again" className={`${state.success.password2Success?'success':false} ${state.error.password2Error?'error':false}`} />
              <small style={{visibility: `${state.error.password2Error ? 'visible' : 'hidden'}`}}>{state.password2ErrorMsg}</small>
            </div>
            <button className="form__submit" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        </>
      }
    </div>
  )
}

export default App
