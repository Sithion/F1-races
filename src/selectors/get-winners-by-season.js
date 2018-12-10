import * as _ from 'lodash';
import getSelectedSeason from './get-selected-season';

export default state => _.map(getSelectedSeason(state).races, ({ round, ...race }) => {
    const { givenName, familyName, driverId } = race.Results[0].Driver;
    return { round, name: `${givenName} ${familyName}`, id: driverId };
});
