const initState={}

const chatReducer=(state=initState,action)=>{
    switch(action.type){
        case 'SEND_CHAT_SUCCESS':
            console.log('send sent')
            return{
                ...state
            }
        case "SEND_CHAT_ERROR":
            console.log('send failed',action.err.message)
            return{
                ...state
            }
        default:
            return state
    }
    
}

export default chatReducer