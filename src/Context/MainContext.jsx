import React, { createContext, useState } from 'react'

let maincontext=createContext();

export default function MainContext(props) {
    let [changeMenu,setchangeMenu]=useState(false)
  return (
    <maincontext.Provider value={{changeMenu,setchangeMenu}}>
        {props.children}
    </maincontext.Provider>
  )
}

export {maincontext};