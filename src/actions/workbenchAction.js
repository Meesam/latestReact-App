export const TITLECHANGE_REQUESTED='TITLECHANGE_REQUESTED' ;
export const TITLECHANGE ='TITLECHANGE';



let getTitle=(inputText)=>{
   if(inputText.name==='mailbox'){
     return {
      mailBoxTitle:inputText.value
     }
   }
   if(inputText.name==='messagebox'){
     return {
      messageBoxTitle:inputText.value
     }
   }
}

export const changeTitle = (inputText) => {
   debugger; 
   return dispatch => {
      dispatch({
        type: TITLECHANGE_REQUESTED
      })
  
      dispatch({
        type: TITLECHANGE,
        payload:getTitle(inputText)
      })
    }
  }

