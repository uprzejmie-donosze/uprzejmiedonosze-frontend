import _ from 'lodash';
import axios from 'axios';
import {browserHistory} from 'react-router';

export default function () {
    axios.interceptors.response.use(response => response, (error) => {
        const currentPath = browserHistory.getCurrentLocation().pathname;
        if (401 === _.get(error, 'response.status') && '/' !== currentPath) {
            browserHistory.push('/login');
        }

        return Promise.reject(error);
    });
}

