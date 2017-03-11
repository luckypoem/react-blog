import React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import AdminPanel from '../module/AdminPanel.jsx';
import Store from '../store/createStore';

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.user === '') {
            browserHistory.push('/admin/login')
        }
    }

    render() {
        return <AdminPanel/>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Admin);