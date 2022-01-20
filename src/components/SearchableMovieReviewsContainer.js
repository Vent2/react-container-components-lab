import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Ag4xU0PbG1xwb1vZqKbYxKA9MDBe2Ebv';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    handleSearchInputChange = event => {
        this.setState({
            search: event.target.value
        });
    }

    handleSearchSubmit = event => {
        event.preventDefault();

        fetch(URL.concat(this.state.searchTerm))
            .then(res => res.json())
            .then(data => {
                this.setState({
                    reviews: data.results
                });
            });
    };
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSearchSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input id="search-input" type="text" onChange={this.handleSearchInputChange} />
                    <button type="submit">Submit</button>
                </form>
                {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}