import React from 'react';

class UserSearch extends React.Component {
    constructor(props) {
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(e) {
        this.props.handleSearch(e.target.value);
    }

    render() {
        return (
        <div className="App">
            <label htmlFor="search"></label>
            <input id="search" type="textArea" name="search" placeholder="search here ..." onChange={this.searchHandler}/>
        </div>
        )
    }
}

export default UserSearch;
