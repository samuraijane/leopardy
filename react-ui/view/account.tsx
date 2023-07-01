import React, { useEffect, useState } from 'react'
import { Sidebar, Dashboard } from '../components/account-sidebar'
import styled from 'styled-components'
import data from '../mocks/user.json'

interface ViewsTypes {
  favorite: string
  created_games: string
  dashboard: string
}

interface UserTypes {
  avatar: string
  username: string
  email: string
  created_games: number
}

const Account = () => {
  const [view, setView] = useState('')
  const [user, setUser] = useState<UserTypes>({
    avatar: 'https://placekitten.com/200/300',
    username: 'User-test',
    email: 'usertest@gmail.com',
    created_games: 2,
  })
  const views: ViewsTypes = {
    favorite: 'favorite-view',
    created_games: 'created-games-view',
    dashboard: 'dashboard-view',
  }

  const handleAction = (currentView: string): void => {
    setView(currentView)
  }

  useEffect(() => {
    console.log(view)
  }, [view])

  useEffect(() => {
    data.map((item) => {
      setUser({
        avatar: item.avatar,
        username: item.username,
        email: item.email,
        created_games: item.created_games,
      })

      return () =>
        setUser({
          avatar: 'https://placekitten.com/200/300',
          username: 'User-test',
          email: 'usertest@gmail.com',
          created_games: 2,
        })
    })
  }, [data])

  return (
    <Container>
      <Sidebar action={handleAction} userData={user} views={views} />
      {view === views.dashboard && <Dashboard userData={user}/>}
    </Container>
  )
}

export default Account

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
`
