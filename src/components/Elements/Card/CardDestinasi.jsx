export const CardDestinasi = ({ image, destination, location, description }) => {
  return (
    <div className="max-w-sm rounded-lg bg-white p-6 shadow-xl">
      <img src={image} alt="Destinasi Populer" />
      <div className="text-left">
        <div className="mb-4 flex flex-row">
          <p className="font-sans text-sm font-normal text-greyDestimate-100">{location}</p>
        </div>
        <h3 className="mb-2 font-sans text-xl font-bold text-primary-100">{destination}</h3>
        <p className="whitespace-pre-line text-justify font-sans text-sm font-normal text-[#070707]">
          {description}
        </p>
      </div>
    </div>
  );
};
