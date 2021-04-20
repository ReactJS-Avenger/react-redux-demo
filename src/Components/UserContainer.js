import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/user/userAction';

const UserContainer = ({userData, fetchUser}) => {
    useEffect(()=>{
        fetchUser()
    }, [])
    return userData.loading ? (
        <h2> Loading...... </h2>
    )
    : userData.error ?
    (
        <h2>{userData.error}</h2>
    ):
    (
        <div>
            User List
            {
                userData && userData.user && userData.user.map((el)=> <p>{el.name}</p>)
            }
        </div>
    )
};

const mapStateToProps = (state) =>{
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchUser: () => dispatch (fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);