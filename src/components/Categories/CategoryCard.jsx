const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white border-2 h-52 md:h-full rounded-xl md:rounded-none md:shadow- overflow-hidden hover:shadow-lg">
      <div className="flex justify-center p-4">
        <img
          src={category.imgUrl}
          alt={category.category}
          className="w-28 h-28 md:w-36 md:h-36 rounded-full object-contain border-2 border-[#d3e6e0] shadow-md transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-sm md:text-lg font-bold text-gray-800">{category.category}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
