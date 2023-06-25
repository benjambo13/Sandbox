import styles from './button.module.scss'

export const Button = ({ onClick, type, text = 'Button' }) => {
  const typeLookup = {
    'primary': styles.primary,
    'secondary': styles.secondary,
    'danger': styles.danger,
  }

  return(
    <button className={`${styles.button} ${typeLookup[type]}`} onClick={onClick}>{text}</button>
  )
}
