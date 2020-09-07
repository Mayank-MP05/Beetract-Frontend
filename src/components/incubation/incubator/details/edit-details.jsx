import React from "react";
import "./details.style.css";
export default function EditDetails() {
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
        <h4>Edit Your Incubator Profile</h4>
        <button className='btn btn-outline-danger ml-auto mx-1'>Reset</button>
        <button className='btn btn-outline-success mx-1'>Save Changes</button>
      </div>

      <hr />
      <div className='d-flex'>
        <div className='col'>
          <label className='titles'>Incubator Name</label>
          <input type='text' class='form-control' value={"Y Combinator"} />
        </div>
        <div className='col'>
          <img
            className='ic-logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png'
          />
          <div className='d-flex p-1'>
            <button className='btn btn-outline-danger m-1'>Remove</button>
            <button className='btn btn-outline-success m-1'>Update</button>
          </div>
        </div>
      </div>
      <hr />
      <label className='titles'>About us</label>
      <textarea class='form-control' rows='5' aria-label='With textarea'>
        {
          "Y Combinator is an American seed money startup accelerator launched in March 2005. It has been used to launch over 2,000 companies, including Stripe, Airbnb, Cruise Automation, DoorDash, Coinbase, Instacart, Dropbox and Twitch. The combined valuation of the top YC companies was over US$155 billion as of October 2019."
        }
      </textarea>
      <hr />
      <label className='titles'>Servides Offered</label>
      <ul class='list-group'>
        {services.map((service) => (
          <div class='input-group m-2'>
            <div class='input-group-prepend mx-2'>
              <div class='input-group-text'>
                <input
                  type='checkbox'
                  aria-label='Checkbox for following text input'
                />
              </div>
            </div>
            {service}
          </div>
        ))}
      </ul>
      <hr />
      <div className='d-flex flex-row'>
        <label className='titles'>Important Documents</label>
        <button className='btn btn-outline-success ml-auto'>Upload</button>
      </div>
      <hr />
      <ul class='list-group'>
        {DocsArr.map((doc) => (
          <li class='list-group-item d-flex'>
            {doc}
            <button className='btn btn-sm ml-auto btn-outline-success'>
              Download
            </button>
            <button className='btn btn-sm btn-outline-danger mx-2'>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
