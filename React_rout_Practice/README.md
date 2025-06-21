## React Router

**React Router** is the standard library for routing in React. It enables navigation among different components, changing the browser URL, and keeping the UI in sync with the URL.

### Installation

```sh
npm install react-router-dom
```

### Basic Usage

1. **Set up your routes using `createBrowserRouter` and `RouterProvider`:**

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AppLayout from "./Components/Layout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

2. **Create a layout with an `<Outlet />` for nested routes:**

```jsx
import { Outlet, Link } from "react-router-dom";

export function AppLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}
```

### Key Concepts

- **RouterProvider**: Wraps your app and provides routing context.
- **createBrowserRouter**: Creates a router using the HTML5 history API.
- **Routes and Route**: Define the mapping between URLs and components.
- **Outlet**: Renders the matched child route element.
- **Link**: Used for navigation without reloading the page.

### Best Practices

- Always wrap your app with `RouterProvider`.
- Use `<Link>` instead of `<a>` for navigation.
- Organize your routes and layouts for scalability.
- Use nested routes for layouts and shared UI.

**Official Docs:**  
[React Router Documentation](https://reactrouter.com/en/main)

---
