import React from 'react'
import ReactDOM from 'react-dom'

function prtalDemo() {
  return ReactDOM.createPortal(
    <div>prtalDemo</div>,
    document.getElementById('prtalRoot')
  )
}

export default prtalDemo