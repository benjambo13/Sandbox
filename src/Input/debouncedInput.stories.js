import { DebouncedInput } from './input.jsx'

export default {
  title: 'DebouncedInput',
  component: DebouncedInput
}

const onChange = () => {
  console.log('onChange called')
}

export const Example = {
  args: {
    callback: onChange,
  }
}
