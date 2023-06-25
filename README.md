# My Sandbox

This is my Sandbox where I create components in order to learn new things in React, or just have a reference to reusable components in future projects.

This project uses Storybook to render the components. To start the storybook server run the `npm start` command. Then navigate to `http://localhost:6006/`.

## More about the components

### Array
This component uses a custom hook called `useArray`. The aim of this hook is to abstract the lengthy lines of code when performing simple operations on Arrays.

The hook can be initialised like:
```
const { array, set, push, update, remove, filter, clear } = useArray([1, 2, 3, 4, 5, 6])
```

The `useArray` hook takes 1 parameter, which is the initial array.
The hook then returns the state of the current array in a variable caled `array` as well mutliple functions:

`set(newArray)` - replaces the previous array with a `newArray`.

`push(item)` - adds an `item` to the end of the array.

`update(index, item)` - swap the item at `index` with a new `item`.

`remove(index)` - remove the item at `index`.

`filter(function)` - filter the array based on a condition of a `function`. e.g. `const function = num => num > 3`.

`clear()` - set the array to an empty array `[]`.


Lots more functions can be added to this `useArray` hook.

### Button
### Input
### Memo
### Storage
### Todo App
### Toggle
