const ServiceCard = (props) => {
  const cardClasses =
    props.image + " mx-[.25rem] w-[25rem] full:h-[30rem] h-[15rem] notebook:h-[20rem] bg-cover group overflow-hidden  ";

  return (
    <article className={cardClasses}>
      <div className="w-[10rem] group-hover:w-full ease-in-out  h-full group-hover:bg-black duration-300 flex items-end">
        <p className="group-hover:hidden  font-bold  ml-[2rem] notebook:ml-[1rem] py-[1rem] text-[1.8rem] full:text-[2.5rem] text-white cursor-pointer">
          {props.title}
        </p>
        <p className="hidden group-hover:block  text-white font-semibold text-[1rem] notebook:text-[.9rem] big:text-[1rem] full:text-[1.3rem] p-[2rem]">
          {props.description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
