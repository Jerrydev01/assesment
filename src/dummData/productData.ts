export interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: any;
  description: string;
  imagesSlide: any;
  ingredient: string;
  nutritionalInformation: string;
  howToPrepare: string;
  dietaryInformation: string;
  storageInformation: string;
  extra: string;
}

export const productData: ProductProps[] = [
  {
    id: 1,
    name: "African Donut Mix (Puff Puff)",
    price: 100,
    image: require("../../assets/Home/1.png"),
    imagesSlide: [
      require("../../assets/Home/1.png"),
      require("../../assets/Home/3.png"),
      require("../../assets/Home/1.png"),
    ],
    description:
      "African Doughnut Mix, Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly more chewy. They are usually served with a sweet sauce or glaze. They are a popular street food in Africa.",
    ingredient:
      "African Doughnut Mix ,  Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    nutritionalInformation:
      "African Doughnut Mix ,  in Contains vitamins and minerals",
    howToPrepare:
      "African Doughnut Mix , you can prepare it at home by using the following ingredients: Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    dietaryInformation:
      "African Doughnut Mix ,  in Contains vitamins and minerals",
    storageInformation:
      "African Doughnut Mix ,  it can be stored in a cool, dry place",
    extra: "African Doughnut Mix ,  serve with a sweet sauce or glaze",
  },
  {
    id: 2,
    name: "Efo Riro",
    price: 50,
    image: require("../../assets/Home/2.png"),
    imagesSlide: [
      require("../../assets/Home/2.png"),
      require("../../assets/Home/3.png"),
      require("../../assets/Home/2.png"),
    ],
    description:
      "Efo Riro, they are usually served with a sweet sauce or glaze. They are a popular street food in Africa. Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly more chewy. ",
    ingredient:
      "Efo Riro ,  Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    nutritionalInformation: "Efo Riro ,  in Contains vitamins and minerals",
    howToPrepare:
      "Efo Riro , you can prepare it at home by using the following ingredients: Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    dietaryInformation: "Efo Riro ,  in Contains vitamins and minerals",
    storageInformation: "Efo Riro ,  it can be stored in a cool, dry place",
    extra: "Efo Riro ,  serve with a sweet sauce or glaze",
  },
  {
    id: 3,
    name: "Asaro (Yam Porridge)",
    price: 100,
    image: require("../../assets/Home/3.png"),
    imagesSlide: [
      require("../../assets/Home/3.png"),
      require("../../assets/Home/4.png"),
      require("../../assets/Home/3.png"),
    ],
    description:
      "Asaro (Yam Porridge), Rare Eat Puff Puff Mix can be made into a deep-fried dough. hey are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly more chewy. They are usually served with a sweet sauce or glaze. They are a popular street food in Africa.",
    ingredient:
      "Asaro (Yam Porridge) ,  Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    nutritionalInformation:
      "Asaro (Yam Porridge) ,  in Contains vitamins and minerals",
    howToPrepare:
      "Asaro (Yam Porridge) , you can prepare it at home by using the following ingredients: Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    dietaryInformation:
      "Asaro (Yam Porridge) ,  in Contains vitamins and minerals",
    storageInformation:
      "Asaro (Yam Porridge) ,  it can be stored in a cool, dry place",
    extra: "Asaro (Yam Porridge) ,  serve with a sweet sauce or glaze",
  },
  {
    id: 4,
    name: "Chicken Stew",
    price: 50,
    image: require("../../assets/Home/4.png"),
    imagesSlide: [
      require("../../assets/Home/4.png"),
      require("../../assets/Home/3.png"),
      require("../../assets/Home/4.png"),
    ],
    description:
      "Chicken Stew, they are usually served with a sweet sauce or glaze. hey are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly more chewy. They are usually served with a sweet sauce or glaze. They are a popular street food in Africa.",
    ingredient:
      "Chicken Stew ,  Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    nutritionalInformation: "Chicken Stew ,  in Contains vitamins and minerals",
    howToPrepare:
      "Chicken Stew , you can prepare it at home by using the following ingredients: Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    dietaryInformation: "Chicken Stew ,  in Contains vitamins and minerals",
    storageInformation: "Chicken Stew ,  it can be stored in a cool, dry place",
    extra: "Chicken Stew ,  serve with a sweet sauce or glaze",
  },
  {
    id: 5,
    name: "Asaro (Yam Porridge)",
    price: 100,
    image: require("../../assets/Home/3.png"),
    imagesSlide: [
      require("../../assets/Home/3.png"),
      require("../../assets/Home/2.png"),
      require("../../assets/Home/3.png"),
    ],
    description:
      "Asaro (Yam Porridge), they are usually served with a sweet sauce or glaze. They are a popular street food in Africa.Chicken Stew, they are usually served with a sweet sauce or glaze. They are usually served with a sweet sauce or glaze. They are a popular street food in Africa.",
    ingredient:
      "Asaro (Yam Porridge) ,  Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    nutritionalInformation:
      "Asaro (Yam Porridge) ,  in Contains vitamins and minerals",
    howToPrepare:
      "Asaro (Yam Porridge) , you can prepare it at home by using the following ingredients: Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    dietaryInformation:
      "Asaro (Yam Porridge) ,  in Contains vitamins and minerals",
    storageInformation:
      "Asaro (Yam Porridge) ,  it can be stored in a cool, dry place",
    extra: "Asaro (Yam Porridge) ,  serve with a sweet sauce or glaze",
  },
  {
    id: 6,
    name: "Chicken Stew",
    price: 60,
    image: require("../../assets/Home/4.png"),
    imagesSlide: [
      require("../../assets/Home/4.png"),
      require("../../assets/Home/3.png"),
      require("../../assets/Home/4.png"),
    ],
    description:
      "Chicken Stew, they are usually served with a sweet sauce or glaze. hey are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly more chewy. They are usually served with a sweet sauce or glaze. They are a popular street food in Africa.",
    ingredient:
      "Chicken Stew,  Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    nutritionalInformation: "Chicken Stew,  in Contains vitamins and minerals",
    howToPrepare:
      "Chicken Stew, you can prepare it at home by using the following ingredients: Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    dietaryInformation: "Chicken Stew,  in Contains vitamins and minerals",
    storageInformation: "Chicken Stew,  it can be stored in a cool, dry place",
    extra: "Chicken Stew,  serve with a sweet sauce or glaze",
  },
  {
    id: 7,
    name: "Efo Riro",
    price: 50,
    image: require("../../assets/Home/2.png"),
    imagesSlide: [
      require("../../assets/Home/2.png"),
      require("../../assets/Home/3.png"),
      require("../../assets/Home/2.png"),
    ],
    description:
      "Efo Riro, they are usually served with a sweet sauce or glaze. They are a popular street food in Africa. Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly more chewy. ",
    ingredient:
      "Efo Riro,  Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    nutritionalInformation: "Efo Riro,  in Contains vitamins and minerals",
    howToPrepare:
      "Efo Riro, you can prepare it at home by using the following ingredients: Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    dietaryInformation: "Efo Riro,  in Contains vitamins and minerals",
    storageInformation: "Efo Riro,  it can be stored in a cool, dry place",
    extra: "Efo Riro,  serve with a sweet sauce or glaze",
  },
  {
    id: 8,
    name: "Asaro (Yam Porridge)",
    price: 100,
    image: require("../../assets/Home/3.png"),
    imagesSlide: [
      require("../../assets/Home/3.png"),
      require("../../assets/Home/4.png"),
      require("../../assets/Home/3.png"),
    ],
    description:
      "Asaro (Yam Porridge), they are usually served with a sweet sauce or glaze. They are a popular street food in Africa.Chicken Stew, they are usually served with a sweet sauce or glaze. They are usually served with a sweet sauce or glaze. They are a popular street food in Africa.",
    ingredient:
      "Asaro (Yam Porridge),  Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    nutritionalInformation:
      "Asaro (Yam Porridge),  in Contains vitamins and minerals",
    howToPrepare:
      "Asaro (Yam Porridge), you can prepare it at home by using the following ingredients: Yeast, Sugar, Flour, Salt, Baking Powder, Vegetable Oil, Milk, Egg,",
    dietaryInformation:
      "Asaro (Yam Porridge),  in Contains vitamins and minerals",
    storageInformation:
      "Asaro (Yam Porridge),  it can be stored in a cool, dry place",
    extra: "Asaro (Yam Porridge),  serve with a sweet sauce or glaze",
  },
];
