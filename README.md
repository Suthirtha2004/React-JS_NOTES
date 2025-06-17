# REACT PRACTICE SERIES

### Some Rules of Hooks

1. Hooks should be called at the top level of your React function (not inside loops, conditions, or nested functions).
2. Hooks can only be called from React function components or custom hooks, not from regular JavaScript functions.
3. When creating a custom hook, its name should start with `use` (e.g., `useFetch`).
4. The order of hooks should not change between renders.

### Short Circuit Evaluation

- **Logical OR (`||`)**: Returns the first truthy value or the last value if none are truthy.
- **Logical AND (`&&`)**: Returns the first falsy value or the last value if none are falsy.
- **Logical NOT (`!`)**: Converts a value to its boolean opposite.
- **Nullish Coalescing (`??`)**: Returns the right-hand value only if the left-hand value is `null` or `undefined`.

**Example:**
```jsx
const name = userName || "Guest";
const isLoggedIn = !!user;
const display = value ?? "Default";
```

### Types of Export

A. **Named Export**
```js
export const ComponentName = () => {};
// Import:
import { ComponentName } from './ComponentName';
```
B. **Default Export**
```js
const ComponentName = () => {};
export default ComponentName;
// Import:
import ComponentName from './ComponentName';
```
> **Tip:** You can have multiple named exports per file, but only one default export.

### Controlled vs Uncontrolled

1. **Controlled components**: Form data is handled by React state.
2. **Uncontrolled components**: Form data is handled by the DOM itself (using refs).
3. For controlled components, always provide an `onChange` handler and a `value` prop.
4. Uncontrolled components are useful for integrating with non-React code or for simple use cases.

**Example Controlled Input:**
```jsx
const [value, setValue] = useState("");
<input value={value} onChange={e => setValue(e.target.value)} />
```

### Dynamic Values in JSX

When handling form inputs in React, to update a specific field dynamically:

- The `name` attribute of the input should match the corresponding state property.
- In the change handler, use the `name` and `value` from the event target to update state.
- Use the spread operator to retain previous state values and update only the changed field.

**Example:**
```jsx
const [formData, setFormData] = useState({ firstName: "", lastName: "" });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};
```
This way, `[name]: value` dynamically updates the correct field in the state object.

---

## Additional Best Practices

### Component Naming

- Component names should start with a capital letter.
- File names should match the component name for clarity.

### Keys in Lists

- Always provide a unique `key` prop when rendering lists.
- Prefer a unique id from your data over using the array index.

### Folder Structure

- Group related components, hooks, and assets in folders.
- Use `index.js` files for cleaner imports if needed.

### React Version

- Use the latest stable version of React for new features and security updates.
- Check your version with `npm list react` or by looking in `package.json`.

---

## Context API

The **Context API** allows you to share data (like themes, user info, etc.) across your component tree without passing props down manually at every level.

**How to use:**
1. **Create a context:**
   ```js
   import { createContext } from "react";
   export const MyContext = createContext();
   ```
2. **Create a provider component:**
   ```js
   export const MyProvider = ({ children }) => {
     const value = { /* your shared state */ };
     return (
       <MyContext.Provider value={value}>
         {children}
       </MyContext.Provider>
     );
   };
   ```
3. **Consume context in child components:**
   ```js
   import { useContext } from "react";
   import { MyContext } from "./MyContextFile";
   const { value } = useContext(MyContext);
   ```

**Best Practices:**
- Use context for global data (theme, auth, language, etc.).
- Avoid overusing context for frequently changing data (can cause unnecessary re-renders).
- When props need to be passed to grand grand children component or many levels of components are there
- Always try to wrap the children component within the provider section

---

## useReducer Hook

The **useReducer** hook is an alternative to `useState` for managing complex state logic in React components.

**Syntax:**
```js
const [state, dispatch] = useReducer(reducer, initialState);
```

- `reducer` is a function that takes `(state, action)` and returns a new state.
- `dispatch` is a function to send actions to the reducer.

**Example:**
```js
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const [count, dispatch] = useReducer(reducer, 0);
```
**Usage in JSX:**
```jsx
<button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
<button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
```

**When to use useReducer:**
- When you have complex state logic that involves multiple sub-values.
- When the next state depends on the previous one.
- When you want to centralize state updates (like Redux, but local).

---
