export const TITLECHANGE_REQUESTED='TITLECHANGE_REQUESTED' ;
export const TITLECHANGE ='TITLECHANGE';

export const changeTitle = (inputText) => {
    return dispatch => {
      dispatch({
        type: TITLECHANGE_REQUESTED
      })
  
      dispatch({
        type: TITLECHANGE,
        payload:inputText
      })
    }
  }

