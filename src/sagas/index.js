import { all, call } from 'redux-saga/effects';
import getSeasonResults from './get-season-results';

const sagas = function* saga() {
    yield all([
        call(getSeasonResults),
    ]);
};

export default sagas;
