import { defineStore } from "pinia";
import Pro1 from "../assets/images/onion.png";
import Pro2 from "../assets/images/Group 1.png";
import Pro3 from "../assets/images/organic.png";
import Ca1 from "../assets/images/burger.png";
import Ca2 from "../assets/images/peach.png";
import Ca3 from "../assets/images/Kiwi.png";
import Ca4 from "../assets/images/apple.png";
import Ca5 from "../assets/images/snack.png";
import Ca6 from "../assets/images/plum.png";
import Ca7 from "../assets/images/vegetable.png";
import Ca8 from "../assets/images/headphone.png";
import Ca9 from "../assets/images/cake.png";
import Ca10 from "../assets/images/orange.png";
import SC from "../assets/images/fresh-apples.png";
import p1 from "../assets/images/mango.png";
import p2 from "../assets/images/mais.png";
import p3 from "../assets/images/set-orange.png";
import p4 from "../assets/images/piment.png";
import p5 from "../assets/images/lime.png";
import p6 from "../assets/images/ham.png";
import p7 from "../assets/images/fish.png";
import p8 from "../assets/images/beef.png";
import p9 from "../assets/images/ham2.png";
import p10 from "../assets/images/betterave.png";

export const useProductStore = defineStore("Product_Store", {
  state: () => ({
    ShowCase: [
      {
        Bg: "rgba(253, 192, 64, 0.2)",
        Title: "Don't miss amazing grocery deals",
        SubTitles: "Sign up for the daily newsletter",
        Img: SC,
      },
    ],
    MenuItemAll: [
      {
        link: "/category  ",
        first_bg: "",
        first_icon: "uil-fire",
        first_color: "rgba(59, 183, 126, 1)",
        first_text: "Hot Deals",
        text_color: "rgba(27, 27, 27, 1)",
      },
      {
        second_bg: "",
        second_icon: "",
        second_color: "",
        second_text: "Home",
      },
      {
        second_bg: "",
        second_icon: "uil-angle-down",
        second_color: "rgba(126, 126, 126, 1)",
        second_text: "Food",
      },
      {
        second_bg: "",
        second_icon: "uil-angle-down",
        second_color: "rgba(126, 126, 126, 1)",
        second_text: "Vegetable",
      },
      {
        second_bg: "",
        second_icon: "",
        second_color: "",
        second_text: "Drink",
      },
      {
        second_bg: "",
        second_icon: "",
        second_color: "",
        second_text: "Cookies",
      },
      {
        second_bg: "",
        second_icon: "uil-angle-down",
        second_color: "rgba(126, 126, 126, 1)",
        second_text: "Meat & Seafood",
      },
      {
        second_bg: "",
        second_icon: "",
        second_color: "",
        second_text: "Bakery",
      },
    ],
    MenuBarAll: [
      {
        first_bg: "",
        first_icon: "uil-user",
        first_color: "",
        first_text: "Account",
        text_color: "rgba(126, 126, 126, 1)",
      },
      {
        first_bg: "",
        first_icon: "uil-sync",
        first_color: "",
        first_text: "Compare",
        text_color: "rgba(126, 126, 126, 1)",
      },
      {
        first_bg: "",
        first_icon: "uil-heart",
        first_color: "",
        first_text: "Wishlist",
        text_color: "rgba(126, 126, 126, 1)",
      },
      {
        first_bg: "",
        first_icon: "uil-shopping-cart",
        first_color: "",
        first_text: "Cart",
        text_color: "rgba(126, 126, 126, 1)",
      },
    ],
    Promotions: [
      {
        Text: "Everyday Fresh & Clean with Our Products",
        Img: Pro1,
        bg: "rgba(240, 232, 213, 1)",
        btncolor: "rgba(59, 183, 126, 1)",
        TextBtn: "Shop Now",
      },
      {
        Text: "Make your Breakfast Healthy annd Easy",
        Img: Pro2,
        bg: "rgba(243, 232, 232, 1)",
        btncolor: "rgba(59, 183, 126, 1)",
        TextBtn: "Shop Now",
        link: "/product",
      },
      {
        Text: "The best Organic Products Online",
        Img: Pro3,
        bg: "rgba(231, 234, 243, 1)",
        btncolor: "rgba(253, 192, 64, 1)",
        TextBtn: "Shop Now",
        link: "/product",
      },
    ],
    Categories: [
      {
        Img: Ca1,
        bg: "rgba(242, 253, 228, 1)",
        ItemName: "Burger",
        ItemNumber: "14 Items",
      },
      {
        Img: Ca2,
        bg: "rgba(255, 252, 235, 1)",
        ItemName: "Peach",
        ItemNumber: "17 Items",
      },
      {
        Img: Ca3,
        bg: "rgba(236, 255, 236, 1)",
        ItemName: "Oganic Kiwi",
        ItemNumber: "21 Items",
      },
      {
        Img: Ca4,
        bg: "rgba(254, 239, 234, 1)",
        ItemName: "Red Apple",
        ItemNumber: "68 Items",
      },
      {
        Img: Ca5,
        bg: "rgba(255, 243, 235, 1)",
        ItemName: "Snack",
        ItemNumber: "34 Items",
      },
      {
        Img: Ca6,
        bg: "rgba(255, 243, 255, 1)",
        ItemName: "Black plum",
        ItemNumber: "25 Items",
      },
      {
        Img: Ca7,
        bg: "rgba(242, 252, 228, 1)",
        ItemName: "Vegetables",
        ItemNumber: "65 Items",
      },
      {
        Img: Ca8,
        bg: "rgba(255, 252, 235, 1)",
        ItemName: "Headphone",
        ItemNumber: "33 Items",
      },
      {
        Img: Ca9,
        bg: "rgba(242, 252, 228, 1)",
        ItemName: "Cake & Milk",
        ItemNumber: "54 Items",
      },
      {
        Img: Ca10,
        bg: "rgba(255, 243, 255, 1)",
        ItemName: "Orange",
        ItemNumber: "63 Items",
      },
    ],
    Product: [
      {
        id: "1",
        Value: "-17%",
        Bg_value: "rgba(59, 183, 126, 1)",
        Img: [p1, p2, p3, p4, p5],
        Title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        Star: "",
        Supvalue: "$2.51",
        Subvalue: "$2.80",
        Bgbtn: "rgba(255, 255, 255, 1)",
        Borderbtn: "1px solid rgba(59, 183, 126, 1)",
        Text: "1",
        Arrow: "+",
      },
      {
        id: "2",
        Value: "Hot",
        Bg_value: "rgba(253, 110, 110, 1)",
        Img: [p2, p3, p4, p5, p6],
        Title: "All Natural Itallan-Style Chicken Meatballs",
        Star: "",
        Supvalue: "$2.51",
        Subvalue: "$2.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",
        Text: "Add",
        Arrow: "+",
      },
      {
        id: "3",
        Value: "Sale",
        Bg_value: "rgba(253, 192, 64, 1)",
        Img: [p3, p4, p5, p6, p7],
        Title: "Angli's Boomchickapop Sweet & Salty Kettle Core",
        Star: "",
        Supvalue: "$2.51",
        Subvalue: "$2.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",

        Text: "Add",
        Arrow: "+",
      },
      {
        id: "4",
        Value: "",
        Bg_value: "",
        Img: [p4, p5, p6, p7, p8],
        Title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        Star: "",
        Supvalue: "$2.51",
        Subvalue: "$2.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",

        Text: "Add",
        Arrow: "+",
      },
      {
        id: "5",
        Value: "",
        Bg_value: "",
        Img: [p5, p6, p7, p8, p9],
        Title: "Blue Diamond Aimonds Lightly Salted Vegetables",
        Star: "",
        Supvalue: "$2.51",
        Subvalue: "$2.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",
        Text: "Add",
        Arrow: "+",
      },
      {
        id: "6",
        Value: "",
        Bg_value: "",
        Img: [p6, p7, p7, p8, p9],
        Title: "Chobanl Complete Vanilla Greek Yogurt",
        Star: "",
        Supvalue: "$2.51",
        Subvalue: "$2.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",

        Text: "Add",
        Arrow: "+",
      },
      {
        id: "7",
        Value: "Sale",
        Bg_value: "rgba(253, 192, 64, 1)",
        Img: [p7, p8, p9, p10, p1],
        Title: "Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
        Star: "",
        Supvalue: "$2.51",
        Subvalue: "$2.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",
        Text: "Add",
        Arrow: "+",
      },
      {
        id: "8",
        Value: "",
        Bg_value: "",
        Img: [p8, p9, p10, p1, p2],
        Title: "Encore Seafoods Stuffed Alaskan Salman",
        Star: "",
        Supvalue: "$2.51",
        Subvalue: "$2.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",
        Text: "Add",
        Arrow: "+",
      },
      {
        id: "9",
        Value: "",
        Bg_value: "",
        Img: [p9, p10, p1, p2, p3],
        Title: "Gorton's Beer Battered Fish Fillets with solf paper",
        Star: "",
        Supvalue: "$2.51",
        Subvalue: "$2.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",
        Text: "Add",
        Arrow: "+",
      },
      {
        id: "10",
        Value: "Hot",
        Bg_value: "rgba(253, 110, 110, 1)",
        Img: [p10, p1, p2, p3, p4],


        Title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
        Star: "",
        Supvalue: "$2.51",
        Subvalue: "$2.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",
        Text: "Add",
        Arrow: "+",
      },
    ],
  }),
  getters: {
    doublCount: (state) => state.count,
  },
});
