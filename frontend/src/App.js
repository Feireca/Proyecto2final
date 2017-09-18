import React, { Component } from 'react';
import Buscador from "./Buscador";
import BandasList from "./BandasList";
import ReactModal from 'react-modal';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            bandas:[
            ],
            search: "",
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    componentDidMount() {
        fetch("/bandas", {method:"GET", headers:{accept:"application/json"}})
            .then((res) => {
            if(res.ok) return res.json();
            })
            .then((bandas) => {
            this.setState({
                bandas: bandas
            })
        });
    }

    search(text) {
        this.setState ({
            search: text
        });
    }

    render() {
        return (
        <div className="principal">
            <div className="centrado">
                <h2 className="titulo"> Bandagio</h2>
                <Buscador search={this.search.bind(this)}/>
                <button onClick={this.handleOpenModal} className="btn btn-bandagio">Nombre</button>
                <button onClick={this.handleOpenModal} className="btn btn-bandagio">Genero</button>
                <button onClick={this.handleOpenModal} className="btn btn-bandagio">Evento</button>
            </div>
            <div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <table className="table table-bordered">
                        <tr>
                            <th className="tama fondo"><strong>NOMBRE</strong></th>
                            <th className="tama fondo"><strong>GENERO</strong></th>
                            <th className="tama fondo"><strong>FECHA</strong></th>
                        </tr>
                    </table>
                    <BandasList bandas={this.state.bandas.filter((b) => {
                        return b.nombre.startsWith(this.state.search);
                    })}/>
                    <button onClick={this.handleCloseModal} className="btn btn-bandagio btn-centrar">Cerrar</button>
                </ReactModal>
            </div>
        </div>

        );
    }
}

export default App;
