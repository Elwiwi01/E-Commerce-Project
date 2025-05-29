import React, { useState } from 'react';
import './DescriptionBox.css';

const initialReviews = [
  { id: 1, user: 'Sarah.B', rating: 5, comment: 'Absolutely love this product!' },
  { id: 2, user: 'Yousra', rating: 4, comment: 'Very good quality, would recommend.' },
  { id: 3, user: 'Asma.H', rating: 5, comment: 'Exceeded my expectations!' },
];

const DescriptionBox = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');
  const [reviews, setReviews] = useState(initialReviews);

  const [formData, setFormData] = useState({
    user: '',
    rating: '',
    comment: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { user, rating, comment } = formData;

    if (!user.trim() || !rating || !comment.trim()) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');
    const newReview = {
      id: reviews.length + 1,
      user: user.trim(),
      rating: Number(rating),
      comment: comment.trim(),
    };

    setReviews(prev => [newReview, ...prev]);
    setFormData({ user: '', rating: '', comment: '' });
  };

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div
          className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : 'fade'}`}
          onClick={() => setActiveTab('description')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setActiveTab('description')}
        >
          Description
        </div>
        <div
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : 'fade'}`}
          onClick={() => setActiveTab('reviews')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setActiveTab('reviews')}
        >
          Reviews ({reviews.length})
        </div>
      </div>

      <div className="descriptionbox-content">
        {activeTab === 'description' && (
          <div className="descriptionbox-description">
            <p>{product.description}</p>
            <p>
              Crafted from high-grade stainless steel, this piece offers excellent durability and
              tarnish resistance. It's designed to maintain its shine and structure over time,
              making it a reliable and stylish addition to your collection.
            </p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="descriptionbox-reviews">
            {reviews.length === 0 ? (
              <p>No reviews yet.</p>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <strong>{review.user}</strong> — <em>Rating: {review.rating} / 5</em>
                  <p>{review.comment}</p>
                </div>
              ))
            )}

            <hr className="review-divider" />

            <h3>Leave a Review</h3>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="review-form">
              <label>
                Name:
                <input
                  type="text"
                  name="user"
                  value={formData.user}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Rating:
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select rating</option>
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </label>

              <label>
                Comment:
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows={4}
                  required
                />
              </label>

              <button type="submit" className="submit-button">Submit Review</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;