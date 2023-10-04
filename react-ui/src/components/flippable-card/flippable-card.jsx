import { CSSTransition } from "react-transition-group"
import {useState} from 'react'
import './flippable-card.scss'

const FlippableCard  = () => {

  const [showFront, setShowFront] = useState(true)
  const [isActive, setIsActive] = useState(false)

  function flip() {
    setShowFront(false)
  }

  function scoreButton() {
    setShowFront(true)
    setIsActive(true)
  }
  
    return (
      <>
      <div className='game-board'>
        <div className="flippable-card-container"> 
        <CSSTransition
          in={showFront}
          timeout={300}
          classNames = 'flip'
        >
          <div onClick={flip} className="card"> 
            <div className="card-back"> Question </div>
            <div className={isActive ? 'isActive' : 'card-front'}>100</div>
          </div>
        </CSSTransition>
        </div>
      </div>
      <button onClick={scoreButton} className="score-button"> Button </button>
    </>
    )
  };
  
    export default FlippableCard;