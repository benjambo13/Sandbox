import { Input } from './input.jsx'

export default {
  title: 'Standard Input',
  component: Input
}

export const Example = {
  args: {
    onChange: () => console.log('update called')
  }
}
