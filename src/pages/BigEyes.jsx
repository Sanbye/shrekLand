import BigEye from "../components/BigEye"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"

export default function BigEyes() {

    const [start, setStart] = useState(false)

    const whiteNoise = new Audio('/audio/whiteNoise.mp3')
    whiteNoise.volume = 0.3

    const handleStart = ()=>{
        whiteNoise.play()
        whiteNoise.loop = true
        setStart(true)
    }

    return (
        <>  
            {!start && <div className='info_container'>
                <div className='box_info'>
                    <p>Things just started my friend</p>
                    <div className='buttons_container'>
                        <button onClick={handleStart}>???</button>
                    </div>
                </div>
            </div>}
            {!start && <div className="overlay"></div>}
            <div className="bigEyesContainer">
                <BigEye/>
                <BigEye/>
            </div>
        </>
    )
}