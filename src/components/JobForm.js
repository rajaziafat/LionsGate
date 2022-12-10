import React from "react";
import Select from "./Select";

function JobForm() {
  return (
    <form className="">
      <div className="space-y-3 mb-5">
        <input type="text" className="form-input" placeholder="First Name" />
        <input type="text" className="form-input" placeholder="Last Name" />
        <input type="email" className="form-input" placeholder="Email" />
        <Select
          placeholder="Please select your area of interest"
          options={[{ title: "awewe" }]}
        />
        <Select
          placeholder="Please select location of interest"
          options={[{ title: "awewe" }]}
        />
      </div>

      <button type="submit" className="rounded-btn w-1/2 mx-auto">
        SUMBIT
      </button>
    </form>
  );
}

export default JobForm;
