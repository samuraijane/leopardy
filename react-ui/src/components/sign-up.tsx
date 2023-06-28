import React, { useState } from 'react';
import styled from 'styled-components';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);

    setUsername('');
    setPassword('');

    setShowSuccessMsg(true);
  };

  return (
    <Container>
      <SignUpTitle>Sign Up</SignUpTitle>
      {showSuccessMsg ? (
        <SuccessMsg>
          You have signed up! Thanks.
        </SuccessMsg>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor='name'>Username:</Label>
            <Input
              type='text'
              id='name'
              value={username}
              onChange={handleUsernameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='password'>Password:</Label>
            <Input
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
            />
          </FormGroup>
          <Button type='submit'>SIGN UP</Button>
        </Form>
      )}
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  border: 1px solid black;
  margin: 20px;
  padding: 20px;
  width: 30%;
`;

const SignUpTitle = styled.h2`
  margin-bottom: 20px;
  margin-right: 35px;
`;

const Form = styled.form`
  width: 200px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 20px;
  font-size: 12px;
`;

const Button = styled.button`
  padding: 20px 6px;
  font-size: 15px;
  background-color: yellow;
  color: black;
  border: 2px solid black;
  cursor: pointer;

    &:hover {
        background-color: white;
    }
`;

const SuccessMsg = styled.p`
`;
