## React

## What is React?

React is a popular, open-source JavaScript **library** used for building **user interfaces (UIs)**. Developed by Meta (formerly Facebook), React is primarily used to develop **single-page applications (SPAs)**, where updates happen dynamically without reloading the entire page.

React uses a **component-based architecture**, meaning applications are built from isolated, reusable pieces called components.

React’s focus is solely on building UI components. It is often referred to as the "V" in the MVC (Model-View-Controller) pattern.

### Key Features:
- **Declarative**: React uses declarative code, making it easier to debug and predict.
- **Component-Based**: Build encapsulated components that manage their state.
- **Virtual DOM**: Improves performance by minimizing direct manipulation of the real DOM.
- **Learn Once, Write Anywhere**: You can use React not only for web but also mobile apps (React Native).


## Why Use React?

- Strong community support and a rich ecosystem.
- Backed by Meta, ensuring long-term maintenance.
- Simplifies complex UIs into small, manageable components.
- Allows server-side rendering with frameworks like Next.js.
- Vast collection of tools and libraries (Redux, React Router, etc.) to extend functionality.


## Setting Up React

### Using Create React App (CRA):

```
npx create-react-app my-app
cd my-app
npm start
```

Pros:
- Quick setup.
- Pre-configured Webpack and Babel.

Cons:
- Less customizable out of the box.


### Using Vite (Recommended):

```
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

Pros:
- Faster development and build times.
- Modern and lightweight.
- Supports both JavaScript and TypeScript templates.


## React Basics

### Components

Components are the building blocks of React applications. They can be functional or class-based, though functional components are now standard.

#### Functional Component Example:

```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

Or using arrow functions:

```jsx
const Welcome = () => <h1>Welcome to React!</h1>;
```


### JSX

JSX (JavaScript XML) is a syntax extension that allows writing HTML-like code inside JavaScript.

Example:

```jsx
const element = <h1>Hello, {name}</h1>;
```

**Rules of JSX:**
- Must have a single root element.
- Use `className` instead of `class`.
- JavaScript expressions go inside `{}`.


### Props

Props (short for properties) allow components to receive data from their parent components.

Example:

```jsx
const Greeting = ({ name }) => <h2>Hello, {name}!</h2>;

<Greeting name="Edema" />
```

Props are read-only and cannot be modified inside the component.


### State

State is used to manage dynamic data inside components. The `useState` hook lets functional components hold state.

Example:

```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```


### useEffect Hook

`useEffect` is a React hook used to perform side effects such as fetching data, subscriptions, or manually changing the DOM.

Example:

```jsx
import { useEffect } from 'react';

useEffect(() => {
  console.log('Component mounted');

  return () => {
    console.log('Component unmounted');
  };
}, []);
```


## Building a Simple React App

Example: **Counter App**
- Create a component.
- Manage state with `useState`.
- Handle events.
- Display dynamic content.


## Suggested Project Structure

```
src/
├── components/
│   └── Header.jsx
│   └── Footer.jsx
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── styles/
    └── index.css
```

Benefits of this structure:
- Clear separation of concerns.
- Components and pages are organized logically.
- Easier maintenance.


## Intermediate Topics

### Conditional Rendering

Example:

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```


### Rendering Lists with Keys

```jsx
const items = ['Apple', 'Banana', 'Orange'];

items.map((item, index) => (
  <li key={index}>{item}</li>
));
```


### Handling Forms

```jsx
const FormExample = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};
```


## React Router

React Router allows navigation between different pages without reloading the app.

Installation:

```
npm install react-router-dom
```

Example:

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => (
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
```


## State Management Tools

- **Context API** (Built-in for lightweight state sharing).
- **Redux Toolkit** (Recommended for large apps).
- **Zustand** (Minimal state management).

Context API Example:

```jsx
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Hello Context');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const { value } = useContext(MyContext);
  return <p>{value}</p>;
};
```


## Advanced Concepts

- **Custom Hooks**: Reuse logic across components.
- **useReducer**: Manage complex state.
- **React.memo**: Optimize performance by preventing unnecessary re-renders.
- **useMemo & useCallback**: Memoize values and functions.
- **Error Boundaries**: Catch errors in components.
- **Code Splitting & Lazy Loading**: Optimize large apps.
- **Server Components (React 18+)**: Build hybrid applications.
- **Next.js Framework**: For SSR (Server-Side Rendering) and SSG (Static Site Generation).


## Best Practices

- Use functional components and hooks.
- Keep components small and focused.
- Follow proper naming conventions.
- Use PropTypes or TypeScript for type safety.
- Use centralized state wisely.
- Separate logic and UI where possible.
- Optimize rendering performance.
- Write unit tests for components.


## Suggested Final Project

**Task Tracker App:**
- Add, edit, and delete tasks.
- Mark tasks as completed (with strikethrough styling).
- Filter tasks (All, Active, Completed).
- Store tasks in local storage.
- Implement dark/light theme toggle.
- Use React Router for navigation between views.


## Summary

React is a modern JavaScript library that helps build fast, interactive user interfaces with a component-driven architecture. Mastery of its core principles — components, props, state, hooks — combined with intermediate and advanced patterns, prepares engineers to build scalable, maintainable front-end applications.

