require('./SearchBar.less');
import React, {Component} from 'react';

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.searchTextChanged = this.searchTextChanged.bind(this);
    this.state = {searchText: this.props.searchText};
  }

  searchTextChanged(event){
    this.setState(
      {searchText: event.target.value},
      this.props.searchTextEntered(event.target.value)
    );
  }

  render(){
    return(
      <div className="searchBar">
        <input
              className="form-control"
              type="text"
              value={this.state.searchText}
              placeholder="Search..."
              onChange={this.searchTextChanged.bind(this)}
              ref="searchText"
        />
      </div>
    );
  }
}
