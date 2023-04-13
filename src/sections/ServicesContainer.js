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
    <section id="services" className="px-[5rem] py-[3rem]">
      <div className="font-bold text-[3.5rem] pb-[3rem] text-center  ">our services</div>

      <article  className="flex flex-row items-center justify-center  "> 
        {servicesMap}
      </article>
    </section>
  );
};

export default ServicesContainer;
