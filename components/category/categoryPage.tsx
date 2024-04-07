import Category from "../home/category";
 
function CategoryPage({ cat}: { cat: "retail" | "textile" }) {

  return (
    <div className="flex flex-col items-center justify-center">
      <Category cat={cat} />
    </div>
  );
}

export default CategoryPage;
