import React, { useState } from "react";
/**
 * 1. Details Page
 * 2. All apllication page
 * 3. Shortlisted
 * 4. Selected
 * 5. Rejected
 * 6. Edit Profile
 */

import Details from "./details/details";
import EditDetails from "./details/edit-details";
import IncubationManager from "./manager/Incubation-manager";

export default function IncubatorDashboard() {
  const [tab, settab] = useState(1);

  const tabbedview = (index) => {
    switch (index) {
      case 1:
        return <Details />;
      case 2:
        return <IncubationManager option='all' />;
      case 3:
        return <IncubationManager option='shortlisted' />;
      case 4:
        return <IncubationManager option='selected' />;
      case 5:
        return <IncubationManager option='rejected' />;
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
          Details Page
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
          All Applications
        </button>
        <button
          className='btn btn-outline-primary w-75  m-2'
          onClick={() => {
            settab(3);
          }}>
          Shortlisted
        </button>
        <button
          className='btn btn-outline-primary w-75  m-2'
          onClick={() => {
            settab(4);
          }}>
          Selected
        </button>
        <button
          className='btn btn-outline-primary w-75  m-2'
          onClick={() => {
            settab(5);
          }}>
          Rejected
        </button>
      </div>
      <div className='col-md-9'>{tabbedview(tab)}</div>
    </div>
  );
}
