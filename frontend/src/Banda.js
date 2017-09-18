import React, {Component} from "react";
import PropTypes from "prop-types";
import './banda.css';

class Banda extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(<div className="todo">
            <table className="table table-bordered">
                <tr>
                    <td className="tama"><strong>{this.props.banda.nombre}</strong></td>
                    <td className="tama"><strong>{this.props.banda.genero}</strong></td>
                    <td className="tama"><strong>{this.props.banda.evento}</strong></td>
                </tr>
            </table>
        </div>)
    }
}

Banda.propTypes = {
    banda : PropTypes.object.isRequired
}

export default Banda;