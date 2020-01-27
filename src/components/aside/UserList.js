import React from 'react';
import UserInfo from '../userInfo/UserInfo';
import './user-list.css';
import UserSearch from '../search/UserSearch';

class UserList extends React.Component {
    render() {
        return (
        <div className="user-list">
            <UserSearch {...this.props}/>
            {
                this.props.userList && this.props.userList.length > 0  ? (
                    this.props.userList.map(element => {
                        return (
                            <UserInfo user={element} {...this.props} key={element.id}/>
                        )
                    })
                ): ''
            }
        </div>
        )
    }
}

export default UserList;

