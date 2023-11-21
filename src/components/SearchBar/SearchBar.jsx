import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchSpan,
  Searchbar
} from './SearchBar.styled';

class SearchBar extends Component {
  state = {
    searchName: '', 
    inputValue: '',
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault(); 
    const searchQuery = event.target.elements.searchName.value.trim(); 
    this.props.onSubmit(searchQuery); 
    event.target.reset(); 
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          
          <SearchButton>
            <BsSearch />
            <SearchSpan>Search</SearchSpan>
          </SearchButton>
          <SearchInput
            name="searchName"
            type="text"
            id="search"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
