'use client'

import React, { useState, useEffect } from 'react';

function TodoList() {
  // init some states
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState('');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('education');
  const [bookingRequired, setBookingRequired] = useState(false);
  const [accessibility, setAccessibility] = useState(0.5);

  // load activities from storage
  useEffect(() => {
    const savedActivities = JSON.parse(localStorage.getItem('activities'));
    if (savedActivities) {
      setActivities(savedActivities);
    }
  }, []);

  // save activities to storage
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities])

  // Submit button handler
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent HTTP POST
    const newActivity = {
      activity,
      price,
      type,
      bookingRequired,
      accessibility,
    }
    // reset form to initial values
    setActivities([...activities, newActivity]);
    setActivity('');
    setPrice(0);
    setType('education');
    setBookingRequired(false);
    setAccessibility(0.5);
  };

  const handleDelete = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
  }

  return (
    <div>
      <h1>To-Do List ({activities.length})</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Activity"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          placeholder="Price"
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={bookingRequired}
            onChange={(e) => setBookingRequired(e.target.checked)}
          />
          Booking Required
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={accessibility}
          onChange={(e) => setAccessibility(parseFloat(e.target.value))}
        />
        <button className="btn btn-primary" type="submit">Add Activity</button>
      </form>
      <ul>
        { activities.map((item, index) => (
          <li key={index}>
            {item.activity} | RM{item.price} | {item.type} | {item.bookingRequired ? 'Booking Required' : 'No Booking'} | Accessibility: {item.accessibility}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;