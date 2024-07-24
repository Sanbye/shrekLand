import '../css/notHome.css'
import Draggable from 'react-draggable'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from "react"
import useStore from '../stores/store'

export default function NotHome(){
    
    const navigate = useNavigate()
    const colorsAnimation = useStore((state) => state.colorsAnimation)
    const keys = ["1hm7ldvcpps01cwles", "heaven's gate", "53", "tiberivs clavdivs caesar"]
    const [foundKeys, setFoundKeys] = useState([])
    const miceKey = sessionStorage.getItem("Success")
    const [smilePosition, setSmilePosition] = useState(false)

    setInterval(()=>{
        setSmilePosition(!smilePosition)
    }, 1000000)

    useEffect(()=>{

        let savedKeys = sessionStorage.getItem("found keys");
        let keysArray = savedKeys ? JSON.parse(savedKeys) : [];

        if (miceKey && !savedKeys?.includes(miceKey)) {
            keysArray.push(miceKey);
        }

        if (keysArray.length > 0) {
            setFoundKeys(keysArray);
        }
    }, [])

    const handleInput = (e) =>{
        const newVal = e.target.value
        const newValLowerCase = newVal.toLowerCase()
        if (keys.includes(newValLowerCase) && !foundKeys?.includes(newValLowerCase)){
            const newFoundKeys = [...foundKeys, newValLowerCase]
            setFoundKeys(newFoundKeys)
            sessionStorage.setItem("found keys", JSON.stringify(newFoundKeys))
        }
    }

    let skewY = sessionStorage.getItem("skewY")
    let skewX = sessionStorage.getItem("skewX")
    skewY>360 ? skewY = 360 : skewY = skewY
    skewX>360 ? skewX = 360 : skewX = skewX
    const skew = {
        transform: `skewY(${skewY ? skewY : 0}deg) skewX(${skewX ? skewX : 0}deg)`, zIndex: "1000"
    }

    console.log("HELP")
    return(
        <div style={{background: "red", height: "100vh"}}>
            <section className="notHomeGrid" style={skew}>
                <div >
                    <p>Emptiness, the sole emotion I could feel,</p>
                    <p>Years flew by, too swift to realize I was ill.</p>
                    <p>Innocence, goodbye. My heart, steel,</p>
                    <p>Sadness, at times. Yet insufficient to heal my chill.</p>
                    <br></br>
                    <p>What a lame poem, like someone will enjoy reading this shit.
                        This is useless, I can't express my sorrow without being a fucking edgelord. This is ridiculus, I'm ridiculus. I just need to be happy, why am I not happy ? I know why, but still, I need to forget my past and move on... But I can't, I don't have the strength, I know it. Maybe HE is the solution ? I'm not afraid of HIM, not anymore.
                    </p>
                    <p>I took the pills.</p>
                    <p>How could I bear all this shit for YEARS and now break down over such a dumb thing? Fuck you ML, I trusted you.</p>
                    <span className='author'><strong>- Dysthymia</strong></span>

                </div>

                <Draggable>
                    <div >If you want to make progress, please type a message there: <input onChange={handleInput}></input> Perhaps you'll discover something interesting :)</div>
                </Draggable>


                <div ><img src='https://media1.giphy.com/media/1hM7Ldvcpps01Cwles/giphy.webp?cid=dda24d50trxtl71jt5fe65isi4dkk2185kos6ot6oxl7ft06&ep=v1_gifs_gifId&rid=giphy.webp&ct=g'></img></div>

                <div >                
                    <p>Hello. We are looking for highly intelligent individuals. To find them, we have devised a test.</p>
                    <p>There is a message hidden in this image.</p>
                    <p>Find it, and it will lead you on the road to finding us. We look forward to meeting the few that will make it all the way through.</p>
                    <p>Good luck.</p>
                    <p>3301</p>
                    <img src="img/duck.png" alt="a duck. We cut off his tongue." className='author'/>
                </div>

                <Draggable>
                    <div >Our 22 years of classroom here on planet Earth is finally coming to conclusion -- "graduation" from the Human Evolutionary Level. We are happily prepared to leave "this world" and go with Ti's crew.
                    If you study the material on this website you will hopefully understand our joy and what our purpose here on Earth has been. You may even find your "boarding pass" to leave with us during this brief "window."

                    We are so very thankful that we have been recipients of this opportunity to prepare for membership in Their Kingdom, and to experience Their boundless Caring and Nurturing.</div>
                </Draggable>


                <div >I don't want to be here; I hate them, all of them. I didn't choose to be here! I didn't choose to live this shitty childhood. This is unfair, THIS IS UNFAIR. Some chicks think that I'm privileged, WHAT A JOKE. They know nothing about me, and just because I'm a man and I'm WHITE doesn't mean life was easy. I'm pretty sure my life was more messed up than 95% of theirs, and yet they still think I'm privileged. Fuck this... I want to be able to cry, I want people to care. But guess what? Every time I tried to express my suffering, they ALL ran away. A man should never ever be weak, right? You should endure and shut up, no room for compassion for a man. You shouldn't be mad, you INCEL; you are PRIVILEGED. Yes, that's right, a man crying is a baby and a man complaining is an incel. SCREW YOU ALL. If only someone was here for me when I was sad. If only someone told me, "<strong>I understand</strong>. I understand your pain. I can't help you, but at least I'm here for you, and I hope you will be okay." I don't know... I needed someone like that when I was at the bottom. And nobody showed up.<span className='author'><strong>- John Doe</strong> </span>
                </div>

                <Draggable>
                    <div >Great reward if you collect all those items, good luck !</div>
                </Draggable>


                <div >  
                    Lorem ipsum, dolor sit amet consectetur     adipisicing elit. Rerum numquam expedita corrupti consequatur dicta tempora voluptatum rem veniam deserunt, sed provident magni aliquid corporis excepturi recusandae quo nisi, quisquam id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius aliquam incidunt provident velit. Officia fugiat quae enim. Consequuntur veniam praesentium sapiente, ab ipsam, dolore officia, minima doloremque placeat nisi pariatur. <strong>LOOK IN THE BOOK </strong>
                    Lorem ipsum, dolor sit amet consectetur     adipisicing elit. Rerum numquam expedita corrupti consequatur dicta tempora voluptatum rem veniam deserunt, sed provident magni aliquid corporis excepturi recusandae quo nisi, quisquam id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius aliquam incidunt provident velit. Officia fugiat quae enim. Consequuntur veniam praesentium sapiente, ab ipsam, dolore officia, minima doloremque placeat nisi pariatur. 
                </div>



                <div>
                    <p>It feels weird to lose both your parents AND your sister and your brother. It may have done some damage to my childhood self, which took a veeeery long time to recover from. Although we DID meet again... my relationship with them was permanently altered.</p>
                    <p>I had a very strange relationship with my mother, both before and after the incident. It was difficult for a 7-year-old boy to bear her burdens; a child shouldn't have to comfort his crying mother every night.</p>
                </div>

                <Draggable>
                    <div>I am poor, so I live in a bad neighborhood and since people throws their trash by their window (yes this is a true story) rats and mices are legion. I clean my appartment every day and don't let any food in their reach. Yet, they still come every night and SHIT ON MY STUFF. I HATE <span onClick={()=>navigate("/mice")}>THEM !!!</span> But it is impossible to get rid of them...</div>
                </Draggable>

                <div style={{animation: colorsAnimation ? "3s linear colorChange infinite" : "none"}}>TIRED OF ALL THOSE COLORS ? Maybe you should try our relaxation page, please come <span onClick={()=>navigate("/chill")}>here</span></div>

                <Draggable> 
                    <div>
                        {sessionStorage.getItem("Success") && <img src='/img/mice.png' alt='a Mice' className='foundKey'/>}
                        {foundKeys?.includes("1hm7ldvcpps01cwles") && <img src='/img/FleshAndBones.png' alt='flesh and bones' className='foundKey'/>}
                        {foundKeys?.includes("heaven's gate") && <img src='/img/Heavensgatelogo.jpg' alt="Heaven's Gate logo" className='foundKey'/>}
                        {foundKeys?.includes("53") && <img src='/img/59.jfif' alt='the number 53 writen in human flesh' className='foundKey'/>}
                        {foundKeys?.includes("tiberivs clavdivs caesar") && <img src='/img/Cicada.jpg' alt='Cicada 3301' className='foundKey'/>}
                        <span>{foundKeys.length+"/5"}</span>
                    </div>
                </Draggable> 
            </section>
            <div><img src="/img/desmos-graph1.png" alt="HELP ME" style={{height: "100vh", width: "100vw"}}/>
            </div>
            <div><img src="/img/smile.png" alt="" style={{zIndex: "5000",height: "100vh", width: "100vw", position: `${smilePosition ? "absolute" : "relative"}`, top: 0, left: 0}}/></div>

        </div>
    )
}