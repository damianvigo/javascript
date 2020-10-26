import React, { Component } from 'react'

class Contador extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.contadorInicial)
    this.state = { contador: this.props.contadorInicial }
    // this.state = { contador: 1 }  React es declarativo y reactivo. Declarativo por el state de los componentes.  Declarativo porque no le indico como debe renderizar sino QUE debe renderizar y reactivo porque reacciona a los cambios de los componentes. El estado de los componentes es inmutable, React optimiza cuando debe hacer los cambios en el arbol de elementos del navegador, El metodo setState es asincrono y acepta un parametro que es el nuevo estado que queremos en el componente
    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1 // nuevo estado en el componente.
      })
    }, 1000);
  }

  render() {
    return <ContadorNumero numero={this.state.contador} />
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}

export class ContadorNumero extends Component {
  render() {
    console.log('ContadorNumero render()')
    return <span>{this.props.numero}</span>
  }
}

export default Contador;