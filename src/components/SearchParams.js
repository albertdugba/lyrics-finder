import React, { Component } from "react";
import styled from "styled-components";

class SearchParams extends Component {
  state = {
    query: ""
  };

  handleInputChange = event => {
    let name = event.target.name;
    this.setState({ [name]: event.target.value }, () => {
      this.props.searchMoviesDB(this.state.query);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    const { query } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Please search for movies..."
            name="query"
            value={query}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </div>
    );
  }
}

const SearchForm = styled.form`
  max-width: 1000px;
  margin: 90px auto;

  input {
    width: 100%;
    padding: 0.55rem;
    font-size: 1.5rem;
    border: none;
    outline: none;
    border: 1px solid grey;
    border-radius: 9px;
  }
`;
export default SearchParams;
