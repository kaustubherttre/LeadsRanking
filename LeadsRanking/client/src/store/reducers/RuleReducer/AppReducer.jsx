import { UPDATE_NAV_STATE, LOG_IN} from '../../actions/RuleActions/ActionTypes';

const initialState = {
    navState: 'open',
    loggedIn: false,
}

const AppReducer = (state=initialState, action) => {
  const type = action.type;
  switch(type) {
    case UPDATE_NAV_STATE: {
      let nav = 'open';
      if (action.payload && action.payload.flag === 'closed') {
        nav = 'closed';
      }
      return { ...state, navState: nav };
    }
    case LOG_IN:
      return { ...state, loggedIn: true };
    default:
      return state;
  }
}

export default AppReducer;