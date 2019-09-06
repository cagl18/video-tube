import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  };
  // componentDidUpdate() {
  //   console.log(this.state.term);
  // }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term); //triggering the API query request
  };

  render() {
    return (
      <div className='search-bar ui segment '>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor='search'>Video Search</label>
            <input
              type='text'
              name='search'
              placeholder='Type to Search'
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
