import ServiceCard from "../ux/ServiceCard";

const ServicesContainer = () => {
  const servicesArray = [
    {
      service: "residential",
      description:
        "start converting the sun's energy into usable electricity for your home and make a major investment towards clean energy",
      img: 'bg-residential',
    },
    {
      service: "commercial",
      description:
        "besides great savings, investing in solar panels for your building will show your clients you're interested in producing clean energy and reducing your carbon footprint.",
      img: 'bg-commercial',
    },
    {
      service: "high end residential",
      description:
        "switch to solar with beautifully engineered systems. Choose solar panels that are suitable for Florida's conditions, made with the most efficient materials.",
      img: "bg-highend",
    },
    {
      service: "custom",
      description:
        "the form of your solar system is as important as its function. We model out the exact size to best fit your energy needs and make a beautiful system for your property.",
      img: 'bg-custom',
    },
  ];

  const servicesMap = servicesArray.map((service, i) =>  {
    return(
        <ServiceCard title={service.service} description={service.description} image={service.img} key={i} />
    )
  })

  return (
    <section id="services" className="px-[5rem] big:px-[10rem] full:px-[12rem]  pt-[4rem] notebook:pt-[6rem]">
      <div className="font-bold pb-[1.5rem] notebook:pb-0   text-[2rem] notebook:text-[3.5rem] full:text-[5rem] notebook:w-1/2   ">our services</div>

      <article  className="flex flex-col notebook:flex-row items-center justify-center  "> 
        {servicesMap}
      </article>
    </section>
  );
};

export default ServicesContainer;
