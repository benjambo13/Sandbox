import { Button } from '../button/button'
import { ACTIONS } from './app'

import styles from './todo.module.scss'

export const Todo = ({ todo, dispatch }) => {

  const onToggle = () => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})
  }

  const onDelete = () => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})
  }
  
  return (
    <div className={styles.todo}>
      <span className={todo.complete ? styles.grey : '' }>{todo.name}</span>
      <Button type='primary' text='Toggle' onClick={onToggle} />
      <Button type='danger' text='Delete' onClick={onDelete} />
    </div>
  )
}