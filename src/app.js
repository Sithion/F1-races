import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RacePicker, RaceSummary } from '@components';
import actions from '@actions';
import selectors from '@selectors';


import './styles/main.scss';

class App extends Component {
    static propTypes = {
        onSelectYear: PropTypes.func.isRequired,
        selectedYear: PropTypes.number,
        winners: PropTypes.array,
        loading: PropTypes.bool,
        champion: PropTypes.string,
    };

    static defaultProps = {
        loading: false,
        champion: '',
        winners: [],
        selectedYear: 0,
    };


    render() {
        const {
            selectedYear,
            onSelectYear,
            winners,
            champion,
            loading,
        } = this.props;
        return (
            <div>
                <header>
                    <h1>Race Results</h1>
                    <i className="flag fas fa-flag-checkered" />
                </header>
                <main>
                    <div className="description">
                        Select a year and see the champions for each round:
                    </div>
                    <RacePicker
                        startYear={2005}
                        endYear={2015}
                        onSelectYear={onSelectYear}
                        selectedYear={selectedYear}
                    />
                    <RaceSummary
                        loading={loading}
                        winners={winners}
                        champion={champion}
                    />
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedYear: state.selected,
    loading: state.loading,
    winners: selectors.getWinnersBySeason(state),
    champion: selectors.getSelectedSeason(state).champion,
});

const mapDispatchToProps = {
    onSelectYear: actions.selectYear,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
