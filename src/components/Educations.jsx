import Education from "./ui/Education";

import { data } from "../data.js";

const Educations = () => {
  const { education } = data;
  return (
    <section className="flex flex-col gap-2 w-full py-4 px-4 border border-borderColor rounded-xl text-textColor">
      <h1 className="text-2xl font-bold">Education</h1>
      {education.map((edu, index) => (
        <figure key={index} className="mb-6">
          <Education
            institution={edu.institution}
            degree={edu.degree}
            year={edu.year}
            percentage={edu.percentage}
          />
        </figure>
      ))}
    </section>
  );
};

export default Educations;
