/* eslint-disable react/prop-types */
import { useEffect } from 'react'

const Alert = ({props, removeAlert}) => {
  const {msg,backgroundColor,textColor} = props



  // for making the notification dissapear after 5sec, currently doesn't work along with the blinking effect.
  useEffect(()=>{
    const timeout = setTimeout(() => {
      removeAlert()
      console.log('ff')
    }, 5000);
    return ()=> clearTimeout(timeout)
  }, [])
  return (
    <p style={{backgroundColor:`${backgroundColor}`, borderRadius:'25px', color:`${textColor}`}}>{msg}</p>
  )
}

export default Alert