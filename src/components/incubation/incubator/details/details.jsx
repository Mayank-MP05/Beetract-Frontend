import React from "react";
import "./details.style.css";
export default function Details() {
  const services = [
    "Assistance with business basics",
    "Networking activities",
    "Marketing assistance",
    "Accounting and financial management",
    "Specialized equipment",
    "High-speed internet access",
    "Access to venture capitalists, business angels, mentors and strategic partner linkages",
    "Help with raising bank finance, grants, seed and venture capital",
    "Shared administrative or office services",
    "Links to higher educational institution",
    "Comprehensive business training",
    "Presentation skills training",
    "Shadow advisory boards or mentors",
    "E-commerce assistance",
    "Human resource training",
  ];

  const DocsArr = ["Incubation_rules.pdf", "UGC_Guidelines_for_startups.pdf"];

  return (
    <div>
      <div className='d-flex'>
        <h4>Your Incubator Profile</h4>
        <button className='btn btn-outline-info ml-auto'>edit</button>
      </div>

      <hr />
      <div className='d-flex'>
        <div className='col'>
          <label className='titles'>Incubator Name</label>
          <p>{"Y Combinator"}</p>
        </div>
        <div className='col'>
          <img
            className='ic-logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png'
          />
          <div className='d-flex p-1'>
            <button className='btn btn-danger m-1'>Remove</button>
            <button className='btn btn-success m-1'>Update</button>
          </div>
        </div>
      </div>
      <hr />
      <label className='titles'>About us</label>
      <p>
        {
          "Y Combinator is an American seed money startup accelerator launched in March 2005. It has been used to launch over 2,000 companies, including Stripe, Airbnb, Cruise Automation, DoorDash, Coinbase, Instacart, Dropbox and Twitch. The combined valuation of the top YC companies was over US$155 billion as of October 2019."
        }
      </p>
      <hr />
      <label className='titles'>Servides Offered</label>
      <ul class='list-group'>
        {services.map((service) => (
          <li class='list-group-item'>{service}</li>
        ))}
      </ul>
      <hr />
      <label className='titles'>Important Documents</label>
      <ul class='list-group'>
        {DocsArr.map((doc) => (
          <li class='list-group-item d-flex'>
            {doc}{" "}
            <button className='btn btn-sm ml-auto btn-outline-success'>
              Download
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
