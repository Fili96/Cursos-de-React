**Notas**

*BrowserRouter*

> El Router va dentro del metodo render, en lugar de escribir el componente, se escribe el Router
junto con el target del html. En el interior del Router van las rutas


```
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routes'

render(
    <Router>
        <AppRoutes/>
    </Router>,
    document.getElementById('root')
);
```

*Switch*

> El switch va dentro del componente contenedor y es ala vez contenedor de las rutas. El Switch
funciona parecido a un switch de programacion, hace que las rutas puedan hacer match con la url. El prop `exact` ayuda a que la comparacion del match sea exacto. Si no se coloca un `path` en el Route, este siempre sera el caso `else, default, otherwise, etc` analogo a un Switch de programacion

*Route*

> Las rutas son un metodo que se exporta. El metodo regresa un html, donde el contenedor es el 
componente donde se pondran las rutas. Para crear una ruta se usa `Route`

```
import { Route, Switch } from "react-router-dom";

const AppRoutes = () => {
     return (
        <App>
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/" component={Home} />
                <Route component={Page404} />
            </Switch>
        </App>
    );
}

export default AppRoutes;
```

*Link*

> Se puede usar `Link` para crear enlaces de React para navegar entre las rutas. Estos enlaces son al estilo SPA y son distintos a los enlaces del tipo `<a href="#">`

```
import { Link } from "react-router-dom";

<ul className="Header-menu">
    {
        items && items.map(
        (item, key) => 
        <li key={key}> 
            <Link to={item.url} className="Header-link">
            {item.title}
            </Link>
        </li>
        )
    }
</ul>
```