const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white border-2 h-full hover:border-green-600  rounded-3xl overflow-hidden transition-transform duration-200 transform hover:scale-105 md:hover:scale-100">
      <img
        src={category.imgUrl}
        alt={category.category}
        className="w-full h-48 object-contain p-4"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center">
          {category.category}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
