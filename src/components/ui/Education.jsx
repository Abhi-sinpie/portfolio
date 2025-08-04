import React from "react";

const Education = ({ institution, degree, year, percentage }) => {
  return (
    <article className="px-4 py-4 text-textColor text-start border border-borderColor rounded-xl">
      <h2 className="text-[15px]">{institution}</h2>
      <p className="text-[12px]">{year}</p>
      <h3 className="text-[15px]">{degree}</h3>
      <p className="text-[12px] font-bold">{percentage}</p>
    </article>
  );
};

export default Education;
