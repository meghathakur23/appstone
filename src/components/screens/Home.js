import Container from '@material-ui/core/Container';
import UserCardView from "../views/UserCardView"
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import React, { Component } from 'react';

import { ADD_USERS } from '../../client/actions';

class Home extends Component {
    componentDidMount() {
        fetch('https://reqres.in/api/users?page=2')
         .then(response => response.json())
         .then(({data}) => this.props.dispatch({ type : ADD_USERS, payload: data }));
    }

    render() {
        const { user_list, ...other } = this.props
        return (
            <div className="App" >
                {user_list.map((user,i) => 
                    !user._deleted && ( 
                        <Paper elevation={0} key={i}>
                            <Container fixed >
                                <UserCardView user_details={user} {...other} />
                            </Container>
                        </Paper>
                    )
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user_list: state.user_list
    };
}

export default connect(mapStateToProps)(Home)