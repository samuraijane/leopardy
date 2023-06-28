import { useState } from "react";

export const SignIn = (): JSX.Element => {
  const [userName, checkUsername] = useState('');
  const [password, checkPassword] = useState('');
  
  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    fetch('/serverRouteForLogin', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(checkUsername, checkPassword)
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
    })

    checkUsername('');
    checkPassword('');
    
  }

    return (
      <>
        <h1> Sign In</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Username:</label>
            <input
              type='text'
              id='name'
              value={userName}
              onChange={handleUsername}
            />
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePassword}
            />
          <button type='submit'>SIGN IN</button>
        </form>
      </>
    )
}
  ;
  
  export default SignIn;