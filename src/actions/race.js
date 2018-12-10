const types = {
	GET_RACE_RESULTS: 'race/get-race-results',
	SET_RACE_RESULTS: 'race/set-race-results',
};

export default {
	types,
	getRaceResults: (year) => ({
		type: types.GET_RACE_RESULTS,
		payload: {year}
	}),
	setRaceResults: (results) => ({
		type: types.SET_RACE_RESULTS,
		payload: {results}
	})

};
