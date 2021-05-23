export const loginReducer = (state,action) => {
    let usernameErrorMsg='',emailErrorMsg='',passwordErrorMsg='',password2ErrorMsg='';
            let usernameSuccess,emailSuccess,passwordSuccess,password2Success;
            let usernameError,emailError,passwordError,password2Error,inputsValid;
    switch (action.type){
        case 'field':
            return {
                ...state,
                [action.payload.field]: action.payload.value 
            }
        case 'checkRequired':
            if(state.username === '')
            {
                usernameError = true;
                usernameErrorMsg = 'enter username';
            }    
            if(state.email === '')
            {
                emailError = true;
                emailErrorMsg = 'enter email'
            }    
            if(state.password === '')
            {
                passwordError = true;
                passwordErrorMsg = 'enter password'
            }    
            if(state.password2 === '')
            {
                password2Error = true;
                password2ErrorMsg = 'enter password'
            }    
            return {
                ...state,
                 error: {
                    usernameError: usernameError,
                    emailError: emailError,
                    passwordError: passwordError,
                    password2Error: password2Error,
                },
                usernameErrorMsg: usernameErrorMsg,
                emailErrorMsg: emailErrorMsg,
                passwordErrorMsg: passwordErrorMsg,
                password2ErrorMsg: password2ErrorMsg,
            };
        case 'checkValues':
            const {usernameLength,passwordLength} = action.payload;
            if(state.username.length < usernameLength[0] || state.username.length > usernameLength[1])
            {
                usernameError = true;
                usernameErrorMsg = `username must be ${usernameLength[0]}-${usernameLength[1]} characters long`
            }else{
                usernameError = false;
                usernameSuccess = true;
            }  
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(state.email)){
                emailSuccess= true;
                emailError = false;
            }
            else{
                emailError = true;
                emailErrorMsg = 'email is not valid';
            }
            if(state.password.length < passwordLength[0] || state.password.length > passwordLength[1])
            {
                passwordError = true;
                passwordErrorMsg = `password must be ${passwordLength[0]}-${passwordLength[1]} characters long`
            }else{
                passwordError = false;
                passwordSuccess = true;
            }   
            if(state.password2.length < passwordLength[0] || state.password2.length > passwordLength[1])
            {
                password2Error = true;
                password2ErrorMsg = `password must be ${passwordLength[0]}-${passwordLength[1]} characters long`
            }else{
                if(state.password !== state.password2){
                    password2Error = true;
                    password2ErrorMsg = 'passwords do not match';
                }
                else{
                password2Error = false;
                password2Success = true;
                }
            }   
            return {
                ...state,
                 error: {
                    usernameError: usernameError,
                    emailError: emailError,
                    passwordError: passwordError,
                    password2Error: password2Error,
                },
                usernameErrorMsg: usernameErrorMsg,
                emailErrorMsg: emailErrorMsg,
                passwordErrorMsg: passwordErrorMsg,
                password2ErrorMsg: password2ErrorMsg,
                success: {
                    usernameSuccess: usernameSuccess,
                    emailSuccess: emailSuccess,
                    passwordSuccess: passwordSuccess,
                    password2Success: password2Success,
                }
            };
        case 'checkallInputs':
            if(state.success.usernameSuccess && state.success.emailSuccess && state.success.passwordSuccess && state.success.password2Success){
                inputsValid = true;
            }
            else
                inputsValid = false;
            return {
                ...state,
                inputsValid: inputsValid
            }
        case 'login':
            return {
                ...state,
                isloggedin: true
            }
        default:
            throw new Error('Error');
    }
}