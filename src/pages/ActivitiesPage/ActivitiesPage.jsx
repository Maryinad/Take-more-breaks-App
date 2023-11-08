import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import activityImage from '../../img/Activity.png';
import { Link } from 'react-router-dom';

export function ActivitiesPage() {
  const [activities, setActivities] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [doneActivites, setDoneActivites] = useState(false);

  const handleDoneActivites = () => {
    setDoneActivites(true);
  };

  async function fetchData() {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(
        `https://www.boredapi.com/api/activity?participants=1`
      );
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
