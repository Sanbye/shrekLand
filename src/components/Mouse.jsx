import { useRef, useState } from "react"

const Mouse = ({miceArray, setMiceArray, positionX, setKillCount}) => {
    const [miceImageSrc, setMiceImageSrc] = useState("img/mice.png")
    const miceRef = useRef(null)
    const shotgunAudio = new Audio('/audio/shotgun.mp3')
    shotgunAudio.volume = 0.1

    const getRamdonInt= (max)=>{
        return Math.floor(Math.random() * max)
    }
    const killMice = () =>{
        setMiceImageSrc("img/deadMice.png")
        shotgunAudio.play()
        miceRef.current.style.animation ="deadMice ease-out 0.5s forwards"
        const numb1 = getRamdonInt(1900)
        const numb2 = getRamdonInt(1900)
        setMiceArray([...miceArray, {right: `${numb1}px`}, {right: `${numb2}px`}])
        setKillCount(prevKillCount => prevKillCount + 1)
    }

    return (
        <>
            <img onClick={killMice} ref={miceRef} src={miceImageSrc} alt="a mice" className='mice' style={{right: positionX}}/>
        </>
    )
}

export default Mouse;