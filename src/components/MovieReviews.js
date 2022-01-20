// Code MovieReviews Here
import React from 'react';

const Review = ({
    headline,
    byline,
    link,
    summary_short,
}) => {
    return (
        <div key={headline} className="review">
            <h2><a href={link.url}>{headline}</a></h2>
            <span className="author">{byline}</span>
            <p>- {summary_short}</p>
        </div>
    );
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};
export default MovieReviews