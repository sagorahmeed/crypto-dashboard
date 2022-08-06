import Image from "next/image";

const UiCard = ({ title, parcentage, desc, chartUp, cardImg, customStyle }) => {
  return (
    <div>
      <div className="bg-white drop-shadow-md rounded-[4px] text-center relative p-4 pt-0 2xl:mt-0 xl:mt-0 lg:mt-12  md:mt-12 sm:mt-12 mt-20">
        <div style={{ transform: "translateY(-40px)" }}>
          <Image width="80" height="80" src={cardImg} alt="card img" />
        </div>
        <h1 className="-mt-[41px]">{title}</h1>
        <div className="flex items-center justify-center mt-3">
          <Image
            className=""
            width="20"
            height="20"
            src={chartUp}
            alt="card img"
          />
          <p className={`${customStyle ? "text-red" : "text-[#68cf29]"}  mx-2`}>
            {parcentage}
          </p>
          <p className="capitalize font-semibold">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default UiCard;
