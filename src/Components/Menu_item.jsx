import React from 'react'

function Menu_item(divclassName, iclassName, text) {
  return (
    <div className={divclassName}>
      <a href="#">
          <i className={iclassName}></i>
          {text}
      </a>
    </div>
  )
}

export default Menu_item