import React from 'react';

const RightBrokerForm = () => {
  return (
    <div className="rightBroker_wrapper ">
      <div className="top mb-4">
        <div className="heading fw-700 mb-2 fs-18">Find the right broker</div>
        <div className="tagline text-muted fs-14">
          Let us help you find the right broker for your specific requirements.
        </div>
      </div>
      <form className="d-flex flex-column gap-3" style={{}}>
        <div className="d-flex flex-column flex-lg-row  gap-3">
          <input className="rounded p-2 border border-2 fs-13 flex-grow-1" type="text" placeholder="Name" />
          <input className="rounded p-2 border border-2 fs-13 flex-grow-1" type="email" placeholder="Email Address" />
          <input className="rounded p-2 border border-2 fs-13 flex-grow-1" type="number" placeholder="Mobile No." />
        </div>
        <div className="text-end">
          <button className="border-0 px-4 py-2 rounded bg-primary text-white" type="submmit">
            Submit
          </button>
        </div>
      </form>
      <style>
        {`
          form input {
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

export default RightBrokerForm;
