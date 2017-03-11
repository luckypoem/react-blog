import React from 'react';
import {connect} from 'react-redux';

import {logInUser} from '../store/actions';
import LogInterferce from '../module/LogInterferce.jsx';

class LogInterferceContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {userLogin} = this.props;
        return <LogInterferce handleLogin={userLogin}/>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userLogin: (userName) => {
            dispatch(logInUser(userName));
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInterferceContainer);