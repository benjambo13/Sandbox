import { useState } from 'react'
import styles from './input.module.scss'

export const DebouncedInput = () => {
  const [count, setCount] = useState(0)

  const debounce = (cb, delay = 1000) => {
    let timeout

    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        cb(...args)
      }, delay)
    }
  }

  const updateDebouncedCalls = debounce(() => {
    setCount(prev => prev + 1)
    console.log('Function call count:', count)
  })

  return(
    <Input onChange={updateDebouncedCalls} />
  )
}

export const Input = ({ onChange, value, label = 'label' }) => {
  return(
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type='text'
        name='input'
        onChange={onChange} 
        autoComplete='off'
        value={value}
      />
    </div>
  )
}
