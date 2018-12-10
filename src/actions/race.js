const types = {
    SELECT_YEAR: 'race/select-year',
    UPDATE_RACES_BY_YEAR: 'race/update-races-by-year',
};

export default {
    types,
    selectYear: (year) => {
        console.log('selecting year 1', year);
        return {
            type: types.SELECT_YEAR,
            payload: { year },
        };
    },
    updateRacesByYear: (year, races) => ({
        type: types.UPDATE_RACES_BY_YEAR,
        payload: { year, races },
    }),
};
