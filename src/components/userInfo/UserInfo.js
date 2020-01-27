import React from 'react';
import './userInfo.css';

class UserInfo extends React.Component {
	constructor(props) {
		super(props);
		this.handleEditBtn = this.handleEditBtn.bind(this);
	}
	handleEditBtn(e) {
		this.props.editUserDetails(this.props.user, e.target.name);
	}

    render() {
		var {user} = this.props;
		return (
			<article className="user-info">
				<span style={{fontSize:'14px'}}>{user.name}</span>
				<p style={{fontSize:'12px'}}> Address: {user.address.street} {user.address.suite}</p>
				<p style={{fontSize:'12px'}}>{user.address.city}</p>
				<p style={{fontSize:'12px'}}>{user.address.zipcode}</p>

				<button name="edit" onClick={this.handleEditBtn}>Edit</button>
				<button name="location" onClick={this.handleEditBtn}>Location</button>
			</article>	
		)
    }
}

export default UserInfo;
