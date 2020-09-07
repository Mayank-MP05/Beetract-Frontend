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
        <h4>Startup Application Form</h4>
        <button className='btn btn-outline-danger ml-auto mx-1'>Reset</button>
        <button className='btn btn-outline-success mx-1'>Save Changes</button>
      </div>

      <hr />
      <h4>Company Info</h4>
      <hr />
      <div className='d-flex'>
        <label className='titles'>Company name:</label>
        <input
          type='text'
          class='form-control'
          value={"Beetract Smart Workplaces"}
        />
      </div>

      <label className='titles'>Company url, if any:</label>
      <input type='text' class='form-control' value={"www.beetract.com"} />

      <div className='d-flex'>
        <label className='titles'>No Of Employees(if any)</label>
        <input type='number' class='form-control' value={12} />
      </div>
      <div className='d-flex'>
        <label className='titles'>Revenue (if any)</label>
        <input type='text' class='form-control' value={124544} />
      </div>

      <label className='titles'>Industry Category</label>
      <select className='custom-select'>
        <option value=''></option>
        <option value='Adtech'>Adtech</option>
        <option value='Aerospace'>Aerospace</option>
        <option value='Agriculture'>Agriculture</option>
        <option value='Analytics'>Analytics</option>
        <option value='Augmented Reality'>Augmented Reality</option>
        <option value='Biotech'>Biotech</option>
        <option value='Community'>Community</option>
        <option value='Construction'>Construction</option>
        <option value='Continuing Education'>Continuing Education</option>
        <option value='Crypto / Blockchain'>Crypto / Blockchain</option>
        <option value='Developer Tools'>Developer Tools</option>
        <option value='E-Sports'>E-Sports</option>
        <option value='K-12'>K-12</option>
        <option value='Energy'>Energy</option>
        <option value='Entertainment'>Entertainment</option>
        <option value='Financial Services'>Financial Services</option>
        <option value='Fitness / Wellness'>Fitness / Wellness</option>
        <option value='Food/Beverage'>Food/Beverage</option>
        <option value='Freight'>Freight</option>
        <option value='Gaming'>Gaming</option>
        <option value='Government'>Government</option>
        <option value='Hard Tech'>Hard Tech</option>
        <option value='Hardware'>Hardware</option>
        <option value='Healthcare'>Healthcare</option>
        <option value='Insurance'>Insurance</option>
        <option value='Language Learning'>Language Learning</option>
        <option value='Lending / Loan Management'>
          Lending / Loan Management
        </option>
        <option value='Marketplace'>Marketplace</option>
        <option value='Media'>Media</option>
        <option value='Public Transportation'>Public Transportation</option>
        <option value='Retail'>Retail</option>
        <option value='Recruiting/Talent'>Recruiting/Talent</option>
        <option value='Robotics'>Robotics</option>
        <option value='Security'>Security</option>
        <option value='Sourcing / Recruiting'>Sourcing / Recruiting</option>
        <option value='Transportation'>Transportation</option>
        <option value='Travel/Tourism'>Travel/Tourism</option>
        <option value='Virtual Reality'>Virtual Reality</option>
        <option value='Other'>Other</option>
      </select>
      <label className='titles'>
        Where do you live now, and where would the company be based after YC?
        (List as City A, Country A / City B, Country B.)
      </label>
      <br />
      <input type='text' class='form-control' value={"Chennai"} />

      <hr />

      <label className='titles'>
        What is your company going to make? Please describe your product and
        what it does or will do.
      </label>
      <textarea class='form-control' rows='5' aria-label='With textarea'>
        {
          "Stripe is an American financial services and software as a service company headquartered in San Francisco, California, United States. The company primarily offers payment processing software and application programming interfaces for e-commerce websites and mobile applications. "
        }
      </textarea>
      <hr />

      <h4>Founders Info</h4>
      <hr />
      <div className='d-flex'>
        <label className='titles'>Active Founders Email :</label>
        <input
          type='text'
          class='form-control'
          value={"smartpeople@beettract.com"}
        />
      </div>
      <label className='titles'>Founders LinkedIn</label>
      <input type='text' class='form-control' value={"linkedin.com/founder"} />

      <label className='titles'>Phone No.</label>
      <input type='text' class='form-control' value={"9865622626262"} />

      <hr />
    </div>
  );
}
