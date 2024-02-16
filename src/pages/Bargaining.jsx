import { useEffect, useRef, useState } from "react"
import Message from "../components/Message"
import { useNavigate } from 'react-router-dom'

export default function Bargaining(){

    const navigate = useNavigate()

    const [y, setY] = useState(0)
    const [x, setX] = useState(0)
    const [angle, setAngle] = useState(0)
    const [currentMessage, setCurrentMessage] = useState(0)
    const [name, setName] = useState("")
    const [updated, setUpdated] = useState("")
    const [shreked, setShreked] = useState(false)
    const [gg, setGG] = useState(false)

    const dialogRef = useRef(null)
    const dialogRefGG = useRef(null)
    const mouseY = useRef(null)
    const mouseX = useRef(null)
    const cursorRef = useRef(null)
    const btnRef = useRef(null)

    const [buttons, setButtons] = useState([
        {text: 'Easy', value: true, order: 0, style: null},
        {text: "I don't know", value: true, order: 1, style: null},
        {text: "YES", value: true, order: 2, style: null},
        {text: "Stay", value: true, order: 3, style: null},
        {text: "Leave", value: false, order: 3, style: null},
        {text: "Stay", value: true, order: 4, style: null},
        {text: "Leave", value: false, order: 4, style: null},
        {text: "Stay", value: true, order: 5, style: null},
        {text: "Leave", value: false, order: 5, style: {transform: `scale(3)`, marginBottom: "2rem"}},
        {text: "Stay", value: true, order: 6, style: /*{visibility: "hidden"}}*/null},
        {text: "Stay", value: false, order: 6, style: null},
        
    ])

    const [buttonsGG, setButtonsGG] = useState([
        {text: '?', value: true, order: 0, style: null},
        {text: "Got ya", value: true, order: 1, style: null},
        {text: "...", value: true, order: 2, style: null},
        {text: "...", value: true, order: 3, style: null},
        {text: "Thanks", value: true, order: 4, style: null}
    ])
    const [inputs, setInputs] = useState([{type: 'text', order: 7}])
    const [messages, setMessages] = useState([
        "WHAT? How did you escaped ?",
        "Why are you doing this to me ?",
        "Maybe it is because you don't had a choice...",
        "Here, you have now the choice to LEAVE.",
        "Wrong, choice try again.",
        "You are persistant huh ?",
        "...",
        "Since you are so smart, try to guess my name."
    ])

    const [messagesGG, setMessagesGG] = useState([
        "...",
        "Yes, my name is John Doe.",
        "My mission was to keep users away from the truth...",
        "But I may do an exception for you, since you are SOOO smart.",
        "I hope they won't get mad at me... good luck."
    ])

    const checkInput = (e)=>{
        const newValue = e.target.value.toUpperCase();
        
        setName(newValue)
    }

    const handleShreked = ()=>{
        setShreked(false)
        setMessages([...messages, "Just kidding ^^"])
        setInputs([...inputs, {type: 'text', order: currentMessage + 1}])
        setCurrentMessage(currentMessage + 1)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {

            setUpdated(name);
            
            if (name === "JOHN DOE") {
                dialogRef.current.close()
                setGG(true)
                setCurrentMessage(0)
            }else if (name === "SHREK") {
                setMessages([...messages, "YES"])
                setButtons([...buttons, {text: "YAY", value: true, order: currentMessage + 1, style: null}])
                setCurrentMessage(currentMessage + 1)
                setShreked(true)                
            }else {
                setMessages([...messages, "Nope."])
                setInputs([...inputs, {type: 'text', order: currentMessage + 1}])
                setCurrentMessage(currentMessage + 1)
            }
        }
    }
    
    const handleEnd = ()=>{
        navigate('/goodBye');
    }


    const calculateRotate = (()=>{
        
        if (btnRef.current != null){
                let offset = cursorRef.current.getBoundingClientRect(),
                bntOffset = btnRef.current.getBoundingClientRect(),
                center = {
                    x: offset.left + cursorRef.current.width / 2,
                    y: offset.top + cursorRef.current.height / 2
                },
                btnCenter = {
                    x: bntOffset.left + bntOffset.width / 2,
                    y: bntOffset.top + bntOffset.height / 2
                },
                radians = Math.atan2(btnCenter.x - center.x, btnCenter.y - center.y),
                degree = (radians * (180 / Math.PI) * -1) + 180 +20;
                
            return degree;
        }
        
    })

    const handleConfirm = (yes) => {
        if (shreked) {
            handleShreked();
        } else if (yes) {
            if (
                currentMessage < messages.length - 1  ||
                currentMessage < messagesGG.length - 1
            ) {
                setCurrentMessage(currentMessage + 1);
            } else {
                dialogRef.current.close();
                setCurrentMessage(0);
                handleEnd();
            }
        } else {
            navigate('/goodBye');
        }
    };

    useEffect(()=>{
        dialogRef.current.showModal()
        localStorage.setItem("???", "John Doe");
    },[])

    useEffect(() => {
        const diagRref= dialogRef.current
        const handleMouseMove = (e) => {

            mouseX.current = e.clientX
            mouseY.current = e.clientY

            setX(mouseX.current)
            setY(mouseY.current)
            setAngle(calculateRotate)

        }    
        document.addEventListener('mousemove', handleMouseMove)
        
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            
        }
    }, [])

    useEffect(()=>{
        if(gg){
            dialogRefGG.current.showModal()
        }
    },[gg])
    return (
        <> 
            <dialog className="dialogBox hideCursor" ref={dialogRef}>
                <div className="dialogAuthor">???</div>
                <Message message={messages[currentMessage]} key={currentMessage} />
                
                <div className="buttons_container">
                    {buttons.map((button, index) => (   
                    button.order === currentMessage ? <div
                        key={index} 
                        onClick={() => handleConfirm(button.value)}
                        className="dialogButton"
                        style={button.style ? button.style : {}}
                        ref={button.value === false ? btnRef : null}
                        
                    >
                        {button.text}
                    </div> : null
                    ))}
                    {inputs.map((input, index)=>
                        input && input.order === currentMessage ? <input
                            type={input.type}
                            onChange={checkInput}
                            onKeyDown={handleKeyDown}
                            style={{cursor: "none"}}
                            key={index}
                        >
                    </input> : null)
                    }
                </div>
                <img className="newPointer" src="img/cursor.png" alt="cursor" ref={cursorRef} style={{top: `${y}px`, left: `${x}px`, transform: `rotate(${angle}deg)`}}/>
            
            </dialog>
            {gg && <dialog className="dialogBox" ref={dialogRefGG}>
                <div className="dialogAuthor">John Doe</div>
                <Message message={messagesGG[currentMessage]} key={currentMessage} />
                
                <div className="buttons_container">
                    {buttonsGG.map((button, index) => (
                    button.order === currentMessage ? <div
                        key={index} 
                        onClick={() => handleConfirm(button.value)}
                        className="dialogButton"
                        style={button.style ? button.style : {}}
                        
                    >
                        {button.text}
                    </div> : null
                    ))}
                </div>
            
            </dialog>}
            
        </>
    )
}