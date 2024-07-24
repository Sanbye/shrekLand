import { useEffect, useState, useRef } from "react"
import Mouse from "../components/Mouse"
import Message from "../components/Message"
import '../css/mice.css'

export default function Mice(){

    const mouseSqueak = new Audio('/audio/mouseSqueak.mp3')
    mouseSqueak.volume = 0.1
    const [miceArray, setMiceArray] = useState([{right: "500px"}])
    const [killCount, setKillCount] = useState(0)
    const [messages, setMessages]= useState([
        "I can't get rid of them...",
        "For every mouse you kill, 2 spawns!",
        "I'm tired."
    ])
    const [currentMessage, setCurrentMessage] = useState(0)
    const dialogRef = useRef(null)

    const handleNext = () => {
        if (
            currentMessage < messages.length - 1
        ) {
            setCurrentMessage(currentMessage + 1)
        } else {
            handleEndDialog();
        }
    }

    const handleEndDialog = () => {
        dialogRef.current.close()
        mouseSqueak.play()
        mouseSqueak.loop = true
    }

    useEffect(()=>{
        dialogRef.current.showModal()
    }, [])

    useEffect(()=>{
        if(killCount===10){
            setMessages([...messages, "YES"])
            setCurrentMessage(currentMessage + 1);
            dialogRef.current.showModal()
        }
        if(killCount===20){
            setMessages([...messages, "KILL THEM"])
            setCurrentMessage(currentMessage + 1);
            dialogRef.current.showModal()
        }if(killCount>21){
            mouseSqueak.play()
            mouseSqueak.loop = true
        }
        if(killCount===53){
            setMessages([...messages, "It feels good, isn't it ?"])
            setCurrentMessage(currentMessage + 1);
            dialogRef.current.showModal()
            sessionStorage.setItem("Success", "Mice Killer")
        }
    }, [killCount])

    return (
        <>  
            <dialog className="dialogBox" ref={dialogRef}>
                <div className="dialogAuthor">
                    <span> Dysthymia </span>
                </div>
                <Message message={messages[currentMessage]} key={currentMessage} addClass={""}/> 
                <div className="buttons_container">
                    <div className="dialogButton" onClick={handleNext}>
                        Next
                    </div>
                </div>                
            </dialog>
            <div id="killCount">Kill count: {killCount}</div>
            <div id="miceContainer">
                {
                    miceArray.map((mice, index)=>{
                        return <Mouse key={index} setMiceArray={setMiceArray} setKillCount={setKillCount} miceArray={miceArray} positionX={mice.right}></Mouse>
                    })
                    
                }
            </div>
        </>
    )
}