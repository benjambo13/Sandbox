import { useState } from "react"

export const useArray = (initialArray) => {
  const [array, setArray] = useState(initialArray)

  const set = nextArray => {
    setArray(nextArray)
  }

  const push = value => {
    setArray(a => [...a, value])
  }

  const update = (index, value) => {
    setArray(a => [
      ...a.slice(0, index),
      value,
      ...a.slice(index + 1, a.length)])
  }

  const remove = index => {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
  }

  const filter = filterfn => {
    setArray(a => a.filter(filterfn))
  }

  const clear = () => {
    setArray([])
  }

  return { array, set, push, update, remove, filter, clear }
}