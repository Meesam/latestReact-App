export const ELEMENTCLICK_REQUESTED='ELEMENTCLICK_REQUESTED' ;
export const ELEMENTCLICK ='ELEMENTCLICK';

export const selectElement = (elementType) => {
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

