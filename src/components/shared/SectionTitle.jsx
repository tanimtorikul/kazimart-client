const SectionTitle = ({ heading, subHeading }) => {
    return (
      <div className="text-center my-8">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-2">
          {heading}
        </h2>
        <p className="text-sm text-gray-600">{subHeading}</p>
      </div>
    );
  };
  
  export default SectionTitle;
  