import actions from '@actions';

const initialState = {
	selectedYear: null,
	selectedYearChampions: []
};

const {types} = actions.race;

export default (state = initialState, {payload, type}) => {
	switch(type){
		case types.GET_RACE_RESULTS:
			return {
				...state,
				selectedYear: payload.year,
				selectedYearResults: []
			};
		case types.SET_RACE_RESULTS:
			return {
				...state,
				selectedYearResults: payload.results
			};
		default:
			return state;
	}
};
