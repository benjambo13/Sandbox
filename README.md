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
Debouncing prevents onChange from triggering too often. It no calls to `onChange` occur in `delay` amount of time, `onChange` will then run.
Otherwise, the `delay` timer will be restarted. This way a call to onChange will not occur on every key stroke.

```
<DebouncedInput onChange={func} value='value' label='label' delay=1000 />
```
This debounced Input has a default delay of 1 second.

### useMemo - Slow Function

This component uses the `useMemo` hook, and implements its main use case. When updating the number in the input, this runs a very slow function called `doubleNumber`. When changing the number you can feel a lag before the render completes. But when you click the button to change the text color to blue it does not lag because of the `useMemo` hook.

In short, `useMemo` caches a value and checks on each render if the value has been cached or it needs to run the function again. It is particularly useful when said function is very slow.

For example say I have a value that is calculated using a slow function
```
const value = slowFunction(num)
```
On every render, this value will be recalculated even if `num` does not change. Therefore, slowing down the application. Adding a `useMemo` hook to this example would like:
```
const value = useMemo(() => {
  return slowFunction(num)
}, [num])
```
Now `value` is only ever recalculated if the `num` variable changes, otherwise it returns the cached `value` from the previous render.

### useMemo - Reference Equality 
Another (less well known) use case for `useMemo` is reference equality. This is useful for when you want to compare two objects in JavaScript. If you have an object that is getting recreated on each render, it will always be not equal to the previous render. Even if its contents is the exact same! A good example of this use case is inside a `useEffect` hook. Say we have the following code:
```
const myObject = { foo: 'bar' }

useEffect(() => {
  ...
}, [myObject])
```
This useEffect will run on every render even though the contents of `myobject` has not changed. This is becuase the object reference has changed. This can be solved by declaring `myObject` using `useMemo` such as:
```
const myObject = useMemo(() => {
  return { foo: 'bar' }
}, [])
```
P.S. remember to add any dependencies that the object relies on in the array of the second parameter.

### Storage
### Todo App
### Toggle
