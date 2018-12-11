import {
		takeEvery,
		call,
		put,
		select,
} from 'redux-saga/effects';
import selectors from '@selectors';
import Api from '@utils/api';

import actions from '@actions';

function* getSeasonResults(selectedYear) {
		try {
				const season = yield select(state => selectors.getSelectedSeason(state));
				if (!season.races) {
						yield put(actions.setLoading(true));
						const seasonSummary = yield call(Api.get,
								`http://ergast.com/api/f1/${selectedYear}/results.json?limit=1000`);
						const { Races } = seasonSummary.MRData.RaceTable;
						const seasonStanding = yield call(Api.get,
								`http://ergast.com/api/f1/${selectedYear}/driverStandings.json`);
						const championId = seasonStanding.MRData.StandingsTable.StandingsLists[0]
								.DriverStandings[0].Driver.driverId;
						yield put(actions.setSeason(selectedYear, Races, championId));
				}
		} catch (e) {
				console.log('error on getting season results', e);
		} finally {
				yield put(actions.setLoading(false));
		}
}

export default function* () {
		yield takeEvery(actions.types.SELECT_YEAR,
				({ payload }) => getSeasonResults(payload.year));
}
