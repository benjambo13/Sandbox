import { useArray } from "./useArray"
import { Button } from '../button/button'

import styles from './array.module.scss'

export const Array = () => {
  const [array, set, push, update, remove, filter, clear] = useArray([1, 2, 3, 4, 5, 6])
  return (
    <div>
      <p>{array.join(', ')}</p>
      <div className={styles.controlContainer}>
        <Button type='primary' onClick={() => set([1,2,3,4,5,6,7,8,9])} text='New array' />
        <Button type='primary' onClick={() => push(4)} text='Push 4' />
        <Button type='primary' onClick={() => update(1, 9)} text='Change second element to 9' />
        <Button type='primary' onClick={() => remove(1)} text='Remove second element' />
        <Button type='primary' onClick={() => filter(x => x <= 3)} text='Remove items larger than 3' />
        <Button type='danger' onClick={clear} text='Clear array' />
      </div>
    </div>
  )
}