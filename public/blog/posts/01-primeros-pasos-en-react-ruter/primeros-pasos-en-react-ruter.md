

## Paso 1

**React Router** es una librería esencial para manejar la navegación en aplicaciones React de una sola página (SPA). Permite crear rutas dinámicas, manejar parámetros y generar experiencias fluidas sin recargas de página.

## Instalación

Antes de comenzar, asegúrate de tener una app de React creada. Puedes instalar React Router con:

```bash
npm install react-router-dom
```

## Configurando las rutas básicas

A continuación, veamos cómo configurar tus primeras rutas usando `BrowserRouter`, `Routes` y `Route`:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

Esto configura dos rutas: una para `/` (Home) y otra para `/about` (About). Cada una renderiza un componente correspondiente.

## Navegación entre rutas

React Router proporciona el componente `<Link>` para navegar sin recargar la página:

```jsx

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de</Link>
    </nav>
  );
}
```

Esto genera enlaces que se integran con el historial del navegador.

## Parámetros dinámicos

Puedes pasar parámetros en las rutas para mostrar contenido dinámico:

```jsx
<Route path="/user/:id" element={<UserProfile />} />
```

Dentro de `UserProfile`, puedes obtener el parámetro así:

```jsx
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return <h2>Perfil del usuario con ID: {id}</h2>;
}
```

## Rutas anidadas

React Router permite anidar rutas para estructuras de navegación más complejas:

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="stats" element={<Stats />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

Esto permite que la vista de `Dashboard` contenga secciones internas.

## Componenete AppRouter
Una forma recomendada de separar el enrutamiento es crear el componente `AppRouter` dentro de la carpeta raíz o src.

![AppRouter](/public//blog//posts//01-primeros-pasos-en-react-ruter//approuter.png)
### Enlaces
Para mas informacion Visita la pagina oficial de [React Router DOM](https://reactrouter.com/start/framework/installation "Web Oficial de React Router DOM")

---

React Router es una herramienta poderosa que expande las posibilidades de navegación en React. Entender sus conceptos básicos es el primer paso para construir aplicaciones dinámicas y bien estructuradas. A medida que avances, puedes explorar funcionalidades como rutas protegidas, `useNavigate`, `useLocation` y lazy loading de componentes.

