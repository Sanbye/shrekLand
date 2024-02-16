import BigEye from "../components/BigEye"
import { useNavigate } from 'react-router-dom'
import DialogBox from "../components/DialogBox"

export default function BigEyes() {
    const buttons = [
        {text: 'Yes...', value: true, order: 0, style: null},
        {text: 'But why?', value: true, order: 1, style: null},
        {text: '...', value: true, order: 2, style: null},
        {text: 'Who?', value: true, order: 3, style: null}
    ]
    
    const messages = [
        "Still here ?",
        "Just let me be!",
        "Fuck this, I'm out.",
        "He'll keep an EYE on you, good luck."
    ]

    const navigate = useNavigate()

    const whiteNoise = new Audio('/audio/whiteNoise.mp3')
    whiteNoise.volume = 0.3

    const handleStart = ()=>{
        whiteNoise.play()
        whiteNoise.loop = true
    }

    const handleChange = (e)=>{
        const newValue = e.target.value.toUpperCase();
        if (newValue === "THEREISNOESCAPE") {
            whiteNoise.loop = false
            whiteNoise.pause()
            navigate("/bargaining")
        }
    }

    return (
        <>  
            <DialogBox messages={messages} author={"??"} buttons={buttons} handleFunc={handleStart}/>
            <div className="bigEyesContainer">
                <BigEye/>
                <BigEye/>
            </div>
            <input
                style={{visibility: "hidden"}}
                onChange={handleChange}
            ></input>
            
        </>
    )
}