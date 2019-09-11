import React from 'react'
import Header from './header'
import Buttons from './buttons'
import Field from './field'
import Directions from './directions'
import makeInstruction from './instruction'
import './style.css'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Выбери размер поля и количество шагов',
      buttonText: "Запустить",
      size: 3,
      steps: 10,
      instructions: {
        size: 0,
        start: 0,
        end: 0,
        directions: []
      }
    }
  }

  fieldSizeClickUp = () =>
    this.setState((prevState) => (prevState.size < 5) ? { size: prevState.size + 1 } : { size: prevState.size })

  fieldSizeClickDown = () =>
    this.setState((prevState) => (prevState.size > 3) ? { size: prevState.size - 1 } : { size: prevState.size })

  stepsClickUp = () =>
    this.setState((prevState) => (prevState.steps < 30) ? { steps: prevState.steps + 5 } : { steps: prevState.steps })

  stepsClickDown = () =>
    this.setState((prevState) => (prevState.steps > 10) ? { steps: prevState.steps - 5 } : { steps: prevState.steps })

  startGame = () =>
    this.setState((prevState) => ({ instructions: makeInstruction(prevState.size, prevState.steps), message: 'Кликни по конечной клетке', buttonText: 'Перезапустить' }))

  clickGame = (message) => this.setState({ message })

  render() {
    return (
      <div className='main'>
        <Header rules={'Правила просты: дана последовательность шагов и точка старта. Определи итоговую точку.'} />
        <Buttons text={`${this.state.size}x${this.state.size}`} down={this.fieldSizeClickDown} up={this.fieldSizeClickUp} />
        <Buttons text={`${this.state.steps} шагов`} down={this.stepsClickDown} up={this.stepsClickUp} />
        <button className='button_start' onClick={this.startGame}>{this.state.buttonText}</button>
        <p className='result'>{this.state.message}</p>
        <Directions directions={this.state.instructions.directions} />
        <Field instructions={this.state.instructions} click={this.clickGame} />
      </div>
    )
  }
}

export default App;
