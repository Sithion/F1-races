const types = {
    SELECT_YEAR: 'race/select-year',
    SET_SEASON: 'race/set-season',
    SET_LOADING: 'race/set-loading',
};

export default {
    types,
    setLoading: loading => ({
        type: types.SET_LOADING,
        payload: { loading }
    }),
    selectYear: year => ({
        type: types.SELECT_YEAR,
        payload: { year },
    }),
    setSeason: (year, races, champion) => ({
        type: types.SET_SEASON,
        payload: { year, races, champion },
    }),
};
