const Introduction = () => {
  return (
    <figure className="flex flex-col w-full max-sm:w-full border border-borderColor rounded-xl px-4 py-4">
      <article>
        <div className="display-flex mb-4  h-fit">
          <h1 className="text-2xl font-bold text-[#fff]">
            Hii I'm Abhishek Udata👋
          </h1>
          <h3 className="text-xl font-semibold text-textColor">
            Software Developer
          </h3>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 text-[#e3e3e3]">
          <p className="font-semibold">
            - I'm a software developer passionate about creating clean, efficient applications that make a real difference and feel great to use.
          </p>
          <p className="font-semibold">
            - currently seeking opportunities to contribute and grow with a forward-thinking team.
          </p>
          <p className="font-semibold">
            - I have hands on expeirence in developing web applications,android applications and
            windows applications using asp .net(MVC), Java and C++.
          </p>
        </div>
      </article>
    </figure>
  );
};

export default Introduction;
