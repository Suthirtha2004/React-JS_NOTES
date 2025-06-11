# REACT PRACTICE SERIES

### Some Rules of Hooks -

1. Should be included in the higher section of code
2. Cannot be declared inside functions , loops or nested funtions
3. Should not be used in normal JS files to be used in JSX or components
4. When creating custom hook should be starting with the keyword use___ (ex- useFetch)


### Short Circuit Evaluation
    Logical OR
    Logical NOT
    Logical AND
    Null Coalesing(??) -> If the other value is NULL display that orelse display the other expression

### Types of Export

    A. export const Component name ----> import {Component name}
    B. const Component name ...
            export default component name; -----> import Component name
  
### Controlled vs Uncontrolled
1. Controlled components in React are those where form data is handled by that component state
2. When we change the values of the controlled states it becomes uncontrolled.
3. Uncontrolled components in React where form data is handled by the data itself.
4. For a value attribute given in form we definitely need a onChange event.