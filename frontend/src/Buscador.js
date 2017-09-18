import React, {Component} from "react";
import './buscador.css';

export default class Buscador extends Component {
    constructor(props) {
        super(props);
    }

    onEnter(evt) {
        this.props.search(evt.target.value);
    }

    render() {
        return (<div className="margin-left-right">
            <input className="form-control input-lg centrar" type="text" placeholder="Buscar Por..." onInput={this.onEnter.bind(this)}/>
        </div>)
    }
}
