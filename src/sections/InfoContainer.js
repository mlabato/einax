import DropdownInfo from "../ux/DropdownInfo";

const InfoContainer = () => {
  const dataArray = [
    {
      title: "federal tax credit",
      description:
        "Solar panels save homeowners a lot of money. When you install solar panels at home, you receive a 26% federal tax credit. We design solar panels systems that are in compliance with all federal reporting regulations in order to take full advantage of this tax program",
    },
    {
      title: "$0 down payment",
      description:
        " When you finance your solar panels, you might be eligible for a $0 down payment but will still have a monthly payment. The savings over your panels useful life are less than a direct purchase, but also significant in their own right. The best part? Your payments will end eventually, and your electric bill will be extremely reduced or eliminated.",
    },
    {
      title: "property value increase",
      description:
        "Property value Homes with solar power are sold faster and for higher prices, as they save money on bills and reduce environmental pollution",
    },
    {
      title: "save more on your utility bills",
      description:
        "Solar power offers protection from high energy rates and steadily rising electricity costs. Adding solar panels to your home is a long-term, low risk, high return way to invest your money. You get an initial tax-free annual return on investment from 30% to 40%. As utility rates increase, the annual return increases.",
    },
    {
      title: "environmental impact reduction",
      description:
        "No matter how small your solar panel system is, it has a significant environmental impact. When you get solar panels at home and generate electricity from clean, you are reducing fossil fuel consumption and the emission of harmful pollutants.",
    },
  ];

  const dataMap = dataArray.map((data, i) => {
    return <DropdownInfo title={data.title} description={data.description} />;
  });

  return (
    <section
      id="why-solar"
      className=" pt-[4rem] notebook:pt-[6rem]  "
    >

      <article className="px-[3rem] notebook:px-[6rem] big:px-[10rem] full:px-[12rem] flex flex-col notebook:flex-row justify-between items-start ">
      <div className="font-bold pb-[1.5rem] notebook:pb-0   text-[2rem] notebook:text-[3.5rem] full:text-[5rem] notebook:w-1/2 ">
        why go solar?
      </div>
      <div className="notebook:w-3/4 text-[1.1rem] notebook:ml-[4rem] flex flex-col ">
        {dataMap}
      </div>
      </article>


      <article className="bg-black mt-[1rem] desktop:mt-[2rem] full:mt-[3rem] p-[1.2rem] desktop:p-[2.5rem] full:p-[3rem]">
        <p className=" text-[1rem] notebook:text-[1.4rem] desktop:text-[1.6rem] full:text-[2.2rem] text-center font-bold pt-[2rem] mx-[.75rem] text-white  ">
          send us your electric bill and we'll get you a free budget{" "}
        </p>
        <div className=" my-[.5rem] notebook:my-[1rem] big:my-[1.5rem] hover:shadow-lg duration-300 text-[.8rem] notebook:text-[1.25rem] full:text-[2rem] mx-auto cursor-pointer p-[.25rem] notebook:p-[.75rem] bg-[#00F000] rounded-lg w-1/2 notebook:w-[25%] desktop:w-[20%] full:w-[20%] text-center font-bold ">
          <a href="mailto:xxx@hotmail.com?subject=Subject%20Line%20Text%20">
            contact us
          </a>
        </div>
      </article>
    </section>
  );
};

export default InfoContainer;
