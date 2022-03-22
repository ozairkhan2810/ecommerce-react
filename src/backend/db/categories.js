import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "ball",
    description: "Duke, Kookaburra & More...",
    categoryImg: "../assets/category/cricket-ball.png",
  },
  {
    _id: uuid(),
    categoryName: "bat",
    description: "SG, English Willow & More...",
    categoryImg: "../../assets/category/cricket-bat.png",
  },
  {
    _id: uuid(),
    categoryName: "cap",
    description: "SG, MRF & More...",
    categoryImg: "../../assets/category/cap-merchandise.png",
  },
  {
    _id: uuid(),
    categoryName: "jersey",
    description: "Masuri, Shrey & More...",
    categoryImg: "../../assets/category/man-tshirt.png",
  },
  {
    _id: uuid(),
    categoryName: "helmet",
    description: "RCB, CSK, MI, SRH & More..",
    categoryImg: "../../assets/category/helmet.png",
  },
];
