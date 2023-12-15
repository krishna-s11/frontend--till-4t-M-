import { Children, createContext, useContext,useEffect, useState,useRef } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { useSelector } from "react-redux";
import { MidLoading } from "../components/M_used/Loading";



export const ChatContext = createContext({});

const ChatContextProvider = ({children}) => {
    const {user} = useSelector
    ((state)=>state.auth);
    const [chatClient, setChatClient] = useState();
    const initChatCalled = useRef(false); // Ref to track if initChat has been called


    console.log(user);

    useEffect(() => {
        const initChat = async() => {
            if(!user || initChatCalled.current){
                return ;
            }
            initChatCalled.current = true;
            const client = StreamChat.getInstance("hxd9x3ag7hx3");

            const handleConnectionChange = ({ online = false }) => {
                if (!online) return console.log('connection lost');
                setChatClient(client);
              };
          
              client.on('connection.changed', handleConnectionChange);

            await client.connectUser({
                id: user._id,
                name: user.username,
                image: user.image
            },user.stream_token);

            return () => {
                client.off('connection.changed', handleConnectionChange);
                client.disconnectUser().then(() => console.log('connection closed'));
              };

        };
        initChat();
    },[user])

    useEffect(() => {
        return () => {
            if(chatClient){
                chatClient.disconnectUser(); 
            }
        }
    },[chatClient])

    const startDMChatRoom = async (chatUser) => {
        if(!chatClient){
            return;
        }
        const newChannel = chatClient.channel("messaging", {
            members: [user._id, chatUser._id]
        });
        await newChannel.watch();
    }

    const value = {startDMChatRoom,setChatClient};

    if(!chatClient){
        return(
            <MidLoading />
        )
    }

    return(
        <Chat client={chatClient} theme='str-chat__theme-dark'>
            <ChatContext.Provider value={value}>
                {children}
            </ChatContext.Provider>
        </Chat>
    )
}

export const useChatContext = () => useContext(ChatContext);

export default ChatContextProvider;