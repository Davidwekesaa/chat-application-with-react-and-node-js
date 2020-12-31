import React from 'react'
import './Message.css'
import ReactEmoji from 'react-emoji'
const Message = ({message:{user,text},name}) => {
   let isSendByCurrentUser = false

   const trimedNaame = name.trim().toLowerCase()
    console.log(name)
   if(user === trimedNaame){
       isSendByCurrentUser = true
       console.log(name)
   }
   
   return(
      isSendByCurrentUser
       ? (
            <div className = "messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimedNaame}</p>
                    <div className ="messageBox backgroundBlue">
                        <p className="messageText colorWhite"> {ReactEmoji.emojify(text)}</p>
                    </div>
            </div>
      ) :(

         <div className = "messageContainer justifyStart">
                   
                    <div className ="messageBox backgroundLight">
                        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>
                     <p className="sentText pl-10">{user}</p>
            </div>

      )
   )
}

export default Message
