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
        "Property value Homes with solar power are sold faster and for higher prices, as they save money on bills and reduce environmentalpollution",
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
    return (
      <div className="py-[.5rem] border-black border-b-2 mb-[2rem]">
        <p className="font-bold text-[1rem] notebook:text-[1.2rem]">{data.title}</p>
        <p className="text-[.7rem] notebook:text-[1.1rem] ">{data.description}</p>
      </div>
    );
  });

  return (
    <article
      id="why-solar"
      className="px-[3rem] notebook:px-[8rem] pt-[4rem] flex flex-col notebook:flex-row justify-between items-start  "
    >
      <div className="font-bold  text-[2rem] notebook:text-[3.5rem] notebook:w-1/2 ">why go solar?</div>
      <div className="notebook:w-3/4 text-[1.1rem] notebook:ml-[8rem] ">
        {dataMap}
      </div>
    </article>
  );
};

export default InfoContainer;