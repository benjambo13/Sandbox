import { useState } from 'react'
import styles from './input.module.scss'

export const DebouncedInput = ({ callback, value, label, delay = 1000 }) => {
  const debounce = (cb) => {
    let timeout

    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        cb(...args)
      }, delay)
    }
  }

  const onChange = debounce((...args) => {
    callback(...args)
  })

  return(
    <Input onChange={onChange} label={label} value={value} />
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
