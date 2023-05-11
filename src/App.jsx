import './App.css'
import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'



function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])

  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  const [alert, setAlert] = useState({ show: true, msg: 'Hi! I am your shoppin-buddy.', backgroundColor: 'skyblue' , textColor:'black'})   //skyblue - black, yellow-black,  green - white, brown - white

  const showAlert =(show = false, msg="",backgroundColor="",textColor="")=>{
    setAlert({show,msg,backgroundColor,textColor})
  }


  //behaving weirdly with other alerts, so, commenting out as of now
  // useEffect(() => {
  //   let alternate = true
  //   const interval = setInterval(() => {
  //    if(alternate){
  //     alternate = !alternate
  //     showAlert(true,'Hi! I am your shoppin-buddy.','skyblue','black')
  //    }
  //    else{
  //     alternate = !alternate
  //     showAlert(true,'Please enter something.','yellow','black')
  //    }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);







  const handleSubmit = (e) => {
    e.preventDefault();

    //if button is pressed without anything in the textbox
    if (!name) {
      //display alert
      showAlert(true,'Hi! Please enter something.','brown','white')
    }
    //while editing
    else if (name && isEditing) {
      //deal with editing
    }
    // adding new element in array
    else {
      //show alert
      // create new item
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])

      setName('')
    }
  }











  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert props = {alert}   removeAlert = {showAlert}/>}
        <h3>Shoppin-bud</h3>

        <div className='form-control'>
          <input type='text' className='grocery' placeholder='eg. 4 eggs' value={name} onChange={(e) => setName(e.target.value)}></input>


          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 &&
        <div>
          <List items={list} />
          <button className='clear-btn'>Clear items</button>
        </div>}
    </section>
  )
}

export default App
