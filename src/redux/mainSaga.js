import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth7406Saga from '../features/EmailAuth7406/redux/sagas';
import CalendarView7405Saga from '../features/CalendarView7405/redux/sagas';
import CalendarView7400Saga from '../features/CalendarView7400/redux/sagas';
import EmailAuth7399Saga from '../features/EmailAuth7399/redux/sagas';
import EmailAuth7393Saga from '../features/EmailAuth7393/redux/sagas';
import CalendarView7392Saga from '../features/CalendarView7392/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth7406Saga,
CalendarView7405Saga,
CalendarView7400Saga,
EmailAuth7399Saga,
EmailAuth7393Saga,
CalendarView7392Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}