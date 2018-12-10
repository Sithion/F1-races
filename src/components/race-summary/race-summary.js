import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as _ from 'lodash';

class RacePicker extends Component {
    static propTypes = {
        winners: PropTypes.arrayOf(PropTypes.shape({
            round: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })),
        champion: PropTypes.string,
    };

    static defaultProps = {
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

    render() {
        const { winners } = this.props;
        return (
            <div className="race-summary-container">
                {_.map(winners, winner => this.renderWinnerRow(winner))}
            </div>
        );
    }
}

export default RacePicker;
