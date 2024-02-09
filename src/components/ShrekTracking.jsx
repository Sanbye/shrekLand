import React, { useState, useEffect, useRef } from 'react'

export default function ShrekLog(props) {

  const shreksArray = Array.from(props.shreksRef.current);

  return (
    <>
      { props.totalShreks > 0 &&
        shreksArray.map((shrek, i) => (
          <div className='shrek-check' key={i}>
            <input type="checkbox" id={`check${i}`} name="" checked={shrek.classList.contains("checked")}/>
            <p style={{ fontWeight: 'bolder', paddingLeft: '5px' }}>{shrek.id}</p>
          </div>
        ))}
    </>
  )
}

