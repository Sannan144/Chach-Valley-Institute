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
      "1-5": 85000,
      "6-10": 82000,
      "11-20": 78000,
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
      "1-5": 70000,
      "6-10": 66000,
      "11-20": 62000,
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
      "1-5": 8500,
      "6-10": 8000,
      "11-20": 7500,
    },
  },
  {
    id: 4,
    name: "Wireless Mouse",
    images: [
      "https://plus.unsplash.com/premium_photo-1671611822374-4719df5c89bb?auto=format&fit=crop&q=60&w=400",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=60&w=400",
      "https://plus.unsplash.com/premium_photo-1681666713741-3e307db44f68?auto=format&fit=crop&q=60&w=400",
      "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?auto=format&fit=crop&q=60&w=400",
    ],
    rating: "4.4 out of 5",
    sold: 210,
    price: "Rs. 2,500",
    tierPrices: {
      "1-5": 2500,
      "6-10": 2200,
      "11-20": 1900,
    },
  },
  {
    id: 5,
    name: "Headphones (Noise Cancelling)",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=60&w=400",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=60&w=400",
      "https://plus.unsplash.com/premium_photo-1681666713741-3e307db44f68?auto=format&fit=crop&q=60&w=400",
      "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?auto=format&fit=crop&q=60&w=400",
    ],
    rating: "4.9 out of 5",
    sold: 300,
    price: "Rs. 12,000",
    tierPrices: {
      "1-10": 12000,
      "10-20": 10000,
      "20-30": 9000,
    },
  },
];

export default products;
