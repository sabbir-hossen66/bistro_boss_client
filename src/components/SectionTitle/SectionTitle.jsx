

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-3/12 text-center mx-auto my-6 font-semibold uppercase ">
      <p className="text-yellow-600 ">---{subHeading}---</p>
      <p className="border-y-4 text-2xl">{heading}</p>
    </div>
  );
};

export default SectionTitle;