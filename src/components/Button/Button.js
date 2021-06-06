import React from 'react'
import './Button.scss'


const Button = ({ text, onclick, disabled }) => {

  return (
    <button onClick={onclick} disabled={disabled} className="button">
      {text}
    </button>
  )
}

export default Button