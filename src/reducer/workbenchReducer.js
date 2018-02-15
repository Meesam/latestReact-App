import {TITLECHANGE_REQUESTED, TITLECHANGE} from '../actions/workbenchAction';

const initialState = {
    title:'Message Box',
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
          ...state, title:action.payload , isTitleChanging:!state.isTitleChanging
      }

      default:
      return state
  }


}