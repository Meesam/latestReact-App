import {ELEMENTCLICK_REQUESTED, ELEMENTCLICK} from '../actions/elementsAction'; 

const initialState = {
    elementType:'default',
    elementClick:false
}

export default (state = initialState, action)=>{
  switch(action.type){
    case ELEMENTCLICK_REQUESTED:
      return{
          ...state,elementClick:false
      }

    case ELEMENTCLICK:
      return {
          ...state, elementType:action.payload , elementClick:!state.elementClick
      }

      default:
      return state
  }


}