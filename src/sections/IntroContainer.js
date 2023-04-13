const IntroContainer = () => {
  return (
    <section className="pt-[6rem]">
      <article className="bg-intro  h-[28rem] opacity-80">
        <div className="h-[30rem] w-1/2 bg-white opacity-90">
          <div className="p-[5rem] ">
            <p className="text-[4rem] font-bold"> power your home </p>
            <p className="text-[1.5rem] ">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>

            <div className="my-[1rem] mx-auto p-[.5rem] bg-[#00F000] rounded-lg w-1/4 text-center font-bold ">
              <a href="mailto:xxx@hotmail.com">contact us</a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default IntroContainer;
