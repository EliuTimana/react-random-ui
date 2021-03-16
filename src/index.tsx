import * as React from 'react'
import styles from './styles.module.css'
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';

interface Props {
  text: string
}

export const ExampleComponent = ({text}: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
export {
  Button,
  Checkbox
}
