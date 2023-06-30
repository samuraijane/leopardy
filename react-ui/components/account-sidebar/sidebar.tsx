import React, { FC, useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { CgGames } from 'react-icons/cg'
import { Turn as Hamburger } from 'hamburger-react'
import { Avatar } from './index'
import styled from 'styled-components'

interface ViewsTypes {
  favorite: string
  created_games: string
  dashboard: string
}

interface SidebarProps {
  action: (currentView: string) => void
  views: ViewsTypes
}
interface GamesContainerProps {
  isActive: boolean
}

interface WrapperProps {
  isActive: boolean
}

const Sidebar: FC<SidebarProps> = ({ action, views }): JSX.Element => {
  // Sidebar open
  const [isActive, setIsActive] = useState(false)
  const [currentView, setCurrentView] = useState('dashboard-view')
  const viewsObject = { ...views }

  // OnClicks

  useEffect(() => {
    action(currentView)
  }, [currentView])

  const handleViewClick = (e: React.MouseEvent<HTMLElement>): void => {
    if (e.currentTarget instanceof HTMLElement) {
      const favorite = e.currentTarget.closest('[data-favorite]')
      const createdGames = e.currentTarget.closest('[data-created-games]')
      createdGames && setCurrentView(viewsObject.created_games)
      favorite && setCurrentView(views.favorite)
    }
  }

  // Icon styles

  return (
    <Container>
      <SideBar>
        <Wrapper isActive={isActive}>
          <Hamburger
            duration={1}
            color="#fff"
            easing="ease-in"
            rounded
            label="Show Menu"
            toggled={isActive}
            toggle={setIsActive}
          />
        </Wrapper>
        <Wrapper isActive={isActive}>
          <Avatar image={'https://placekitten.com/200/300'} />
        </Wrapper>
        <GamesContainer
          onClick={handleViewClick}
          data-favorite
          isActive={isActive}
        >
          <AiOutlineHeart style={iconStyles} />
          <FavoriteGameText />
        </GamesContainer>

        <GamesContainer
          onClick={handleViewClick}
          data-created-games
          isActive={isActive}
        >
          <CgGames style={iconStyles} />
          <CreatedGameText />
        </GamesContainer>
      </SideBar>
    </Container>
  )
}
export default Sidebar

const iconStyles = { fontSize: '45px', color: '#fff', cursor: 'pointer' }

const Container = styled.div`
  min-width: auto;
  width: fit-content;
  height: 100%;
  background: #1e7faf;
  padding: 4px 8px;
  border-radius: 8px;
`
const SideBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const GamesContainer = styled.div<GamesContainerProps>`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.isActive ? `row;` : `column;`)};
  gap: 4px;
  cursor: pointer;
  color: #fff;
`
// Favorite Game
const TextGameStyled = styled.span`
  width: 100%;
  height: auto;
  text-transform: capitalize;
  font-size: 14px;
`

const FavoriteGameText = () => {
  return <TextGameStyled>Favorite Games</TextGameStyled>
}

// Created Games

const CreatedGameText = () => {
  return <TextGameStyled>Created Games</TextGameStyled>
}

// Burger

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: ${(props) => (props.isActive ? `row;` : `column;`)};
  align-items: center;
`
