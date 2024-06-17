export type CategoryListProps = {
  allCategories: string[];
  changeCategory: (category: string, index?: number) => void;
  activeButtonId: number | undefined;
};
