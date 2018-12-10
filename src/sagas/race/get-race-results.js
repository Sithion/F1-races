import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '@utils/api';

import actions from '@actions';

function* getRaceResults(selectedYear) {
    const seasonSummary = yield call(Api.get, `http://ergast.com/api/f1/${selectedYear}/results.json?limit=1000`);
    const { Races } = seasonSummary.MRData.RaceTable;
    yield put(actions.race.updateRacesByYear(selectedYear, Races));
}

export default function* () {
    yield takeLatest(actions.race.types.SELECT_YEAR, ({ payload }) => getRaceResults(payload.year));
}
