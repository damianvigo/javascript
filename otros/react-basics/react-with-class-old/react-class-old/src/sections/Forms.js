import React, { Component } from 'react'

class Forms extends Component {
  constructor() {
    super()
    this.state = {
      inputName: '',
      inputTwitter: '@',
      inputTerms: true,
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  handleChange = (e) => {
    console.log('handleChange')
    console.log(e.target.checked)
    this.setState({inputTerms: e.target.checked})
  }

  render() {
    return (
      <div>
        <h4>Formularios</h4>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor='name'>Nombre:</label>
            <input type='text' id='name' name='userName' placeholder='Introduce el nombre' ref={inputElement => this.inputName = inputElement} value={this.state.inputName} 
              onChange={e => this.setState({ inputName: e.target.value  })}
            />
          </p>

          <p>
            <label htmlFor='twitter'>Twitter:</label>
            <input type='text' id='twitter' name='twitterAccount' placeholder='Introduce tu Twitter'  value={this.state.inputTwitter} onChange={e => this.setState({ inputTwitter: e.target.value  })} />
          </p>

        <p>
          <label htmlFor="">
            <input type="text" onChange={this.handleChange} type='checkbox' checked={this.state.inputTerms} /> Accepted terms 
          </label>
        </p>

          <button>Enviar</button>
        </form>
      </div>
    )
  }
}

export default Forms