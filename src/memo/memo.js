import { useState, useMemo, useEffect } from 'react'
import { Button } from '../button/button'
import { useToggle } from '../toggle/useToggle'

import styles from './memo.module.scss'

export const SlowFunctionMemo = () => {
  const [number, setNumber] = useState(0)
  const [isBlue, toggleBlue] = useToggle(false)

  const doubleNumber = useMemo(() => {
    console.log('doubling')
    return slowFunction(number)
  }, [number])

  return (
    <div>
      <input type='number' value={number} onChange={evt => setNumber(parseInt(evt.target.value))} />
      <p className={isBlue ? styles.blueText : ''}>{number} doubled is {doubleNumber}</p>
      <Button type='primary' text='Change text colour' onClick={toggleBlue}/>
    </div>
  )
}

const slowFunction = num => {
  for (let i =0; i < 1000000000; i += 1) {}
  return num *2
}

export const RefEqualityMemo = () => {
  const [number, setNumber] = useState(0)
  const someObject = useMemo(() => {
    return { foo: 'bar' }
  }, [])

  useEffect(() => {
    // Will only be rendered on first load
    console.log('someObject changed')
  }, [someObject])

  return (
    <div>
      <p>{number}</p>
      <Button type='primary' onClick={() => setNumber(prev => prev + 1)} text='Increment' />
    </div>
  )
}