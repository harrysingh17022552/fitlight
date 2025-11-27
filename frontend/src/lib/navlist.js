//0th and last index is reserved for logo and cart respectively
import { FaShoppingCart } from "react-icons/fa";

export const list = [
  {
    id: 1,
    name: "Products",
    path: "products",
    type: "navlist",
  },
  {
    id: 2,
    name: "About",
    path: "about",
    type: "navlist",
  },
  {
    id: 3,
    name: "Contact",
    path: "contact",
    type: "navlist",
  },
  {
    id: 4,
    name: "Cart",
    path: "cart",
    type: "icon",
    icon: FaShoppingCart,
  },
];
