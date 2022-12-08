import React from 'react'

export default function Comp(props){

    return(
    <>
      <label>
     {props.name}
    <input type="text" placeholder={props.name} />
  </label>
    </>
        )
}