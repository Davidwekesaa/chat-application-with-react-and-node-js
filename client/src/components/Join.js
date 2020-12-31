import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Join.css'

const Join = () => {
    const[name,setName] = useState('')
    const[room,setRoom] = useState('')

    return <>
        <div className = "joinOuterContainer">
            <div className = "joinInnerContainer">
            <h1 className = "heading">join</h1>
            <div>
                <input type="text" placeholder="Name" value = {name} className="joinIput" onChange={(e)=>setName(e.target.value)}  />
                
            </div>
            <div>
                <input type="text" placeholder="Room" value = {room} className="joinIput mt-20" onChange={(e)=>setRoom(e.target.value)} />
                
            </div>
           
           
             <Link onClick={(e) => (!name || !room ) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                         <button className = "button mt-20" type="submit">sign in</button>    
             </Link>

            
              
        </div>
        </div>
    </>
}

export default Join
