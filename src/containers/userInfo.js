import _ from 'lodash';
import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

class UserInfo extends Component {

    onLogout() {
        browserHistory.push('/');
    }

    render() {
        return <span>{this.props.user.name}</span>
    }
}

function mapStateToProps(state) {
    return {
        user: _.get(state, 'user')
    };
}

export default connect(mapStateToProps)(UserInfo);
