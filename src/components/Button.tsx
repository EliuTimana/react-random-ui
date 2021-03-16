import React from 'react';

interface Props {
  label: string;
  onPress?: (saludo: string) => void;
  color?: 'red' | 'blue' | 'green' | 'yelow';
}

export const Button = ({label, onPress, color}: Props) => {
  return <button type="button" onClick={() => {
    if (onPress) {
      onPress(`hola desde el componente, mi etiqueta es ${label} y mi color es ${color}`);
    }
  }} style={{backgroundColor: color}}>{label}</button>
}
