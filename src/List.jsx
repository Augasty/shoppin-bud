/* eslint-disable react/prop-types */
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ items , remove , edit}) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item

        return (<article key={id} className='grocery-item'>
          
          <div style={{}}>
          <p className='title'>{title}</p>
            <button type='button' style={{ color:'greenyellow'}} onClick={()=>edit(id)}><FaEdit /></button>
            <button type='button' style={{ color:'red'}} onClick={()=>remove(id)}><FaTrash /></button>
          </div>
        </article>)
      })}
    </div>
  )
}

export default List