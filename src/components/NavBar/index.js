// Write your code here.

import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  renderScores = () => {
    const {currentScore, isGameOver, topScore} = this.props

    if (isGameOver) {
      return null
    }
    return (
      <div className="scores-container">
        <p className="score-label">
          Score: <span className="score-value">{currentScore}</span>
        </p>
        <p className="score-label">
          Top Score: <span className="score-value">{topScore}</span>
        </p>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav-bar-container">
        <div className="title-with-score-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              className="logo-image"
              alt="Emoji Logo"
            />
            <h1 className="title">Emoji Game</h1>
          </div>
          {this.renderScores()}
        </div>
      </nav>
    )
  }
}

export default NavBar
