import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="span-element">{mangoCount}</span> mangoes
            <span className="span-element"> {bananaCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruits">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="images"
              />
              <button
                type="button"
                className="button"
                onClick={this.onMangoIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruits">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="images"
              />
              <button
                type="button"
                className="button"
                onClick={this.onBananaIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
