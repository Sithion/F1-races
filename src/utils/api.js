/* eslint-disable no-undef */

class Api {
    constructor() {
        this.get = this.get.bind(this);
    }

    async get(url, config = {}) {
        return this._request(url, {
            ...config,
            method: 'GET',
        });
    }

    async _request(uri, config) {
        try {
            const response = await fetch(uri, config);
            if (!response || response.status !== 200) {
                throw new Error(`error when calling '${uri}'`);
            }
            return response.json();
        } catch (err) {
            throw new Error(`error when calling '${uri}' \n- message: "${err}"`);
        }
    }
}

export default new Api();
