import React, { useEffect, useState } from 'react'
import { Sidebar } from '../components/account-sidebar'
import styled from 'styled-components'

interface ViewsTypes {
  favorite: string,
  created_games: string,
  dashboard: string
}

const Account = () => {
  const [view, setView] = useState('')
  const views: ViewsTypes = {
    favorite: "favorite-view",
    created_games: "created-games-view",
    dashboard: "dashboard-view"
  }

  const handleAction = (currentView: string): void => {
    setView(currentView)
  }

  useEffect(() => {
    console.log(view)
  },[view])

  return (
    <Container>
      <Sidebar action={handleAction} views={views} />
      {view === views.dashboard && <span>Dashboard</span>}
    </Container>
  )
}

export default Account

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 4px;
`
