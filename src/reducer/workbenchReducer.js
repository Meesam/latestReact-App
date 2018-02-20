import {TITLECHANGE_REQUESTED, TITLECHANGE} from '../actions/workbenchAction';

const initialState = {
    messageBoxTitle:'Message Box',
    mailBoxTitle:'Smtp Mail',
    isTitleChanging:false
}

export default (state = initialState, action)=>{
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

      default:
      return state
  }


}