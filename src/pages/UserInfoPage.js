import React, {Component} from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import UserList from '../components/aside/UserList';
import UserDetails from '../components/section/UserDetails';
const axios = require('axios');

class UserInfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            filteredData: [],
            user: null,
            eventName: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.editUserDetails = this.editUserDetails.bind(this);
    }
    async componentDidMount() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });

        this.setState({
            userData: response.data,
            filteredData: response.data
        })
    }
    handleSearch(searchWord) {
        let filteredData = this.state.userData.filter( element => {
           return element.name.indexOf(searchWord) >= 0;
        });
        this.setState({filteredData});
    }
    editUserDetails(user, eventName) {
        this.setState({user: user, eventName: eventName});
    }
    render() {
        return (
            <div className="container">
                <Header />
                <UserList userList={this.state.filteredData} handleSearch={this.handleSearch} editUserDetails={this.editUserDetails}/>
                {
                    this.state.user ? (
                        <UserDetails userData={this.state.user} eventName={this.state.eventName}/>    
                    ) : (<div className="user-details"></div>)
                }
                <Footer />
            </div>
        );
    }
  
}

export default UserInfoPage;