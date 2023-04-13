const ServiceCard = (props) => {
  const cardClasses =
    props.image + " mx-[.25rem] w-[25rem] h-[20rem] notebook:h-[15rem] bg-cover group overflow-hidden  ";

  return (
    <article className={cardClasses}>
      <div className="w-[10rem] group-hover:w-full ease-in-out  h-full group-hover:bg-black duration-300 flex items-end">
        <p className="group-hover:hidden  font-bold ml-[2rem]  notebook:ml-[1rem] py-[1rem] text-[1.8rem] text-white cursor-pointer">
          {props.title}
        </p>
        <p className="hidden group-hover:block  text-white font-semibold text-[1rem] notebook:text-[.8rem] big:text-[1rem] p-[2rem]">
          {props.description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
