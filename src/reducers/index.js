import actions from '@actions';

const initialState = {
    selected: null,
    seasons: {},
};

const { types } = actions;

export default (state = initialState, { payload, type }) => {
    switch (type) {
        case types.SELECT_YEAR:
            return {
                ...state,
                selected: payload.year,
            };
        case types.SET_SEASON: {
            const { races, year, champion } = payload;
            return {
                ...state,
                seasons: {
                    ...state.seasons,
                    [year]: {
                        races,
                        champion,
                    },
                },
            };
        }
        default:
            return state;
    }
};
