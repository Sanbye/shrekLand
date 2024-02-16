import React, { useEffect, useRef, useState } from "react";
import Message from "./Message"
import { useNavigate } from 'react-router-dom'

const DialogBox = ({author, messages, buttons, handleFunc, input}) => {
  const dialogRef = useRef(null)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [newValue, setNewValue] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    dialogRef.current.showModal()
  },[])

  const handleConfirm = (yes) => {

    if (yes){
      if (currentMessage < messages.length - 1) {
        setCurrentMessage(currentMessage + 1);
      } else {
        dialogRef.current.close()
        setCurrentMessage(0);
        handleFunc()
      }
    }else{
      navigate('/goodBye')
    }
  }

  const checkInput = (e)=>{
    const newValue = e.target.value.toUpperCase();
      setNewValue(newValue);

        if (newValue === input.value) {
            console.log(newValue)
        }
  }

  return (
    <dialog className="dialogBox" ref={dialogRef}>
      <div className="dialogAuthor">{author}</div>
      <Message message={messages[currentMessage]} key={currentMessage} />
      
      <div className="buttons_container">
        {buttons.map((button, index) => (
          button.order === currentMessage ? <div
            key={index} 
            onClick={() => handleConfirm(button.value)}
            className="dialogButton"
            style={button.style ? button.style : {}}
          >
            {button.text}
          </div>: null
        ))}
        {input && input.order === currentMessage ? <input
            type={input.type}
            onChange={checkInput}
          >
          </input> : null
        }
      </div>
    </dialog>
  );
};
export default DialogBox;