import {TITLECHANGE_REQUESTED, TITLECHANGE} from '../../actions/workbenchAction';
import {ELEMENTCLICK_REQUESTED, ELEMENTCLICK} from '../../actions/elementsAction'; 

const initialState = {
    messageBoxTitle:'Message Box',
    mailBoxTitle:'Smtp Mail',
    isTitleChanging:false,
    elementType:'default',
    elementClick:false
}

export default function workBenchReducer(state = initialState, action){
  switch(action.type){
    case TITLECHANGE_REQUESTED:
      return{
          ...state,isTitleChanging:true
      }

    case TITLECHANGE:
      return {
          ...state, 
          messageBoxTitle:action.payload.messageBoxTitle,
          mailBoxTitle:action.payload.mailBoxTitle,
          isTitleChanging:!state.isTitleChanging
      }

      case ELEMENTCLICK_REQUESTED:
        return {
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