import React, { useRef, useState, useEffect, useCallback } from 'react'
import '../css/shrek.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faMinimize, faMaximize } from '@fortawesome/free-solid-svg-icons'
import ShrekLog from '../components/ShrekTracking'
import { useNavigate } from 'react-router-dom'

const thinkAudio = new Audio('/audio/Super Mario Bros/tuyau.wav')
thinkAudio.volume = 0.1
const susAudio = new Audio('/audio/Among Us Role Sound Effect.mp3')
const headAudio = new Audio('/audio/Super Mario Bros/hurry-up.wav')
headAudio.volume = 0.2
const DEJAVUaudio = new Audio('/audio/DEJAVU-cut.mp3')
DEJAVUaudio.volume = 0.1
const shrekSound = new Audio('/audio/Super Mario Bros/1-up.wav')
shrekSound.volume = 0.2
const audioBoom = new Audio('audio/vine-boom.mp3');
audioBoom.volume = 0.4;
const whatAreYouDoingAudio = new Audio('audio/whatAreYouDoingInMySwamp.mp3')
whatAreYouDoingAudio.volume = 0.3;
const youWonAudio = new Audio('audio/Super Mario Bros/monde-termine.wav')
whatAreYouDoingAudio.volume = 0.3;


export default function Shrek() {
    const navigate = useNavigate()
    const [gameWon, setGameWon] = useState(false)
    const [confirm, setConfirm] = useState(false)

    const [shrekSusClick, setShrekSusClick] = useState(true)
    const [shrekThinkClick, setShrekThinkClick] = useState(true)
    const [shrekHeadClick, setShrekHeadClick] = useState(true)
    const [shrekOKLMClick, setShrekOKLMClick] = useState(true)
    const [shrekDabClick, setShrekDabClick] = useState(true)

    const shrekVengeanceRef = useRef(null)
    const shrekRoarRef = useRef(null)
    const shrekSusRef = useRef(null)
    const shrekThinkRef = useRef(null)
    const shrekHeadRef = useRef(null)
    const shrekOKLMRef = useRef(null)
    const shrekDabRef = useRef(null)
    const shrekAngryRef = useRef(null)
    const shrekInKRef = useRef(null)
    const letterLinkRef = useRef(null)
    const arrowShrekRef = useRef(null)
    const shrekSwampRef = useRef(null)
    const hiddenShrekRef = useRef(null)
    const shrekCuriousRef = useRef(null)
    const forniteShrekRef = useRef(null)
        
    const shrekLogRef = useRef(null)

    function navClick(num) {

        switch (num) {
            case 1:
                

                break
            case 2:

                if (shrekSusClick) {
            
                    shrekSusRef.current.style.display ="block"
                    shrekSusRef.current.style.animation ="SUSYBAKA 5s infinite"
            
                    susAudio.play()

                } else {
            
                    shrekSusRef.current.style.display ="none"
                    shrekSusRef.current.style.animation ="none"
            
                }
                setShrekSusClick(!shrekSusClick)

                break
            case 3:

                if (shrekOKLMClick) {
            
                    shrekOKLMRef.current.style.display ="block"      

                } else {
            
                    shrekOKLMRef.current.style.display ="none"
                }

                setShrekOKLMClick(!shrekOKLMClick)

                break
            case 4:

                if (shrekThinkClick) {

                    shrekThinkRef.current.style.display ="block"
                    shrekThinkRef.current.style.animation ="THINK 5s linear infinite"
            
                    thinkAudio.play()

                } else {
            
                    shrekThinkRef.current.style.display ="none"
                    shrekThinkRef.current.style.animation ="none"
            
                    
                }
                setShrekThinkClick(!shrekThinkClick)

                break
            case 5:

                if (shrekHeadClick) {

                    shrekHeadRef.current.style.display ="flex"
                    shrekHeadRef.current.style.animation ="RunningHead 20s linear infinite, TurningHead 1s linear infinite"
                    headAudio.play()

                } else {
                    
                    shrekHeadRef.current.style.display ="none"
                    shrekHeadRef.current.style.animation ="none"
                    headAudio.pause()                    
                }

                setShrekHeadClick(!shrekHeadClick)

                break
            
            case 6:               
                
                if (shrekDabClick) {

                    shrekDabRef.current.style.display ="flex"            
                    shrekDabRef.current.style.animation ="DABrotate 0.5s infinite, DABmove 5s cubic-bezier(.32,-0.88,.47,1.65) infinite"

                    DEJAVUaudio.play()
            
                } else {
                    
                    shrekDabRef.current.style.display ="none"
                    shrekDabRef.current.style.animation ="none"

                    DEJAVUaudio.pause()
                }
                setShrekDabClick(!shrekDabClick)
            
            break
        
        }
    }
    
    const [logMinimized, setLogMinimized] = useState(false)
    const [shrekCount, setShrekCount] = useState(0)
    const [shrekList, setShrekList] = useState([])
    const shreksRef = useRef([])
    const [totalShreks, setTotalShreks] = useState(0)

    useEffect(()=>{
        if(gameWon && confirm){
            
            navigate("/eyes")
        }
    },[confirm, gameWon])

    useEffect(() => {
        shreksRef.current = document.getElementsByClassName("shrek")
        setTotalShreks(shreksRef.current.length)

    }, [])

    const handleShrekClick = (shrekRef) => {
    
        if (shrekRef.classList.contains("shrek") && !shrekRef.classList.contains("checked")){
          
          shrekSound.play()
    
          setShrekCount((prevCount) => prevCount + 1)
    
          if (!shrekList.includes(shrekRef.id)) {
            setShrekList((prevList) => [...prevList, shrekRef.id])
          }     
          shrekRef.classList.add("checked")
        }

        if(shrekCount === totalShreks){
            setGameWon(true)
            youWonAudio.play()
        }

    }

    const letterKClicked = () => {
        shrekInKRef.current.style.top = "350px";
        const boomGif = document.createElement("img");
        boomGif.src = '/gif/YQDj.gif';
        boomGif.id = 'vineboomgif';
        boomGif.style.position = 'absolute';
        boomGif.style.top = '-30px';
        boomGif.style.right = "-125px";

        setTimeout(function() {
            letterLinkRef.current.style.display = "none";
            audioBoom.play();
            shrekInKRef.current.appendChild(boomGif)
            setTimeout(()=> {
                boomGif.remove();
                shrekVengeanceRef.current.style.display = "block";
            }, 1000);
        }, 2000)
    }

    const whatAreYouDoing = () => {
        shrekSwampRef.current.style.display = "flex";
        shrekSwampRef.current.style.animation = "shake 1s 3"
        shrekSwampRef.current.style.bottom = "0";

        setTimeout(function() {
            whatAreYouDoingAudio.play();
        }, 300)
    }

    const fakeClose = () => {
        shrekAngryRef.current.style.top = "0";
    }

    const resizeLog = () => {
        if (logMinimized) {
            shrekLogRef.current.style.height = "83vh";
            
        } else {
            shrekLogRef.current.style.height = "3.3vh";
        }
        setLogMinimized(!logMinimized)
    }
    
    const setVisibleShrek= ()=> {
        hiddenShrekRef.current.style.visibility = "visible";
    }

    const [sequencePosition, setSequencePosition] = useState(0)
      
    const handleKeyDown = useCallback((e) => {
        const key = e.key;
        const sequence = ['s', 'h', 'r', 'e', 'k'];
        const requiredKey = sequence[sequencePosition];
    
        if (key === requiredKey) {
          setSequencePosition((prevPosition) =>{
            const newPosition = prevPosition + 1;
            console.log(newPosition);
            return newPosition;
          });
          console.log(sequencePosition)
    
          if (sequencePosition === sequence.length -1) {
            setVisibleShrek()
            setSequencePosition(0);
          }
        } else {
          setSequencePosition(0);
        }
    }, [sequencePosition])
        
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div>
            <header>
            <h1>
                WELCOME TO SHRE
                <span id="shrek-in-letter" ref={shrekInKRef}>
                    <a onClick={letterKClicked} id="letter-link" ref={letterLinkRef}>
                        K
                    </a>
                </span>
                LAND
            </h1>
            <img
                src="ImagesShrek/shrekVengeance.png"
                ref={shrekVengeanceRef}
                id="shrekVengeance"
                className="shrek"
                style={{ display: 'none' }}
                alt="Shrek Vengeance"
                onClick={()=>handleShrekClick(shrekVengeanceRef.current)}
            />

            <nav>
                <div id="navbar">
                <span id="shrekRoar">
                    <img 
                        src="imagesShrek/shrekRoar.png" 
                        ref={shrekRoarRef}
                        id="shrekRoarImg" 
                        className="shrek" 
                        alt="Shrek Roar"
                        onClick={()=>handleShrekClick(shrekRoarRef.current)}>
                    </img>
                    ???
                </span>

                <span id="shrekSusBar" onClick={() => navClick(2)}>
                    <img 
                        src="imagesShrek/shrekSus.png" 
                        ref={shrekSusRef}
                        id="shrekSus" 
                        className="shrek" 
                        alt="Shrek Sus"
                        onClick={()=>handleShrekClick(shrekSusRef.current)}>
                    </img>
                    ???
                </span>

                <span onClick={() => navClick(3)}>
                    <img 
                        src="imagesShrek/shrekOKLM.png" 
                        ref={shrekOKLMRef}
                        id="shrekOKLM" 
                        className="shrek" 
                        alt="Shrek OKLM"
                        onClick={()=>handleShrekClick(shrekOKLMRef.current)}>
                    </img>
                    ???
                </span>

                <span id="ThinkBar" onClick={() => navClick(4)}>
                    <img 
                        src="imagesShrek/shrekThink.png" 
                        ref={shrekThinkRef}
                        id="shrekThink" 
                        className="shrek" 
                        alt="Shrek Think"
                        onClick={()=>handleShrekClick(shrekThinkRef.current)}>
                    </img>
                    ???
                </span>

                <span id="HeadBar" onClick={() => navClick(5)}>
                    ???
                </span>

                <span id="DABar" onClick={() => navClick(6)}>
                    ???
                </span>
                </div>
            </nav>
            </header>

            <div>
                <img 
                    src="ImagesShrek/shrekDab.png" 
                    id="shrekDab" 
                    ref={shrekDabRef}
                    className="shrek" 
                    onClick={()=>handleShrekClick(shrekDabRef.current)}
                    alt="Shrek Dab">
                </img>
            </div>

            <div>
                <img 
                    src="ImagesShrek/shrekHead.png" 
                    ref={shrekHeadRef}
                    id="shrekHead" 
                    className="shrek" 
                    alt="Shrek Head"
                    onClick={()=>handleShrekClick(shrekHeadRef.current)}>
                </img>
            </div>

            <div id="hidden-shrek" ref={hiddenShrekRef} style={{ visibility: 'hidden' }}>
                <img src="ImagesShrek/shrekCurious.png" 
                    ref={shrekCuriousRef}
                    id="shrekCurious" 
                    className="shrek" 
                    alt="Shrek Curious"
                    onClick={()=>handleShrekClick(shrekCuriousRef.current)}>
                </img>
                <img src="img/textBubble.png" id="textBubble" alt="Text Bubble"></img>
                <div>
                    <p>"you found me :)"</p>
                </div>
            </div>

            <div id="sequence-clue">
            <div className="square">
                <p>type "shrek"</p>
            </div>
            </div>

            <div style={{ position: 'absolute', bottom: '0px' }}>
            <div id="swamp">
                <img src="img/swampGrass1.png" className="grass"></img>
                <img src="img/swampGrass2.png" className="grass"></img>
                <img src="img/swampGrass1.png" className="grass"></img>
                <img src="img/swampGrass3.png" className="grass"></img>
                <img src="img/swampGrass1.png" className="grass"></img>
                <img src="img/swampGrass2.png" className="grass"></img>
                <span id="hidden-in-grass">
                    <img src="img/swampGrass1.png" className="grass" onClick={()=>whatAreYouDoing()} id="special-grass"></img>
                    <img src="ImagesShrek/shrekSwamp.png" className="shrek" id="shrekSwamp" ref={shrekSwampRef} onClick={()=>handleShrekClick(shrekSwampRef.current)}></img>
                </span>
                <img src="img/swampGrass3.png" className="grass"></img>
                <img src="img/swampGrass1.png" className="grass"></img>
                <img src="img/swampGrass2.png" className="grass"></img>
                <img src="img/swampGrass1.png" className="grass"></img>
                <img src="img/swampGrass3.png" className="grass"></img>
                <img src="img/swampGrass1.png" className="grass"></img>
                <img src="img/swampGrass2.png" className="grass"></img>
                <img src="img/swampGrass1.png" className="grass"></img>
                <img src="img/swampGrass3.png" className="grass"></img>
                <img src="ImagesShrek/arrowShrek.png" style={{position: "absolute", right: "-250px"}} className="shrek" id="arrowShrek" ref={arrowShrekRef}
                onClick={()=>handleShrekClick(arrowShrekRef.current)}></img>
            </div>
            </div>

            <div id="fake-corner-buttons">
                <button id="fake-close" onClick={fakeClose}>
                    <FontAwesomeIcon icon={faXmark} size="lg"/>
                </button>
                <img 
                    src="ImagesShrek/shrekAngry.png" 
                    ref={shrekAngryRef}
                    id="shrekAngry" 
                    className="shrek" 
                    style={{ width: '25vw' }} 
                    alt="Shrek Angry"
                    onClick={()=>handleShrekClick(shrekAngryRef.current)}>
                    
                </img>
            </div>

            <div id="shrek-log" ref={shrekLogRef}>
                <button id="shrek-log-minimize" onClick={resizeLog}>
                    {logMinimized ? 
                        <FontAwesomeIcon icon={faMaximize} />
                        : <FontAwesomeIcon icon={faMinimize} />
                    }
                    
                </button>
                <p id="shrek-list-total">Total : {shrekCount} / {totalShreks}</p>
                <ShrekLog shreksRef={shreksRef} totalShreks={totalShreks}></ShrekLog>
            </div>

            {gameWon && <div className='info_container' style={{zIndex: 100}}>
                <div className='box_info'>
                    <h1>GG, you WON!</h1>
                    <img src="/imagesShrek/shrekDance.png" alt="fornite shrek" ref={forniteShrekRef} id='forniteShrek'/>
                    <div className='buttons_container'>
                        <button className='buttonShrekDialog' onClick={()=>setConfirm(true)}>YAY</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

