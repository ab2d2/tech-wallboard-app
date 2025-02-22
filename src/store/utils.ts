import { ScreensConfigData } from "../../public/screens_config_data";

export type FlattenedCategoryConfig = {
  levelOneCategoryName: string;
  levelTwoCategoryName: string;
  summaryComponent: string;
  detailsComponent: string | null;
  dataSourceFilename: string;
};

export const flattenCategoriesConfigData = (
  configData: ScreensConfigData
): FlattenedCategoryConfig[] => {
  return configData.Categories.flatMap((category) =>
    category.items.map((subcategory) => ({
      levelOneCategoryName: category.name,
      levelTwoCategoryName: subcategory.title,
      summaryComponent: subcategory.summaryComponent,
      detailsComponent: subcategory.detailsComponent,
      dataSourceFilename: subcategory.dataSourceFilename,
    }))
  );
};
