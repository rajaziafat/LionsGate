import Select from "components/Select";
import React from "react";

function Form() {
  return (
    <form className="w-full max-w-[240px] lg:max-w-[300px] xl:max-w-[345px] mx-auto">
      <div className="space-y-3 mb-5">
        <input type="text" className="form-input" placeholder="Name" />
        <input type="email" className="form-input" placeholder="Email" />
        <input
          type="number"
          className="form-input"
          placeholder="Mobile Phone Number"
        />
        <Select
          placeholder="Which scenario best describes your case?"
          options={[{ title: "awewe" }]}
        />
      </div>

      <button type="submit" className="rounded-btn w-1/2 mx-auto">
        SUMBIT
      </button>
    </form>
  );
}

export default Form;
