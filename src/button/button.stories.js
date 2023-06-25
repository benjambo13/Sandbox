import { Button } from './button'

export default {
  title: 'Button',
  component: Button
}

export const Primary = {
  args: {
    onClick: () => {console.log('button clicked')},
    type: 'primary'
  }
}

export const Secondary = {
  args: {
    onClick: () => {console.log('button clicked')},
    type: 'secondary'
  }
}

export const Danger = {
  args: {
    onClick: () => {console.log('button clicked')},
    type: 'danger'
  }
}
