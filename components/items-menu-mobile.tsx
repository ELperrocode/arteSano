import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CategoryType } from "@/types/category";
import { useGetCategories } from "@/api/getCategories";

const ItemsMenuMobile = () => {
  const { result: categories, loading: isLoading, error } = useGetCategories();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col space-y-2">
          {categories.map((category:CategoryType) => (
            <a key={category.id} href={`/category/${category.slug}`} className="block">
              {category.nombreCategoria}
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;