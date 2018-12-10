import { all, call } from 'redux-saga/effects';
import getRaceResults from '@sagas/race/get-race-results';

const sagas = function* saga() {
    yield all([
        call(getRaceResults),
    ]);
};

export default sagas;
