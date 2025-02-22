import { Category } from "../../../public/screens_config_data";
import Bar from "../Charts/Bar";

export const Page = ({ currentPage }: { currentPage: Category }) => {
  console.log("Page component, current page is ", currentPage);
  return (
    <div>
      <Bar />
    </div>
  );
};
