import { useEffect, useRef, useState } from "react"
import { useNavigate } from 'react-router-dom'
import '../css/eyes.css'
import DialogBox from "../components/DialogBox"

const breath = new Audio("audio/Heavy Breathing - Sound Effect.mp3")
const creepyMusic = new Audio("audio/Return of the Banshee.mp3")
const hearbeat = new Audio("audio/heartbeat.wav")
const jumpScare = new Audio("audio/jump-scare.mp3")
jumpScare.volume = 0.1
breath.volume = 0.5
creepyMusic.volume = 0.2

function angle(cx, cy, ex, ey){
    const dy = ey - cy
    const dx = ex - cx
    const rad = Math.atan2(dy,dx)
    const deg = rad * 180 / Math.PI
    return deg

}

export default function Eyes(){

    const buttons = [
        {text: 'Huh?', value: true, order: 0, style: null},
        {text: '...', value: true, order: 1, style: null},
        {text: '...', value: true, order: 2, style: null},
        {text: 'Why?', value: true, order: 3, style: null},
        {text: 'Wait!', value: true, order: 4, style: null}
    ]
    const messages = [
        "What are you doing here ?",
        "I mean, you are not supposed to be here...",
        'Who on earth visits a site named "SHREKLAND.com" seriously?',
        "Anyway, you should leave.",
        "NOW."
    ]

    const navigate = useNavigate()
    const [eyes, setEyes] = useState([])
    const [start, setStart] = useState(false)
    const [end, setEnd] = useState(false)
    const [paused, setPaused] = useState(false)
    const [timer, setTimer] = useState(0)
    const mouseY = useRef(null)
    const mouseX = useRef(null)
    const [acceleration, setAcceleration] = useState(0.001)

    const flashlightRef = useRef(null)
    const obungaRef = useRef(null)
    const eyes_containerRef = useRef(null)

    const handleStart = ()=>{

        breath.play()
        breath.loop = true
        creepyMusic.play()
        setPaused(false)
        setStart(true)
    }

    useEffect(() => {
        const createEyes = () => {
            let newEyes = []

            for (let i = 0; i < 32; i++) {
                for (let j = 0; j < 32; j++) {
                    let eye = document.createElement('div')
                    eye.classList.add('eye')
                    eyes_containerRef.current.appendChild(eye)

                    const eyeTop = j > 0 ? 50 * j : 0
                    const eyeLeft = 60 * i

                    eye.style.top = `${eyeTop}px`
                    eye.style.left = `${eyeLeft}px`
                    eye.innerHTML = `<img class="eye_img" src="./img/eye.png">`

                    newEyes = [...newEyes, eye]
                }
            }

            setEyes(newEyes)
        }

        createEyes()
    }, [])

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.current = e.clientX
            mouseY.current = e.clientY
        }
    
        document.addEventListener('mousemove', handleMouseMove)
    
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    
    useEffect(() => {
        for (let eye_ of eyes) {
            const rekt = eye_.getBoundingClientRect()
            const eyeX = rekt.left + rekt.width / 2
            const eyeY = rekt.top + rekt.height / 2
            const angleDeg = angle(mouseX.current, mouseY.current, eyeX, eyeY)
    
            const eye_dot = eye_.firstElementChild
            eye_dot.style.transform = `rotate(${angleDeg - 77}deg)`
        }
    
        if(start){
            flashlightRef.current.style.setProperty("--Xpos", mouseX.current + "px")
            flashlightRef.current.style.setProperty("--Ypos", mouseY.current + "px")
        }
    }, [eyes, mouseX.current, mouseY.current, start])

    const breathSound = () => {
        if (!end){
            setPaused(true)
            changeView(0)
            
            breath.volume = 1
            setTimeout(()=>{
                breath.volume = 0.5
                setPaused(false)
            }, 500)
        }
    }

    const hearbeatSound = () => {
        if(!end){
            hearbeat.play()
            eyes_containerRef.current.style.backgroundColor= "red"
            setTimeout(() => {
                eyes_containerRef.current.style.backgroundColor = "black"
            }, 500)
        }
    }

    const changeView = (time) => {
        document.documentElement.style.setProperty('--counter', time + 'em')
    }
    
    useEffect(() => {
        const interval1 = setInterval(() => {
    
          if (
            obungaRef.current.offsetLeft < mouseX.current &&
            obungaRef.current.offsetLeft + obungaRef.current.offsetWidth > mouseX.current &&
            obungaRef.current.offsetTop < mouseY.current &&
            obungaRef.current.offsetTop + obungaRef.current.offsetHeight > mouseY.current
          ) {
            setEnd(true)
          }
        }, 100)
    
        return () => {
          clearInterval(interval1)

        }
    }, [ start, end])

    useEffect(()=>{

        const viewInterval = setInterval(()=>{
            if (!paused && start && !end) {
                changeView(timer)
                setTimer((prevTimer) => prevTimer + 0.1)
            }
        }, 50)

        return()=>{
            clearInterval(viewInterval)
        }
        
    }, [paused, start, end, timer])

    useEffect(()=>{
       if(start){
            const breathInterval = setInterval(() => {
                breathSound()
            }, 2000)

            return()=>{
                clearInterval(breathInterval)
            }
       }
    }, [paused, start, end])

    useEffect(()=>{
        
        if(start){
            const heartbeatInterval = setInterval(() => {
                hearbeatSound()
            }, 5000)
    
            return()=>{
                clearInterval(heartbeatInterval)
            }
        }
          
    }, [start, end])

    useEffect(()=> {
        
        if (start){

            const interval2 = setInterval(() => {

                if (acceleration < 0.8) {
                  setAcceleration((prevAcc) => prevAcc * 1.2)
                  
                } else {
                  setAcceleration(0.8)
                }
                
            }, 500)

            return()=>{

                clearInterval(interval2)
            }
        }
    
    },[start, acceleration])

    useEffect(()=>{
        if(start){
            const obungaInterval = setInterval(()=>{
                let imageX = obungaRef.current.offsetLeft
                let imageY = obungaRef.current.offsetTop
                
                const imageWidth = obungaRef.current.width
                const imageHeight = obungaRef.current.height
                
                let deltaX = mouseX.current - (imageX+imageWidth / 2)
                let deltaY = mouseY.current - (imageY+imageHeight / 2)
                
                let newX = imageX + deltaX * acceleration
                let newY = imageY + deltaY * acceleration
                
                obungaRef.current.style.left = newX + 'px'
                obungaRef.current.style.top = newY + 'px'
            }, 50)

            return()=>{
                clearInterval(obungaInterval)
            }
        }
    }, [start, acceleration])

    useEffect(()=>{
        if(end){
            creepyMusic.pause()
            jumpScare.play()
            changeView(5000)

            obungaRef.current.style.height="500px"

            eyes_containerRef.current.style.backgroundColor = "red"
            
            setTimeout(()=>{
                jumpScare.pause()
                breath.pause()
                navigate('/big-eyes')
            }, 800)
        }
        
    }, [end])
    
    return (
        <>  
            <DialogBox messages={messages} author={"?"} buttons={buttons} handleFunc={handleStart}/>
            <section id="eyes_container" ref={eyes_containerRef} >
                <div id="noEscape">
                    THERE IS NO ESCAPE
                </div>
                <img src="./img/obunga.png" id="obunga" ref={obungaRef}></img>
            </section>
            <div id="flashlight" ref={flashlightRef}></div>
        </>
    )
}