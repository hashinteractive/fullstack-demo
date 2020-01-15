import React from 'react'

const Modal = (props) => {
  return(
    <div onClick={props.toggle} className="overlay">
      <div onClick={(e) =>{ e.stopPropagation(); }} className="modal">
        {props.children}
      </div>
    </div>
  )
}

export default Modal