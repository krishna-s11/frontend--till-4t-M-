import React from 'react'
import ChatRooms from '../components/Messaging/ChatRooms'
import ChatRoomScreen from '../components/Messaging/ChatRoomScreen'
import ChatContextProvider from '../Context/ChatContext'
import 'stream-chat-react/dist/css/v2/index.css';

const Messaging = () => {
  return (
    <ChatContextProvider>
        <div className="home_page bg-black rounded-2xl flex" style={{width: "100%", height: "700px", overflow: "hidden"}}>
            <ChatRooms/>
            <ChatRoomScreen />
        </div>
    </ChatContextProvider>
  )
}

export default Messaging