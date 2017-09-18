import React, {Component} from "react";
import Banda from "./Banda.js";
import PropTypes from "prop-types";

class BandasList extends Component {
    constructor(props) {
        super(props)
    }

    renderBandas() {
        return this.props.bandas.map((b, i) => {
            console.log(b);
            return <Banda banda={b} key={i}/>;
        });
    }

    render() {
        return(<div>
            {(!this.props.bandas.toString()=="") ? this.renderBandas() : "Su Búsqueda no genero resultados"}
        </div>);
    }
}

BandasList.propTypes = {
    bandas : PropTypes.array.isRequired
}

export default BandasList;