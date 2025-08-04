import { data } from "../data.js";

const Skills = () => {
  const { skills } = data;
  return (
    <article className="w-full flex flex-col gap-4 border border-borderColor rounded-xl px-4 py-4 text-textColor">
      <h2 className="text-xl font-bold">Technical Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-wrap w-fit px-2 py-1 border border-borderColor rounded-full gap-2 items-center"
            >
              <p className="text-actionColor cursor-default">{skill.name}</p>
            </div>
          );
        })}
      </div>
      
    </article>
  );
};

export default Skills;
