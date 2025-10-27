
## Routing and React Router

## 1. Introduction to Routing
Routing is the process of mapping a URL to a specific piece of UI. In **Single Page Applications (SPAs)** built with React, routing is managed on the client side. Instead of full page reloads, React Router swaps out components while keeping the app running.

### Why Routing Matters
- Provides clean, shareable URLs.
- Supports navigation between different parts of an app.
- Enables nested layouts and UI consistency.

---

## 2. Installing React Router
To get started, install React Router:

```bash
npm install react-router-dom
```

---

## 3. Basic Routing Example
```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## 4. Nested Routes
Nested routes allow you to create parent-child relationships in UI.

```jsx
import { Outlet, NavLink } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <NavLink to="/dashboard">Overview</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

function DashboardOverview() {
  return <h3>Overview Content</h3>;
}

function DashboardSettings() {
  return <h3>Settings Content</h3>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 5. Dynamic Routes with Params
Dynamic segments (`:id`) make routes flexible.

```jsx
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  return <h2>Product ID: {id}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
```

Navigate to `/products/42` and the app displays **Product ID: 42**.

---

## 6. Navigation Techniques
### Using `<Link>`
```jsx
<Link to="/about">Go to About</Link>
```

### Programmatic Navigation with `useNavigate`
```jsx
import { useNavigate } from "react-router-dom";

function Example() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/about")}>Go</button>;
}
```

---

## 7. Error Handling and 404 Pages
Add a wildcard route for undefined paths.

```jsx
function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 8. Protected Routes
Protect certain routes with authentication checks.

```jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isAuth }) {
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const isAuth = false; // Replace with real auth logic
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 9. Summary
- **Routing** maps URLs to UI components.
- **React Router** is the standard library for client-side routing in React.
- Key features: basic routes, nested routes, dynamic routes, navigation helpers, error handling, and protected routes.
- Mastering these concepts is essential for building scalable React applications.
