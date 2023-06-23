import React, {useState} from 'react'
import styled from 'styled-components';


export default function SignUp() {
  return (
    <Container>
        <SingUpTitle>Sign Up</SingUpTitle>
        <Label htmlFor='name'>Username:</Label>
        <Label htmlFor='password'>Password:</Label>
        <Input 
        type="text"
        id="name"
         />
         <Button type='submit'>SIGN UP
          <ButtonText>SIGN UP FOR FREE</ButtonText>
          </Button>
    </Container>
  )
}
const Input = styled.input`
   padding: 20px;
   font-size: 12px;
`
const Container = styled.div`
    text-align: center;

`
const Button = styled.button`
    padding: 20px 6px;
    font-size: 15px;
    background-color: yellow;
    color: black;
    border: 2px solid black;
    cursor: pointer;

`
const ButtonText = styled.span`
    margin-left: 10px;
`
const Label = styled.label`
    margin-bottom: 4px;
`
const SingUpTitle = styled.h2`
    margin-bottom: 20px;
`
