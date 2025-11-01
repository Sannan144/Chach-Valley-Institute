const products = [
  {
    id: 1,
    name: "Laptop (High Performance)",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&w=400",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=60&w=400",
      "https://plus.unsplash.com/premium_photo-1681666713741-3e307db44f68?auto=format&fit=crop&q=60&w=400",
      "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?auto=format&fit=crop&q=60&w=400",
    ],
    rating: "5 out of 5",
    sold: 230,
    price: "Rs. 85,000",
    tierPrices: {
      "1 piece": 85000,
      "5-10 pieces": 82000,
      "11-20 pieces": 78000,
      "20+ pieces": 75000,
    },
  },
  {
    id: 2,
    name: "Smartphone (Flagship Model)",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=60&w=400",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=60&w=400",
      "https://plus.unsplash.com/premium_photo-1681666713741-3e307db44f68?auto=format&fit=crop&q=60&w=400",
      "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?auto=format&fit=crop&q=60&w=400",
    ],
    rating: "4.8 out of 5",
    sold: 180,
    price: "Rs. 70,000",
    tierPrices: {
      "1 piece": 70000,
      "5-10 pieces": 66000,
      "11-20 pieces": 62000,
      "20+ pieces": 60000,
    },
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=60&w=400",
      "https://images.unsplash.com/photo-1574012716378-0ca6f4c18c08?auto=format&fit=crop&q=60&w=400",
      "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?auto=format&fit=crop&q=60&w=400",
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&q=60&w=400",
    ],
    rating: "4.6 out of 5",
    sold: 145,
    price: "Rs. 8,500",
    tierPrices: {
      "1 piece": 8500,
      "5-10 pieces": 8000,
      "11-20 pieces": 7500,
      "20+ pieces": 7000,
    },
  },
];

export default products;
