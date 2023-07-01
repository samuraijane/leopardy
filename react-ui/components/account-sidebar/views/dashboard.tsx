import React from 'react'
import styled from 'styled-components'

interface DashboardProps {
  avatar: string
  username: string
  email: string
  created_games: number
}

interface UsernameProp {
    user: string
}

interface UserDataProps {
    userData: DashboardProps
}

interface EmailProp {
    email: string
}

const Dashboard: React.FC<UserDataProps> = ({ userData }): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <ColumnContainer>
            <WelcomeText />
            <UsernameText user={userData.username} />
        </ColumnContainer>
        <ColumnContainer>
            <EmailText email={userData.email}/>
        </ColumnContainer>
      </Wrapper>
    </Container>
  )
}
export default Dashboard

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  border-left: 4px;
  background: #f1f1f1;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  text-transform: capitalize;
  color: #000;
  padding: 14px;
`

const Welcome = styled.h1`
  color: #1e7faf;
`
const WelcomeText = () => {
  return <Welcome>Welcome</Welcome>
}

const Username = styled.span`
  font-size: 18px;
  text-transform: lowercase;
  margin-left: 6px;
`

const UsernameText = ({ user }: UsernameProp) => {
  return <Username>{user}</Username>
}

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Email = styled.span`
    text-transform: lowercase;
    font-size: 18px;

`
const EmailText = ({email}: EmailProp) => {
    return <Email>{email}</Email>
}