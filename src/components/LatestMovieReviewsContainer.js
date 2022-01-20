import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Ag4xU0PbG1xwb1vZqKbYxKA9MDBe2Ebv';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();

        this.state = {
            reviews: []
        };
    }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    reviews: data.results
                });

                console.log(data.results);
            });
    }
    render() {
        return (
            <div className="latest-movie-reviews">
               <h2>The Latest Reviews -</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}

