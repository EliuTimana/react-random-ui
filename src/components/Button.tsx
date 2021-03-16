import React from 'react';

interface Props {
  label: string;
  onPress?: (saludo: string) => void;
  color?: 'red' | 'blue' | 'green' | 'yelow';
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({label, onPress, color, type}: Props) => {
  return <button type={type || 'button'} onClick={() => {
    if (onPress) {
      onPress(`hola desde el componente, mi etiqueta es ${label} y mi color es ${color}`);
    }
  }} style={{backgroundColor: color}}>{label}</button>
}
