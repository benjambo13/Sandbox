import { Button } from '../button/button'
import { useLocalStorage, useSessionStorage } from './useStorage'

import styles from './storage.module.scss'

export const Storage = () => {
  const [name, setName, removeName] = useLocalStorage('name', 'Ben')
  const [age, setAge, removeAge] = useSessionStorage('age', '24')

  return (
    <div>
      <p>{name} - {age}</p>
      <div className={styles.controls}>
        <div>
          <Button type='primary' onClick={() => {setName('Benjamin')}} text='Set name to Benjamin'/>
          <Button type='danger' onClick={removeName} text='Remove name'/>
        </div>
        <div>
          <Button type='primary' onClick={() => {setAge(40)}} text='Set age to 40'/>
          <Button type='danger' onClick={removeAge} text='Remove age'/>
        </div>
      </div>
    </div>
  )
}
