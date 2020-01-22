import React, { Fragment } from 'react';

const Producto = ({producto}) => {
    return (
        <Fragment>
            <h3> <small>{producto.id}</small> {producto.nombre} </h3>
            <p>${producto.precio}MXN</p>
        </Fragment>
    );
};

export default Producto;