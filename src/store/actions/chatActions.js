export const sendChat=(chat,uid,gid)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase()
        const firestore=getFirestore()

        /* firestore.collection('chats').doc(uid).set({
            user:uid,
            guest:gid,
            senderId:chat.sid,
            message:chat.message,
        }) */
        firestore.collection('chats').doc(uid).collection(gid).doc().set({
            user:uid,
            guest:gid,
            senderId:chat.sid,
            message:chat.message,
        })
        .then(()=>{
            dispatch({type:'SEND_CHAT_SUCCESS'})
        })
        .catch(err=>{
            dispatch({type:'SEND_CHAT_ERROR',err})
        })

        
    }
}