'use client'

import React, { useState, useEffect } from 'react';

function TodoList() {
  return (
    <div>
      <h1>To-Do List ()</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={activity}
          onChange={}
          placeholder="Activity"
          required
        />
        <input
          type="number"
          value={price}
          onChange={}
          placeholder="Price"
          required
        />
        <select value={type} onChange={}>
        <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="dly">DIY</option>
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
            onChange={}
          />
          Booking Required
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={accessibility}
          onChange={}
        />
        <button type="submit">Add Activity</button>
      </form>
    </div>
  )
}

export default TodoList;