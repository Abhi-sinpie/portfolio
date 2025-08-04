import React from "react";

const Certificate = ({ name, link }) => {
  return (
    <figure className="flex justify-between items-center px-4 text-center py-2 border border-borderColor rounded-xl">
      <h2 className="text-textColor font-semibold cursor-default">
        {name}
      </h2>
      <a
        target="_blank"
        href={link}
        className="cursor-pointer text-textColor border border-borderColor px-4 py-2 rounded-xl hover:bg-secondaryColor hover:text-textSecond transition-all"
      >
        View Certification
      </a>
    </figure>
  );
};

export default Certificate;
