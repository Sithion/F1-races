import actions from '@actions';

const initialState = {
    selectedYear: null,
    races: {},
};

const { types } = actions.race;

export default (state = initialState, { payload, type }) => {
    switch (type) {
        case types.SELECT_YEAR:
            return {
                ...state,
                selectedYear: payload.year,
                selectedYearResults: [],
            };
        case types.UPDATE_RACES_BY_YEAR: {
            const { races, year } = payload;
            return {
                ...state,
                races: {
                    ...state.races,
                    [year]: races,
                },
            };
        }
        default:
            return state;
    }
};
