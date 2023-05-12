import { useEffect } from 'react'

const Alert = ({props, removeAlert , list}) => {
  const {msg,backgroundColor,textColor} = props



 //both this dissapearing and blinking aren't working together
  // useEffect(()=>{
  //   const timeout = setTimeout(() => {
  //     removeAlert()
  //     console.log('ff')
  //   }, 5000);
  //   return ()=> clearTimeout(timeout)
  // }, [list])

  return (
    <p style={{backgroundColor:`${backgroundColor}`, borderRadius:'25px', color:`${textColor}`}}>{msg}</p>
  )
}

export default Alert