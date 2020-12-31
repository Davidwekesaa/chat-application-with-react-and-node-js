import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import  io  from 'socket.io-client'
import './Chat.css'
import InforBar from './InforBar'
import Input from './Input'
import Messages from './Messages'




let socket;

const Chat = ({location}) => {
    const[name,setName] = useState('')
    const[room,setRoom] = useState('')
    const[message,setMessage] = useState('')
    const[messages,setMessages] = useState([])
    const [users, setUsers] = useState('');
    const p = 'https://chat-application6.herokuapp.com/'
    useEffect(()=>{
            
        const {name,room} = queryString.parse(location.search)
        socket = io(p)
        setName(name)
        setRoom(room)
       socket.emit('join',{name: name , room: room},(error)=>{
        if(error){

            alert(error)
        }
       })
       return ()=>{
        socket.emit('t')
        socket.off()
       }
      
    },[p,location.search])

    useEffect(()=>{
        socket.on('message',(message)=>{
                
                setMessages( [ ...messages, message ]);
        })
       
        return()=>{
            socket.off()
        }
    },[messages])


    //function for sending messages
   const sendMessage =(e) =>{
       e.preventDefault()
        if(message){
            socket.emit('sendMessage',message,() => { setMessage('')}
                    
            )
          
        }
        
    }

      console.log(message,messages)
       
    return (
        <div className="outerContainer">
           <div className="container">
               <InforBar room={room} />
               <Messages messages={messages} name={name}/>
               <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
                
           </div>
          
        </div>
    )
}

export default Chat
