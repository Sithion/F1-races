import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '@utils/api';

import actions from '@actions';

function* getSeasonResults(selectedYear) {
    const seasonSummary = yield call(Api.get,
        `http://ergast.com/api/f1/${selectedYear}/results.json?limit=1000`);
    const { Races } = seasonSummary.MRData.RaceTable;


    const seasonStanding = yield call(Api.get,
        `http://ergast.com/api/f1/${selectedYear}/driverStandings.json`);
    const championId = seasonStanding.MRData.StandingsTable.StandingsLists[0]
        .DriverStandings[0].Driver.driverId;
    yield put(actions.setSeason(selectedYear, Races, championId));
}

export default function* () {
    yield takeLatest(actions.types.SELECT_YEAR,
        ({ payload }) => getSeasonResults(payload.year));
}
