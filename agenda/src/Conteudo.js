import React, { Component } from 'react';
import firebase from './firebaseUtil';

class Conteudo extends Component {

    constructor() {
        super();

        this.state = {
            nome: '',
            telefone: '',
            contatos: []
        };

        this.aoAlterarValor = this.aoAlterarValor.bind(this);
        this.salvar = this.salvar.bind(this);
    }

    componentDidMount() {
        firebase
            .ref('contatos')
            .on('value', (snapshot) => {
                let contatos = [];
                snapshot.forEach(item => {
                    let contato = item.val();
                    contato.id = item.key;
                    contatos.push(contato);
                });
                this.setState({ contatos });
            });
    }

    salvar(evento) {
        evento.preventDefault();
        firebase
            .ref('contatos')
            .push({ nome: this.state.nome, telefone: this.state.telefone });
        this.setState({ nome: '', telefone: '   ' });
    }

    aoAlterarValor(evento) {
        let nomeCampo = evento.target.name;
        let valor = evento.target.value;
        this.setState({ [nomeCampo]: valor });
    }

    render() {
        const listaContatos = this.state.contatos.map(contato => {
            return (
                <tr key={contato.id}>
                    <td>{contato.nome}</td>
                    <td>{contato.telefone}</td>
                </tr>
            )
        });

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.salvar}>
                            <div className="form-group">
                                <label>Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    onChange={this.aoAlterarValor}
                                    value={this.state.nome}
                                    className="form-control"
                                    required />
                            </div>
                            <div className="form-group">
                                <label>Telefone</label>
                                <input
                                    type="text"
                                    name="telefone"
                                    onChange={this.aoAlterarValor}
                                    value={this.state.telefone}
                                    className="form-control"
                                    required />
                            </div>
                            <input
                                type="submit"
                                className="btn btn-primary"
                                value="Salvar" />
                        </form>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col text-center">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Telefone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaContatos}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conteudo;