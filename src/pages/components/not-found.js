import React, { PureComponent } from 'react';
import '../containers/generic-page.css';

class NotFound extends PureComponent {
  handleBack = () => {
    //this.props.history.goBack()
    this.props.history.go(-2);
  }

  handleForward = () => {
    //this.props.history.goBack()
    this.props.history.go(2);
  }

  handleRandom = () => {
    const random = Math.round(Math.random(10) * (10 - 1) + 1)
    this.props.history.push(`/videos?id=${random}`, { id: random})
  }

  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button className="button" onClick={this.handleForward}>
          Ir a la siguiente pagina 👞
        </button>
        <button className="button" onClick={this.handleBack}>>
          Ir a la pagina anterior
        </button>
        <button className="button" onClick={this.handleRandom}>>
          Video random
        </button>
      </div>
    )
  }
}

export default NotFound