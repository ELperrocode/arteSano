import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col space-y-2">
          <a href="/category/slippers" className="block">
            Slippers
          </a>
          <a href="/category/mugs" className="block">
            Mugs
          </a>
          <a href="/category/shirts" className="block">
            Shirts
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default ItemsMenuMobile;
