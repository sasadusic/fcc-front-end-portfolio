import React from 'react'
import { useState, useEffect } from 'react'

const Drums = () => {
   const [text, setText] = useState('')
    const [on, setOn] = useState(true)
  
  const audios = {
    q: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
    w: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
    e: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
    a: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
    s: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
    d: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
    z: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
    x: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
    c: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'
  }

  const texts = {
    q: 'Heater-1',
    w: 'Heater-2',
    e: 'Heater-3',
    a: 'Heater-4_1',
    s: 'Heater-6',
    d: 'Dsc_Oh',
    z: 'Kick_n_Hat',
    x: 'RP4_KICK_1',
    c: 'Cev_H2'
  }

  const handleOn = () => {
    setOn(!on)
    setText('')
    }


  const playAudio = (key) => {
    if(on){

        const audio = document.getElementById(key)
        audio.currentTime = 0
        audio.play()
        setText(texts[key.toLowerCase()])
    }
  }

  useEffect(() => {
    if(!on) return

        const handleKeyDown = (e) => {
            const key = e.key.toLowerCase()
            if(audios[key]){
                setText(texts[key])
                const audioEl = document.getElementById(key.toUpperCase())
                if(audioEl){
                    audioEl.currentTime = 0
                    audioEl.play()
                }
            }
        }
        
        document.addEventListener('keydown', handleKeyDown)
        
        return () => {document.removeEventListener('keydown', handleKeyDown)}
    
  }, [on])


  return(
<div id='home' className='home'>

    <div id='drums' className="cont">
        <div id="drum-machine">
            <div className="header">
                <div className="logo">Dusic</div>
                <button className={on ? 'on on-on' : 'on'} onClick={handleOn}><div className='drum-btn'></div></button>
            </div>
            <div id="display">{text}</div>
            <div className="drum-cont">
                <button id='q' className="drum-pad" onClick={() => playAudio('Q')}>Q
                    <audio className='clip' id='Q'src={audios.q}></audio></button>    
                <button id='w' className="drum-pad" onClick={() => playAudio('W')}>W
                    <audio className='clip' id='W'src={audios.w}></audio>
                </button>
                <button id='e' className="drum-pad" onClick={() => playAudio('E')}>E
                    <audio className='clip' id='E'src={audios.e}></audio>
                </button>
                <button id='a' className="drum-pad" onClick={() => playAudio('A')}>A
                    <audio className='clip' id='A'src={audios.a}></audio>
                </button>
                <button id='s' className="drum-pad" onClick={() => playAudio('S')}>S
                    <audio className='clip' id='S'src={audios.s}></audio>
                </button>
                <button id='d' className="drum-pad" onClick={() => playAudio('D')}>D
                    <audio className='clip' id='D'src={audios.d}></audio>
                </button>
                <button id='z' className="drum-pad" onClick={() => playAudio('Z')}>Z
                    <audio className='clip' id='Z'src={audios.z}></audio>
                </button>
                <button id='x' className="drum-pad" onClick={() => playAudio('X')}>X
                    <audio className='clip' id='X'src={audios.x}></audio>
                </button>
                <button id='c' className="drum-pad" onClick={() => playAudio('C')}>C
                    <audio className='clip' id='C'src={audios.c}></audio>
                </button>
            </div>
        </div>
  </div>
</div>
  )
}

export default Drums