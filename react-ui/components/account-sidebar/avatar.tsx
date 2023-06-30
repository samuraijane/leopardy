import React from 'react'
import styled from 'styled-components'

interface AvatarProps {
  image: string
}

const Avatar: React.FC<AvatarProps> = ({ image }: AvatarProps): JSX.Element => {
  return (
    <Container>
      <Image src={image}></Image>
    </Container>
  )
}
export default Avatar

const Container = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid transparent;
  overflow: hidden;
    margin: 0 auto;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`
