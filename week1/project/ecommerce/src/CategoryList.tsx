import { FC } from "react";

type CategoryListProps = {
  allCategories: string[];
  changeCategory: (category: string) => void;
};

export const CategoryList: FC<CategoryListProps> = ({
  allCategories,
  changeCategory,
}) => {
  return (
    <div className="categories">
      {allCategories?.map((category: string, index) => {
        return (
          <button key={index} onClick={() => changeCategory(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};
