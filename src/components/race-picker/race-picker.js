import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import classNames from 'classnames';

class RacePicker extends Component {
    static propTypes = {
        selectedYear: PropTypes.number,
        startYear: PropTypes.number,
        endYear: PropTypes.number,
        onSelectYear: PropTypes.func,
    };

    static defaultProps = {
        onSelectYear: () => null,
        selectedYear: 0,
        startYear: 2008,
        endYear: 2018,
    };

    renderYearsItem(year) {
        const { selectedYear, onSelectYear } = this.props;
        return (
            <button
                key={year}
                type="button"
                onClick={() => onSelectYear(year)}
                className={classNames('race-picker-year', { selected: selectedYear === year })}
            >
                {year}
            </button>
        );
    }

    render() {
        const { startYear, endYear } = this.props;
        return (
            <div className="race-picker-container">
                <div className="race-picker-years">
                    {_.times(
                        (endYear - startYear) + 1,
                        index => this.renderYearsItem(startYear + index),
                    )}
                </div>
            </div>
        );
    }
}

export default RacePicker;
