export const ELEMENTCLICK_REQUESTED='ELEMENTCLICK_REQUESTED' ;
export const ELEMENTCLICK ='ELEMENTCLICK';

export const selectElement = (elementType) => {
   debugger;
   return dispatch => {
      dispatch({
        type: ELEMENTCLICK_REQUESTED
      })
  
      dispatch({
        type: ELEMENTCLICK,
        payload:elementType
      })
    }
  }

