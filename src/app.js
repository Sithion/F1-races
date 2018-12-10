import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RacePicker } from '@components';
import actions from '@actions';


import './styles/main.scss';

class App extends Component {
    static propTypes = {
        onSelectYear: PropTypes.func.isRequired,
        selectedYear: PropTypes.number,
    };

    static defaultProps = {
        selectedYear: 0,
    };


    render() {
        const { selectedYear, onSelectYear } = this.props;
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
                        onSelectYear={onSelectYear}
                        selectedYear={selectedYear}
                    />
                </main>
            </div>
        );
    }
}

const mapStateToProps = ({ race }) => ({
    selectedYear: race.selectedYear,
});

const mapDispatchToProps = {
    onSelectYear: actions.race.selectYear,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
