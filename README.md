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
A basic button component that changes colour based on the `type` property.

```
<Button type='primary' text='Click Me' onClick={func}>
```

The type can be either `primary` (Blue), `secondary` (Grey) or `danger` (Red).

### Input
A basic styled text input that takes 3 properties.

```
<Input onChange={func} value='value' label='label' >
```

Label is defaulted to `label`

### Debounced Input
A debounced Input with a default timeout of 1 second. Debouncing prevents onChange from triggering too often. It no calls to `onChange` occur in `delay` amount of time, `onChange` will then run.
Otherwise, the `delay` timer will be restarted. This way a call to onChange will not occur on every key stroke.

```
<DebouncedIput onChange={func} value='value' label='label' delay=1000>
```

### Memo
### Storage
### Todo App
### Toggle
