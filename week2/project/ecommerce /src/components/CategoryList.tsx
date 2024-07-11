import { FC } from "react";
import { CategoryListProps } from "../types";

export const CategoryList: FC<CategoryListProps> = ({
  allCategories,
  changeCategory,
  activeButtonId,
  loadingCategory,
}) => {
  return (
    <div className="categories">
      <button
        onClick={() => changeCategory("all")}
        style={{
          border:
            activeButtonId === undefined ? "2px solid blue" : "1px solid gray",
          backgroundColor: activeButtonId === undefined ? "lightblue" : "white",
        }}
      >
        all
      </button>
      {loadingCategory ? (
        <div>Categories Loading...</div>
      ) : (
        allCategories?.map((category: string, index) => {
          const isActive = activeButtonId === index;
          return (
            <button
              id={index.toString()}
              key={index}
              onClick={() => changeCategory(category, index)}
              style={{
                border: isActive ? "2px solid blue" : "1px solid gray",
                backgroundColor: isActive ? "lightblue" : "white",
              }}
            >
              {category}
            </button>
          );
        })
      )}
    </div>
  );
};
