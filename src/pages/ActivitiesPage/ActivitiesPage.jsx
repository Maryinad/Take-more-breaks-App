import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import activityImage from '../../img/Activity.png';
import { Link } from 'react-router-dom';

export function ActivitiesPage(props) {
  const [activities, setActivities] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchData() {
    setLoading(true);
    setError('');
    let response;
    try {
      if (props.multi === 'true') {
        response = await axios.get(
          `https://www.boredapi.com/api/activity?participants=2`
        );
      } else {
        response = await axios.get(
          `https://www.boredapi.com/api/activity?participants=1`
        );
      }
      setActivities(response.data);
    } catch (error) {
      alert('Ooops, something went wrong');
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2>Exercise of the day</h2>
      <div>
        <p>{activities.activity}</p>
        <img src={activityImage} alt="Aktivity" width="200px" />
        <p>{activities.link}</p>
        <button onClick={fetchData}>Show another activity</button>
        <Link to="/done">
          <button>Done</button>
        </Link>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}
