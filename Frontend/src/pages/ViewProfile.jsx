import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import userpic from "../assets/userpic.jpeg";
import axios from 'axios';

const ViewProfile = () => {
  const location = useLocation();
  const { profile } = location.state || {};

  const [myReview, setMyReview] = useState(null);
  const [rating, setRating] = useState('');
  const [taskprovider, setTaskProvider] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (profile) {
      axios.get(`http://localhost:5000/api/reviews/${profile._id}`)
        .then(res => {
          setMyReview(res.data.data); // Assuming backend sends back an array of reviews
        })
        .catch(err => {
          console.error("Error fetching reviews:", err);
        });

      axios.get('http://localhost:5000/myprofile', {
        headers: {
          'x-token': localStorage.getItem('token')
        }
      })
        .then(res => {
          setTaskProvider(res.data.fullname); // Assuming backend sends back user's full name
        })
        .catch(err => {
          console.error("Error fetching task provider:", err);
        });
    }
  }, [profile]);

  if (!profile) {
    return <div>No profile data found.</div>;
  }

  function handleBack(event) {
    event.preventDefault();
    navigate(-1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post(`http://localhost:5000/api/addreview`, {
      taskprovider: taskprovider,
      taskworker: profile._id,
      rating: rating
    }, {
      headers: {
        'x-token': localStorage.getItem('token')
      }
    })
      .then(res => {
        setMyReview([...myReview, res.data.review]); // Assuming backend sends back the new review object
        setRating('');
      })
      .catch(err => {
        console.error("Error submitting review:", err);
      });
  }

  return (
    <div className="text-white h-full bg-gray-900 flex w-1/2 m-auto flex-col gap-y-10 justify-center items-center">
      <button onClick={handleBack} className='text-black px-4 py-1 bg-blue-100'>
        <i className="fas fa-arrow-left"></i> Back to Profiles
      </button>
      <div className="text-4xl">
        <h1>{profile.fullname}'s Profile</h1>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <div>
          <img
            src={userpic}
            alt="user"
            className="object-cover w-[120px] h-[120px] rounded-full"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-0.75">
          <h1><b>Full Name:</b> {profile.fullname}</h1>
          <h1><b>Email:</b> {profile.email}</h1>
          <h1><b>Mobile:</b> {profile.mobile}</h1>
          <h1><b>Country:</b> India</h1>
          <h4 className="font-semibold mb-1 mt-4 text-2xl text-blue-300">Skills</h4>
          <ul className="list-disc pl-4 mt-2">
            {profile.skills.split(",").map((skill, index) => (
              <li key={index} className="text-lg text-pink-400">{skill}</li>
            ))}
          </ul>
          <button className="bg-blue-500 py-1 px-3 rounded mt-4">
            Edit Profile
          </button>
        </div>
      </div>

      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-blue-100 font-semibold mb-2'>Ratings</h1>
        {myReview ? (
          myReview.map(review => (
            <div key={review._id} className='mb-4'>
              <h4>Rated by: {review.taskprovider}</h4> {/* Display who rated */}
              <h2>Rating: {review.rating}/5</h2> {/* Display rating */}
            </div>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md">
        <h2 className="text-xl mb-4">Submit a Rating</h2>
        <div className="flex flex-col mb-4 w-full">
          <label className="mb-2" htmlFor="rating">Rating (1-5):</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="px-2 py-1 rounded text-black font-semibold"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 py-1 px-3 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ViewProfile;
