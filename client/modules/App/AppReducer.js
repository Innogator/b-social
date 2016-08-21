// Import Actions
import { TOGGLE_ADD_EVENT } from './AppActions';

// Initial State
const initialState = {
  showAddEvent: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_EVENT:
      return {
        showAddEvent: !state.showAddEvent,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddEvent = state => state.app.showAddEvent;

// Export Reducer
export default AppReducer;
