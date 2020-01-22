**Notas**

*Creacion de componente*

Hay dos tipos de componente
+ Con estado
+ Sin estado

**Con estado**

> se escribe un una clase que extiende de React.Component. El codigo html en jsx se escribe en la clase dentro del metodo render, si el componente regresa mas componentes, los componentes deben ir dentro de un div contenedor

*El State*

> El constructor debe llebar un super

> El state es basicamente un objeto donde puedo agregar data

> El componente tiene un ciclo de vida, empieza en el contructor y despues hay metodos especiales
como `componentDidMount` que se ejecuta cuando ya se haya cargado el componente

> Para cambiar propiedades en el state se usa el metodo `this.setState( { propiedad: valorNuevo } )` que recibe un objeto con las propiedades a cambiar

> Cada que se refleja un cambio en el state, el metodo render se ejecuta

*Los Metodos Reactivos*

> los metodos con programacion reactiva van con bind y se pasa la referencia de la clase dentro del constructor de la siguiente forma `this.metodo = this.metodo.bind(this)`, luego son invocados en el elemento, ejemplo `<input onClick = {this.metodo} />`

```
import React, { Component } from 'react';
class Footer extends Component {

    constructor(...props) {
        super(..props)

        this.state = {
            propiedad1: "algo"
        }

        // Metodos Reactivos
        this.handleOnMetodo = this.handleOnMetodo.bind(this);
    }

    handleOnMetodo(){
        // modifica propiedad1 en el state;
        this.setState({
            propiedad1: "otraCosa"
        })
    }

    render(){ 
        return (html) 
    }
}

export default Footer;
```

**Sin estado**

> Son para componentes de solo presentacion y se convierte en funciones flecha, que pueden ó no recibir props como argunmentos. De este modo se evita hacer menos uso del Dom Virtual de React

```
import React from 'react';

const Footer = (props) => (
      <div className="Footer">
        <p>&copy; Fili Arl {props.anio}</p>
      </div>
    )

export default Footer;
```

*Props y PropTypes*

> El componente padre es el que pasa los props al componente hijo de la siguiente manera 
```
<Hijo anio={valor_de_propiedad} />
```

> Los prop-types son para darle mas fuerza al tipado de las props

```
static propTypes = { propiedad: PropTypes.string.isRequired };
``` 

> La interpolacion para usar js se escribe dentro de corchetes 
```
<p> { codigo js} </p>
```