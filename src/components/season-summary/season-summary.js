import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as _ from 'lodash';

class RacePicker extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        winners: PropTypes.arrayOf(PropTypes.shape({
            round: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })),
        champion: PropTypes.string,
    };

    static defaultProps = {
        loading: false,
        winners: [],
        champion: '',
    };

    renderWinnerRow(winner) {
        const { champion } = this.props;
        return (
            <div
                key={winner.round}
                className={classNames('race-summary-winner', {
                    champion: winner.id === champion,
                })}
            >
                <div className="race-summary-winner-round">
                    {`Race ${winner.round}`}
                </div>
                <div className="race-summary-winner-name">
                    {winner.name}
                </div>
            </div>
        );
    }

    renderLoading() {
        return (
            <div className="race-summary-loading">
                Loading
                <i className="fas fa-spinner fa-spin" />
            </div>
        );
    }

    render() {
        const { winners, loading } = this.props;
        return (
            <div className="race-summary-container">
                {winners.length === 0 && loading && this.renderLoading()}
                {_.map(winners, winner => this.renderWinnerRow(winner))}
            </div>
        );
    }
}

export default RacePicker;
