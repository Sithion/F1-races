export default (state) => {
    const selectedSeason = state.seasons[state.selected];
    if (selectedSeason) {
        return selectedSeason;
    }
    return {};
};
