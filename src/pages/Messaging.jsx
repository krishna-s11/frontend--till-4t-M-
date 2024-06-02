import React from 'react'
import ChatRooms from '../components/Messaging/ChatRooms'
import ChatRoomScreen from '../components/Messaging/ChatRoomScreen'
import ChatContextProvider from '../Context/ChatContext'
import 'stream-chat-react/dist/css/v2/index.css';
import { useSelector } from 'react-redux';

const Messaging = () => {
  const {user} = useSelector((state)=>state.auth);

  if(user.payement?.membership){
  return (
    <ChatContextProvider>
        <div className="home_page bg-black rounded-2xl flex" style={{width: "100%", height: "700px", overflow: "hidden"}}>
            <ChatRooms/>
            <ChatRoomScreen />
        </div>
    </ChatContextProvider>
  )
  }
  else{
    return(
      <div className="home_page bg-black rounded-2xl flex" style={{width: "100%", height: "400px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px"}}>
         <h1>You need to buy a membership to access the feature</h1>
      </div>
    )
  }
}

export default Messaging