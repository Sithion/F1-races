const types = {
    SELECT_YEAR: 'race/select-year',
    SET_SEASON: 'race/set-season',
};

export default {
    types,
    selectYear: year => ({
        type: types.SELECT_YEAR,
        payload: { year },
    }),
    setSeason: (year, races, champion) => ({
        type: types.SET_SEASON,
        payload: { year, races, champion },
    }),
};
