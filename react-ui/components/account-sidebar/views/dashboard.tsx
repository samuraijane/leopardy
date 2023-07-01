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

const Dashboard: React.FC<UserDataProps> = ({ userData }): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <WelcomeText />
        <UsernameText user={userData.username} />
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
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  font-size: 16px;
  text-transform: uppercase;
  color: #000;
`

const Welcome = styled.h1`

`
const WelcomeText = () => {
  return <Welcome>Welcome</Welcome>
}

const Username = styled.span`
  font-weight: bold;
  font-size: 20px;
`

const UsernameText = ({ user }: UsernameProp) => {
  return <Username>{user}</Username>
}
