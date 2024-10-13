

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white border-2 hover:border-green-600  rounded-3xl overflow-hidden transition-transform duration-200 transform hover:scale-105">
      <img
        src={category.imgUrl}
        alt={category.category}
        className="w-full h-48 object-cover"
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
