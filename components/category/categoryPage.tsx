import Retails from "../product/retailsProduct/retails";
import Textile from "../product/textileProduct/textile";

function CategoryPage({ cat }: { cat: "retail" | "textile" }) {
  switch (cat) {
    case "retail":
      return (
        <div className="">
          <Retails />
        </div>
      );
    case "textile":
      return (
        <div className="">
          <Textile />
        </div>
      );
    default:
      return null;
  }
}

export default CategoryPage;
