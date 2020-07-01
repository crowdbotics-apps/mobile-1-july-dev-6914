import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView7405Reducer from '../features/CalendarView7405/redux/reducers';
import CalendarView7400Reducer from '../features/CalendarView7400/redux/reducers';
import EmailAuth7399Reducer from '../features/EmailAuth7399/redux/reducers';
import EmailAuth7393Reducer from '../features/EmailAuth7393/redux/reducers';
import CalendarView7392Reducer from '../features/CalendarView7392/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView7405: CalendarView7405Reducer,
CalendarView7400: CalendarView7400Reducer,
EmailAuth7399: EmailAuth7399Reducer,
EmailAuth7393: EmailAuth7393Reducer,
CalendarView7392: CalendarView7392Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});