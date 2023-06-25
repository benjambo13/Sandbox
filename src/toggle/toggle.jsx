import { useToggle } from './useToggle'
import { Button } from '../button/button'

export const Toggle = () => {
  const [value, toggleValue] = useToggle(false)

  return (
    <div>
      <p>{value.toString()}</p>
      <Button type='secondary' onClick={toggleValue} text='Toggle' />
      <Button type='primary' onClick={() => toggleValue(true)} text='Toggle to True' />
      <Button type='danger' onClick={() => toggleValue(false)} text='Toggle to False' />
    </div>
  )
}
