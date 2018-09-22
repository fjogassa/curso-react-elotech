import React, { Component } from 'react';
import './App.css';
import FormPessoa from './FormPessoa';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      idade: 0,
      pessoas: []
    }
  }

  onChange = (evento) => {
    this.setState({[evento.target.name]: evento.target.value});
  }

  multiplicaIdade = (idade) => {
    return idade * 2;
  }
  
  adicionarPessoa = () => {
    const novaPessoa = {
      nome: this.state.nome,
      idade: this.multiplicaIdade(this.state.idade)
    }

    this.setState((state) => {
      const novasPessoas = [...state.pessoas, novaPessoa]
      return {
        pessoas: novasPessoas,
        nome: '',
        idade: ''
      }
    })
  }

  renderPessoa = (pessoa) => {
    return (
      <div>
        {`Nome: ${pessoa.nome} - Idade: ${pessoa.idade}`}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <FormPessoa nome={this.state.nome} 
          idade={this.state.idade} 
          onChange={this.onChange}
          adicionarPessoa={this.adicionarPessoa}/>

        <div>
          <h1>Lista de Pessoas: </h1>
          {this.state.pessoas.map(this.renderPessoa)}
        </div>
      </div>
    );
  }
}

export default App;
