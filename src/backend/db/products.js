import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    productName: "2 PIECE LEATHER BALL",
    price: "1000",
    productImg: "./assets/products/ball1.webp",
    rating: 1,
    categoryName: "ball",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "4 PIECE LEATHER BALL",
    price: "2000",
    productImg: "./assets/products/ball2.webp",
    rating: 2,
    categoryName: "ball",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "CRICKET BALL PINK",
    price: "3000",
    productImg: "./assets/products/ball3.webp",
    rating: 3,
    categoryName: "ball",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "KIDS KASHMIR WILLOW",
    price: "4000",
    productImg: "./assets/products/bat1.webp",
    rating: 4,
    categoryName: "bat",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "ENGLISH WILLOW",
    price: "5000",
    productImg: "./assets/products/bat2.webp",
    rating: 5,
    categoryName: "bat",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "KIDS ENGLISH WILLOW",
    price: "5000",
    productImg: "./assets/products/bat3.webp",
    rating: 5,
    categoryName: "bat",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "RCB JERSEY",
    price: "4000",
    productImg: "./assets/products/rcbj.jpg",
    rating: 4,
    categoryName: "jersey",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "CSK JERSEY",
    price: "3000",
    productImg: "./assets/products/cskj.jpg",
    rating: 3,
    categoryName: "jersey",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "SRH JERSEY",
    price: "2000",
    productImg: "./assets/products/srhj.jpg",
    rating: 2,
    categoryName: "jersey",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "RCB CAP",
    price: "1000",
    productImg: "./assets/products/rcbc.jpg",
    rating: 1,
    categoryName: "cap",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "CSK CAP",
    price: "1000",
    productImg: "./assets/products/cskc.jpg",
    rating: 1,
    categoryName: "cap",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "SRH CAP",
    price: "2000",
    productImg: "./assets/products/srhc.jpg",
    rating: 1,
    categoryName: "cap",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "RCB HELMET",
    price: "3000",
    productImg: "./assets/products/rcbh.jpg",
    rating: 2,
    categoryName: "helmet",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "CSK HELMET",
    price: "4000",
    productImg: "./assets/products/cskh.jpg",
    rating: 3,
    categoryName: "helmet",
    quantity: 1,
  },
  {
    _id: uuid(),
    productName: "SRH HELMET",
    price: "5000",
    productImg: "./assets/products/srhh.jpg",
    rating: 4,
    categoryName: "helmet",
    quantity: 1,
  },
];
