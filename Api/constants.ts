interface Category {
  Id: number | string;
  Title: string;
  ImageURL: string;
}

interface FeatureRowType {
  Id: number | string;
  Title: string;
  Description: string;
  Dishes: DishesType[];
}

interface DishesType {
  create: [
    {
      Id: number | string;
      Title: string;
      Rating: number;
      Genre: string;
      Address: string;
      ImageURL: string;
      Short_description: string;
      RestaurantsDishes: RestaurantsDishesType[];
      Long: number;
      Lat: number;
    }
  ];
}

interface RestaurantsDishesType {
  create: [
    {
      Title: string;
      ImageURL: string;
      Short_description: string;
      Price: number;
    }
  ];
}

const Category: Category[] = [
  {
    Id: 1,
    Title: "Offer",
    ImageURL:
      "https://media.istockphoto.com/id/1209972288/vector/red-banner-special-offer-with-megaphone-on-white-background-ribbon-of-discount-and-sale.jpg?s=612x612&w=0&k=20&c=R6La2-vwDzqpQW8pG8JLtUYy0B0aT7FtvTeHduWmzl0=",
  },
  {
    Id: 2,
    Title: "Us burger",
    ImageURL:
      "https://www.americarestaurant.ca/wp-content/uploads/2017/11/American-food.jpg",
  },
  {
    Id: 4,
    Title: "Tom kha",
    ImageURL:
      "https://photos.smugmug.com/Experiences/Food-Drink/i-v2pCJ29/0/06569403/XL/_tom_kha_shutterstock_2000-XL.jpg",
  },
  {
    Id: 5,
    Title: "Gaeng pet",
    ImageURL:
      "https://photos.smugmug.com/Experiences/Food-Drink/i-GhFKvjb/0/0bde782c/XL/ThaiFood_red_curry_1800-XL.jpg",
  },
  {
    Id: 6,
    Title: "Taco",
    ImageURL:
      "https://www.howtocook.recipes/wp-content/uploads/2022/01/Mexican-tacos-recipe.jpg",
  },
  {
    Id: 7,
    Title: "Khiao",
    ImageURL:
      "https://photos.smugmug.com/Experiences/Food-Drink/i-GmwpQzG/0/333d21f6/XL/Thai_green_curry_2000-XL.jpg",
  },
  {
    Id: 8,
    Title: "Taco Sup",
    ImageURL:
      "https://www.twopeasandtheirpod.com/wp-content/uploads/2022/01/Taco-Soup1071010-650x975.jpg",
  },
  {
    Id: 9,
    Title: "Sushi",
    ImageURL:
      "https://res.cloudinary.com/simplotel/image/upload/x_0,y_26,w_500,h_282,r_0,c_crop,q_80,fl_progressive/w_455,f_auto,c_fit/evoma---business-hotel-k-r-puram-bangalore/japanese-food_Evoma_Whitefield_Bangalore_rds4kt",
  },
  {
    Id: 10,
    Title: "UdonA",
    ImageURL:
      "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-udon/Blog-page-156-udon?$poi$&w=556&h=391&sm=c&fmt=auto",
  },
];

export { Category, FeatureRowType, DishesType, RestaurantsDishesType };
