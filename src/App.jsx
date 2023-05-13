import './App.css'
import { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


const getLocalStorage =()=>{
  let list = localStorage.getItem('list')

  if(list){
    return JSON.parse(list)
  }
  return []

}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())

  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  const [alert, setAlert] = useState({ show: true, msg: 'Hi! I am your shoppin-buddy.', backgroundColor: 'grey', textColor: 'black' })   //skyblue - black, yellow-black,  green - white, brown - white

  const showAlert = (show = false, msg = "", backgroundColor = "", textColor = "") => {
    setAlert({ show, msg, backgroundColor, textColor })
  }



  // this blinking and the dissapearing isnt working together
  useEffect(() => {
    let alternate = true
    const interval = setInterval(() => {
     if(alternate){
      alternate = !alternate
      showAlert(true,'Hi! I am your shoppin-buddy.','skyblue','black')
     }
     else{
      alternate = !alternate
      showAlert(true,'Please enter something.','yellow','black')
     }
    }, 2000);
    return () => clearInterval(interval);
  }, [list]);







  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'Hi! Please enter something.', 'brown', 'white')
    }
    //while editing
    else if (name && isEditing) {
      setList(list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name }
        }
        return item
      }))
      setName('')
      setEditId(null)
      setIsEditing(false)
      showAlert(true, 'Edited successfully!', 'green', 'white')
    }
    else {
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
      showAlert(true, 'Item added to the list', 'green', 'white')
    }
  }



  const clearList = () => {
    setList([])
    showAlert(true, 'List is now empty', 'yellow', 'black')
  }




  const removeItem = (id) => {
    showAlert(true, 'Item is removed', 'brown', 'white')
    setList(list.filter((item) => item.id != id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.title)
  }





  //setting up localstorage
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])

  return (
    <section style={{ borderRadius: '8px', border :'1px solid white', padding: '0.6em 1.2em'}}>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert props={alert} removeAlert={showAlert} list={list} />}
        <h3>Shoppin-bud</h3>

        <div className='form-control'>
          <input type='text' style={{textAlign:'center'}} placeholder='eg. 4 eggs' value={name} onChange={(e) => setName(e.target.value)}></input>


          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 &&
        <div>
          <List items={list} remove={removeItem} edit={editItem} />
          <div></div>
          <button style={{ marginTop: '1em'}} onClick={clearList}>Clear items</button>
        </div>}
    </section>
  )
}

export default App
