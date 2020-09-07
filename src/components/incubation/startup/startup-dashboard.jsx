import React, { useState } from "react";
/**
 * 1. Details Page
 * 2. All Incubators page
 * 3. My Applications
 * 6. Edit my Profile
 */

import Details from "./details/details";
import EditDetails from "./details/edit-details";
import IncubationManager from "./manager/Incubation-manager";

export default function StartupDashboard() {
  const [tab, settab] = useState(1);

  const tabbedview = (index) => {
    switch (index) {
      case 1:
        return <Details />;
      case 2:
        return <IncubationManager option='all' />;
      case 3:
        return <IncubationManager option='my' />;
      case 6:
        return <EditDetails />;
      default:
        return <Details />;
    }
  };

  return (
    <div className='d-flex flex-row'>
      <div className='col-md-3 d-flex flex-column justify-content-start'>
        <button
          className='btn btn-outline-primary w-75  m-2'
          onClick={() => {
            settab(1);
          }}>
          Startup Profile
        </button>
        <button
          className='btn btn-outline-primary w-75  m-2'
          onClick={() => {
            settab(6);
          }}>
          Edit Profile
        </button>
        <button
          className='btn btn-outline-primary w-75  m-2'
          onClick={() => {
            settab(2);
          }}>
          Explore Incubators
        </button>
        <button
          className='btn btn-outline-primary w-75  m-2'
          onClick={() => {
            settab(3);
          }}>
          My Applications
        </button>
      </div>
      <div className='col-md-9'>{tabbedview(tab)}</div>
    </div>
  );
}
