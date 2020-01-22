import React, { Component } from 'react';
import Producto from './Producto';

class Productos extends Component {

    state = {
        productos: [
            {id: 1, nombre: "Camisa Angular", precio: 150 },
            {id: 2, nombre: "Camisa React", precio: 160 },
            {id: 3, nombre: "Camisa Vue", precio: 170 },
            {id: 4, nombre: "Camisa Nodejs", precio: 180 }
        ]
    }

    render() {

        const Productos = this.state.productos;
        console.log(Productos);

        return (
            <div>
                <h3>Lista de Productos</h3>
                {Productos.map( producto => (
                    <Producto 
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </div>
        );
    }
}

export default Productos;