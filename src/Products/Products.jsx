import { useState, useEffect, useRef } from "react";
import { 
  FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaChevronLeft, 
  FaChevronRight, FaFileInvoiceDollar, FaTruckMoving, FaSearch, 
  FaShieldAlt, FaUndo, FaCheckCircle, FaWhatsapp, FaUserCircle,
  FaTimes, FaTrashAlt, FaFilter, FaMagic, FaLock
} from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import products from "./ProductsData";
import QuantityTabs from "./QuantityTabs";
import Logo from "../Logo/Logo";
import "./Products.css";
import Footer from "../Footer/Footer";

// --- 25+ PROFESSIONAL REVIEWS DATABASE ---
const allReviewsData = [
  { name: "Ali Raza", time: "2 days ago", text: "Amazing quality! Completely satisfied with the purchase. Delivery was fast.", rating: 5 },
  { name: "Sara Ahmed", time: "1 week ago", text: "Product is exactly as shown in the picture. Highly recommended store!", rating: 5 },
  { name: "Muhammad Usman", time: "2 weeks ago", text: "Good experience overall. Packaging was secure and customer service is responsive.", rating: 4.5 },
  { name: "Ayesha Khan", time: "3 days ago", text: "Quality is premium. Will definitely order again from here.", rating: 5 },
  { name: "Zainab Tariq", time: "1 month ago", text: "Value for money. Best product in this price range.", rating: 4 },
  { name: "Bilal Hussain", time: "5 days ago", text: "Delivery took an extra day, but the product is flawless. Satisfied.", rating: 4.5 },
  { name: "Fatima Noor", time: "2 days ago", text: "100% authentic product. Thank you for the free delivery!", rating: 5 },
  { name: "Hassan Ali", time: "4 weeks ago", text: "Very useful item for daily use. Working perfectly.", rating: 5 },
  { name: "Khadija Bibi", time: "1 week ago", text: "I bought this for my mother and she loved it. Great quality.", rating: 5 },
  { name: "Omer Farooq", time: "3 weeks ago", text: "Customer support guided me very well. Very happy with my parcel.", rating: 4.5 },
  { name: "Nida Shoaib", time: "2 days ago", text: "Just received it today. Looks elegant and premium.", rating: 5 },
  { name: "Kamran Akmal", time: "1 month ago", text: "I highly recommend this store. Trusted seller.", rating: 5 },
  { name: "Sana Javed", time: "6 days ago", text: "Material is very good. No extra delivery charges is a big plus.", rating: 4.5 },
  { name: "Fahad Mustafa", time: "2 weeks ago", text: "Exactly what I was looking for. Perfect size and shape.", rating: 5 },
  { name: "Sadia Imran", time: "3 days ago", text: "Beautiful packing and top-notch quality.", rating: 5 },
  { name: "Tariq Jameel", time: "1 week ago", text: "I am a regular customer now. Best online shopping experience.", rating: 5 },
  { name: "Madiha Shah", time: "4 days ago", text: "Works great! The price is very reasonable compared to the market.", rating: 4 },
  { name: "Awais Qarni", time: "1 month ago", text: "Superb quality. I have recommended it to all my friends.", rating: 5 },
  { name: "Rabia Anum", time: "2 weeks ago", text: "Loved the fast delivery and the product is amazing.", rating: 5 },
  { name: "Salman Butt", time: "5 days ago", text: "Original product received. Thanks seller!", rating: 4.5 },
  { name: "Hira Mani", time: "3 weeks ago", text: "It's my 3rd order from this website. Never disappointed.", rating: 5 },
  { name: "Danish Taimoor", time: "2 days ago", text: "Five stars for the quality and fast WhatsApp support.", rating: 5 },
  { name: "Amanullah", time: "1 week ago", text: "Very nice product. Highly satisfied.", rating: 4 },
  { name: "Nabeel Qureshi", time: "4 weeks ago", text: "Perfect condition. Everything is as described.", rating: 5 },
  { name: "Zoya Nasir", time: "3 days ago", text: "Beautifully designed and very practical. Thumbs up!", rating: 5 }
];

const Products = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainIndex, setMainIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [currentPrice, setCurrentPrice] = useState("");
  
  const [showAllReviews, setShowAllReviews] = useState(false);

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "", address: "", city: "", quantity: 1, length: "", width: "",
  });

  const heroBanners = [
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop"
  ];

  useEffect(() => {
    const loaderTimer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev === heroBanners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [heroBanners.length]);

  useEffect(() => {
    if (productId || isCartOpen || showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [productId, isCartOpen, showForm]);

  useEffect(() => {
    if (productId) {
      const product = products.find((p) => p.id == productId);
      if (product) {
        setSelectedProduct(product);
        setCurrentPrice(product.price); 
        setMainIndex(0);
        setShowAllReviews(false); 
      }
    } else {
      setSelectedProduct(null);
    }
  }, [productId]);

  const extractPrice = (str) => {
    const cleanStr = str?.toString().replace(/,/g, '');
    const match = cleanStr?.match(/(\d+)(?!.*\d)/);
    return match ? parseInt(match[0]) : 0;
  };

  const openModal = (product) => navigate(`/products/${product.id}`);
  const closeModal = () => { navigate("/products"); setShowForm(false); };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleBuyNow = () => {
    setFormData({...formData, isCartCheckout: false});
    setShowForm(true);
  };

  const nextImage = () => setMainIndex((prev) => (prev === selectedProduct.images.length - 1 ? 0 : prev + 1));
  const prevImage = () => setMainIndex((prev) => (prev === 0 ? selectedProduct.images.length - 1 : prev - 1));

  // --- CART FUNCTIONS ---
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleAddToCart = () => {
    const unitPrice = extractPrice(currentPrice);
    const existingItem = cart.find(item => item.id === selectedProduct.id && item.priceText === currentPrice);
    
    if (existingItem) {
       setCart(cart.map(item => item.id === selectedProduct.id && item.priceText === currentPrice 
         ? { ...item, qty: item.qty + (formData.quantity || 1) } 
         : item
       ));
    } else {
       setCart([...cart, {
         id: selectedProduct.id,
         name: selectedProduct.name,
         image: selectedProduct.images[0],
         priceText: currentPrice,
         unitPrice: unitPrice,
         qty: formData.quantity || 1
       }]);
    }
    showToast("✅ Added to Cart");
  };

  const updateCartQty = (idx, amount) => {
     const newCart = [...cart];
     newCart[idx].qty += amount;
     if (newCart[idx].qty <= 0) newCart.splice(idx, 1);
     setCart(newCart);
  };

  const removeFromCart = (idx) => {
     const newCart = [...cart];
     newCart.splice(idx, 1);
     setCart(newCart);
     showToast("🗑️ Item Removed");
  };

  const cartTotal = cart.reduce((total, item) => total + (item.unitPrice * item.qty), 0);

  const handleCartCheckout = () => {
    setFormData({...formData, isCartCheckout: true});
    setIsCartOpen(false);
    setShowForm(true);
  };

  // --- WHATSAPP CHECKOUT LOGIC ---
  const sendToWhatsApp = () => {
    const phoneNumber = "923191942002";
    let text = "";

    if (formData.isCartCheckout) {
       text = `🛒 *NEW STORE ORDER* 🛒\n\n`;
       cart.forEach((item, index) => {
          text += `*${index + 1}. ${item.name}*\n💵 Price: ${item.priceText}\n🔢 Qty: ${item.qty}\n---\n`;
       });
       text += `\n💰 *Grand Total:* Rs. ${cartTotal.toLocaleString()}\n🚚 *Shipping:* FREE\n`;
    } else {
       const unitPrice = extractPrice(currentPrice);
       const totalBill = unitPrice * (formData.quantity || 1);
       const productLink = window.location.href; 
       text = `🛒 *NEW SINGLE ORDER* 🛒\n\n📦 *Product:* ${selectedProduct.name}\n🔗 *Link:* ${productLink}\n💵 *Package/Price:* ${currentPrice}\n🔢 *Qty:* ${formData.quantity}\n💰 *Total Bill:* Rs. ${totalBill.toLocaleString()}\n🚚 *Shipping:* FREE\n`;
    }

    text += `\n👤 *Customer Profile:*\nName: ${formData.name}\nAddress: ${formData.address}\nCity: ${formData.city}`;
    if (!formData.isCartCheckout && selectedProduct.inpVal === "False") {
      if (formData.length) text += `\n📏 Length: ${formData.length}"`;
      if (formData.width) text += `\n📐 Width: ${formData.width}"`;
    }
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
    if(formData.isCartCheckout) setCart([]); 
    setShowForm(false);
  };

  const renderStars = (rating) => {
    const stars = [];
    const numRating = parseFloat(rating) || 0;
    for (let i = 1; i <= 5; i++) {
      if (i <= numRating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 <= numRating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return <div className="flex items-center gap-1">{stars}</div>;
  };

  let filteredProducts = products.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortOrder === "lowToHigh") {
     filteredProducts.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
  } else if (sortOrder === "highToLow") {
     filteredProducts.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
  } else if (sortOrder === "topRated") {
     filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (sortOrder === "bestSelling") {
     filteredProducts.sort((a, b) => (b.sold || 0) - (a.sold || 0));
  } else if (sortOrder === "aToZ") {
     filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  const getProductReviews = (id) => {
     const numId = parseInt(id) || 1;
     const startIndex = (numId * 3) % (allReviewsData.length - 8);
     return allReviewsData.slice(startIndex, startIndex + 8);
  };
  const currentReviews = selectedProduct ? getProductReviews(selectedProduct.id) : [];
  const displayedReviews = showAllReviews ? currentReviews : currentReviews.slice(0, 2);

  const isCustomProduct = selectedProduct?.inpVal === "False";

  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-24 relative selection:bg-[#265336] selection:text-white text-gray-800">
      
      {/* Yahan Logo div ka z-index 10 se 99 kar diya gaya hai */}
      <div className="relative z-[99] bg-white shadow-sm"><Logo /></div>

      {/* --- TOAST NOTIFICATION --- */}
      {toastMessage && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-[#265336] text-white px-8 py-4 rounded-full shadow-2xl z-[300] font-bold animate-fade-in-down flex items-center gap-3">
             <FaCheckCircle /> {toastMessage}
          </div>
      )}

      {/* --- HERO SLIDER --- */}
      <div className="relative z-10 w-full h-[220px] md:h-[450px] overflow-hidden mb-10 group bg-gray-200">
        {heroBanners.map((banner, idx) => (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentHeroSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={banner} className="w-full h-full object-cover" alt="Banner" />
          </div>
        ))}
        <button onClick={() => setCurrentHeroSlide(currentHeroSlide === 0 ? heroBanners.length-1 : currentHeroSlide-1)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-md border border-gray-200 hover:bg-[#265336] p-3 md:p-4 rounded-full text-gray-800 hover:text-white transition-all opacity-0 group-hover:opacity-100 shadow-md"><FaChevronLeft size={20}/></button>
        <button onClick={() => setCurrentHeroSlide(currentHeroSlide === heroBanners.length-1 ? 0 : currentHeroSlide+1)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-md border border-gray-200 hover:bg-[#265336] p-3 md:p-4 rounded-full text-gray-800 hover:text-white transition-all opacity-0 group-hover:opacity-100 shadow-md"><FaChevronRight size={20}/></button>
      </div>

      {/* --- SEARCH & FILTER SECTION --- */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 mb-10">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white border border-gray-100 p-3 rounded-2xl shadow-sm">
           <div className="relative w-full md:w-[65%]">
              <input 
                type="text" 
                placeholder="Search collection..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 p-3 md:p-4 pl-12 md:pl-14 pr-10 rounded-xl font-medium text-gray-700 placeholder-gray-400 focus:border-[#265336] focus:outline-none transition-all"
              />
              <FaSearch className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg md:text-xl" />
           </div>
           
           <div className="w-[1px] h-10 bg-gray-200 hidden md:block"></div>
           
           <div className="relative w-full md:w-[30%]">
              <div className="absolute inset-y-0 left-4 md:left-5 flex items-center pointer-events-none z-10">
                 <FaFilter className="text-gray-400" />
              </div>
              <select 
                value={sortOrder} 
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 p-3 md:p-4 pl-10 md:pl-14 rounded-xl font-medium text-gray-700 outline-none cursor-pointer appearance-none hover:border-[#265336] transition-all"
              >
                 <option value="default">Default Sorting</option>
                 <option value="bestSelling">Best Selling</option>
                 <option value="topRated">Top Rated</option>
                 <option value="lowToHigh">Price: Low to High</option>
                 <option value="highToLow">Price: High to Low</option>
                 <option value="aToZ">Name: A to Z</option>
              </select>
           </div>
        </div>
      </div>

      {/* --- GRID LISTING --- */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-3 flex flex-col h-full animate-pulse border border-gray-100 shadow-sm">
                 <div className="w-full aspect-square bg-gray-100 rounded-xl mb-4"></div>
                 <div className="h-4 bg-gray-100 rounded w-3/4 mb-3"></div>
                 <div className="h-3 bg-gray-100 rounded w-1/2 mb-5"></div>
                 <div className="h-8 bg-gray-100 rounded w-1/3 mt-auto"></div>
              </div>
            ))
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((item) => {
              const numericPrice = extractPrice(item.price);
              return (
                <div key={item.id} onClick={() => openModal(item)} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#265336]/50 cursor-pointer group flex flex-col h-full overflow-hidden relative">
                  
                  <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                    <img src={item.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl" alt={item.name} />
                    
                    <div className="absolute top-3 left-0 bg-orange-500 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-r-full shadow-sm z-10">
                       Free Shipping
                    </div>
                    {numericPrice >= 1000 && (
                       <div className="absolute top-3 right-0 bg-[#265336] text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-l-full shadow-sm z-10">
                          Best Seller
                       </div>
                    )}
                  </div>
                  <div className="p-3 md:p-4 flex flex-col gap-2 flex-grow">
                    <h3 className="text-sm md:text-base font-bold text-gray-800 line-clamp-2 leading-snug group-hover:text-[#265336] transition-colors">{item.name}</h3>
                    
                    <div className="mt-auto pt-2 border-t border-gray-50">
                      <span className="text-[#265336] font-black text-lg md:text-xl">{item.price}</span>
                      <div className="flex items-center justify-between mt-1">
                         <span className="text-[12px]">{renderStars(item.rating || 5)}</span>
                         <span className="text-[10px] md:text-xs text-gray-500 font-medium">({item.sold} sold)</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
             <div className="col-span-full text-center py-20 flex flex-col items-center">
                <FaSearch className="text-6xl text-gray-200 mb-4" />
                <h3 className="text-2xl font-bold text-gray-400">No items matched your search.</h3>
             </div>
          )}
        </div>
      </div>

      {/* --- CART DRAWER --- */}
      {isCartOpen && (
          <div className="fixed inset-0 z-[250] flex justify-start"> 
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in-left border-r border-gray-200">
               <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                  <h2 className="text-2xl font-black text-[#265336] flex items-center gap-2">
                     <FaShoppingCart /> Your Cart ({cart.length})
                  </h2>
                  <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-red-500 transition-all p-2 bg-white rounded-full shadow-sm"><FaTimes size={20} /></button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 no-scrollbar">
                  {cart.length === 0 ? (
                     <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
                        <div className="bg-gray-50 p-6 rounded-full">
                           <FaShoppingCart size={50} className="text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-500">Your Cart is Empty</h3>
                        <button onClick={() => setIsCartOpen(false)} className="px-8 py-3 bg-[#265336] text-white rounded-full font-bold mt-2 shadow-md hover:bg-[#1a3a26] transition-all">Continue Shopping</button>
                     </div>
                  ) : (
                     cart.map((item, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-4 relative group hover:shadow-md transition-all">
                           <button onClick={() => removeFromCart(idx)} className="absolute top-2 right-2 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><FaTrashAlt /></button>
                           <div className="bg-gray-50 p-1 rounded-lg shrink-0">
                              <img src={item.image} className="w-20 h-20 object-cover rounded-md" alt="cart item" />
                           </div>
                           <div className="flex flex-col flex-1 justify-center">
                              <h4 className="font-bold text-gray-800 text-sm line-clamp-2 pr-6">{item.name}</h4>
                              <p className="text-[#265336] font-black text-lg mt-1">{item.priceText}</p>
                              <div className="flex items-center gap-3 mt-2 bg-gray-50 w-max rounded-full px-2 py-1 border border-gray-200">
                                 <button onClick={() => updateCartQty(idx, -1)} className="w-6 h-6 text-gray-500 hover:text-[#265336] flex items-center justify-center font-bold transition-colors">-</button>
                                 <span className="font-bold text-sm w-4 text-center text-gray-800">{item.qty}</span>
                                 <button onClick={() => updateCartQty(idx, 1)} className="w-6 h-6 text-gray-500 hover:text-[#265336] flex items-center justify-center font-bold transition-colors">+</button>
                              </div>
                           </div>
                        </div>
                     ))
                  )}
               </div>

               {cart.length > 0 && (
                  <div className="p-5 bg-gray-50 border-t border-gray-200">
                     <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-500 font-bold text-base">Subtotal:</span>
                        <span className="text-2xl font-black text-[#265336]">Rs. {cartTotal.toLocaleString()}</span>
                     </div>
                     <div className="bg-orange-100 border border-orange-200 text-orange-600 text-sm font-bold flex items-center justify-center gap-2 mb-4 py-2 rounded-lg">
                        <FaTruckMoving /> Express Free Delivery Applied!
                     </div>
                     <button onClick={handleCartCheckout} className="w-full bg-[#265336] text-white py-4 rounded-xl font-black text-base uppercase flex items-center justify-center gap-2 shadow-lg hover:bg-[#1a3a26] transition-all">
                        Checkout Securely <FaWhatsapp size={20} />
                     </button>
                  </div>
               )}
            </div>
          </div>
      )}

      {/* --- FULL SCREEN PRODUCT MODAL --- */}
      {selectedProduct && (
        <div id="product-modal" className="fixed inset-0 z-[100] bg-white overflow-y-auto scroll-smooth">
           
           {/* Close Button - Sticky at top right */}
           <button className="fixed top-4 right-4 bg-gray-50 border border-gray-200 hover:bg-red-50 hover:border-red-500 hover:text-red-500 p-3 rounded-full text-gray-500 font-bold z-[110] transition-all shadow-sm" onClick={closeModal}>
              <FaTimes size={24} />
           </button>

           <div className="w-full max-w-[1300px] mx-auto px-4 py-10">
               {/* Main Product Layout */}
               <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pt-10">
                  
                  {/* IMAGES SECTION */}
                  <div className="w-full lg:w-[50%] flex flex-col">
                     <div className="relative aspect-square bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center">
                        <div className="flex h-full w-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${mainIndex * 100}%)`, width: `${selectedProduct.images.length * 100}%` }}>
                           {selectedProduct.images.map((img, idx) => (
                              <div key={idx} className="w-full h-full flex-shrink-0 flex items-center justify-center">
                                 <img src={img} className="max-w-full max-h-full object-contain p-4" alt="product" />
                              </div>
                           ))}
                        </div>
                        <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md border border-gray-200 hover:bg-[#265336] p-3 rounded-full text-gray-800 hover:text-white transition-all shadow-sm"><FaChevronLeft size={16}/></button>
                        <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md border border-gray-200 hover:bg-[#265336] p-3 rounded-full text-gray-800 hover:text-white transition-all shadow-sm"><FaChevronRight size={16}/></button>
                     </div>
                     
                     <div className="flex gap-3 mt-4 overflow-x-auto no-scrollbar justify-start flex-nowrap py-2">
                        {selectedProduct.images.map((img, idx) => (
                           <div key={idx} className="flex-shrink-0 bg-gray-50 p-1 rounded-xl border border-gray-100">
                              <img src={img} onClick={() => setMainIndex(idx)} className={`w-16 h-16 md:w-20 md:h-20 rounded-lg cursor-pointer transition-all object-cover ${idx === mainIndex ? 'border-2 border-[#265336] opacity-100' : 'opacity-60 hover:opacity-100'}`} alt="thumb" />
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* DETAILS SECTION */}
                  <div className="w-full lg:w-[50%] flex flex-col justify-center">
                     <div className="inline-block bg-emerald-50 text-[#265336] border border-emerald-100 px-3 py-1 rounded-full text-sm font-bold w-max mb-3">
                        Premium Collection
                     </div>
                     <h2 className="text-3xl md:text-5xl font-black text-gray-800 leading-tight mb-4">{selectedProduct.name}</h2>
                     
                     <div className="flex items-center gap-6 border-b border-gray-100 pb-5">
                        <div className="flex items-center gap-2">
                           {renderStars(selectedProduct.rating || 5)} 
                           <span className="text-gray-800 font-bold ml-1">{selectedProduct.rating || 5.0}</span>
                        </div>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500 font-medium flex items-center gap-1.5"><FaCheckCircle className="text-emerald-500"/> {selectedProduct.sold} Orders Verified</span>
                     </div>

                     <div className="mt-6 bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                        {isCustomProduct ? (
                           <div className="flex flex-col gap-4">
                              <div className="text-4xl font-black text-[#265336] mb-2">{currentPrice}</div>
                              {['length', 'width', 'quantity'].map((field) => (
                                <div key={field} className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200">
                                   <label className="font-bold text-gray-600 capitalize">
                                      {field} {field !== 'quantity' && <span className="text-xs font-medium text-gray-400">(in inches)</span>}:
                                   </label>
                                   <input type="number" name={field} value={formData[field]} onChange={handleFormChange} className="bg-gray-50 border border-gray-200 rounded-lg p-2 w-24 text-center font-bold" />
                                </div>
                              ))}
                           </div>
                        ) : (
                           <div className="flex flex-col gap-4">
                              <div className="text-4xl font-black text-[#265336] mb-2">{currentPrice}</div>
                              <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200">
                                 <label className="font-bold text-gray-600 capitalize">Quantity:</label>
                                 <input type="number" name="quantity" min="1" value={formData.quantity} onChange={handleFormChange} className="bg-gray-50 border border-gray-200 rounded-lg p-2 w-24 text-center font-bold" />
                              </div>
                           </div>
                        )}

                        <div className="mt-6 bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-center gap-4">
                           <FaTruckMoving size={24} className="text-orange-500 animate-bounce" />
                           <div className="flex flex-col">
                              <span className="text-gray-800 text-lg font-black uppercase">Free Delivery</span>
                              <span className="text-orange-600 font-semibold text-sm">Across Pakistan - Zero Extra Fees</span>
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col gap-3 mt-6">
                        <div className="flex flex-col md:flex-row gap-3">
                           <button onClick={handleAddToCart} className="w-full md:w-1/2 bg-white text-[#265336] border-2 border-[#265336] py-4 rounded-xl font-black hover:bg-emerald-50 transition-all uppercase tracking-wide">
                              Add to Cart
                           </button>
                           <button onClick={handleBuyNow} className="w-full md:w-1/2 bg-[#265336] text-white py-4 rounded-xl shadow-md font-black hover:bg-[#1a3a26] transition-all flex justify-center items-center gap-2 uppercase tracking-wide">
                              <FaShoppingCart /> Buy Now
                           </button>
                        </div>
                        
                        {/* URDU TEXT HIGHLIGHTED SECTION (CHANGE APPLIED HERE) */}
                        <div className="w-full p-3 md:p-4 bg-[#fff8e1] border-2 border-dashed border-[#ffb300] rounded-xl text-center shadow-sm">
                           <p dir="rtl" className="text-2xl text-[#d84315] font-black tracking-wide drop-shadow-sm" style={{ fontFamily: 'Jameel Noori Nastaleeq, "Noto Nastaliq Urdu", serif' }}>
                              آرڈر دینے کے لیے بٹن پر کلک کریں
                           </p>
                        </div>

                     </div>
                  </div>
               </div>

               {/* Specs & Reviews (Full Width) */}
               <div className="mt-16 bg-white border-t border-gray-100 pt-16">
                  <div className="flex flex-col items-center mb-10">
                     <h3 className="text-2xl md:text-4xl font-black text-gray-800 mb-2">📋 Product Specifications</h3>
                     <div className="w-20 h-1.5 bg-[#265336] rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     {selectedProduct.desc.map((val, idx) => (
                        <div key={idx} className="group bg-gray-50 p-6 rounded-2xl">
                           <h2 className="text-lg font-black text-gray-800 border-l-4 border-[#265336] pl-4 mb-4">{val.heading}</h2>
                           <div className="text-gray-600 leading-relaxed space-y-2 ml-5">
                              {val.subParts.map((item, i) => <p key={i} className="flex items-start gap-2"><span className="text-[#265336] mt-1">•</span>{item}</p>)}
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* CUSTOMER REVIEWS */}
                  <div className="mt-20">
                     <div className="flex justify-between items-end mb-8">
                        <h3 className="text-2xl font-black text-gray-800">⭐ Verified Reviews</h3>
                        <span className="text-[#265336] font-bold bg-emerald-50 px-4 py-1 rounded-full border border-emerald-100">{currentReviews.length} Ratings</span>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {displayedReviews.map((review, i) => (
                           <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                              <div className="flex items-center gap-3 mb-4">
                                 <FaUserCircle className="text-4xl text-gray-300" />
                                 <div>
                                    <h4 className="font-bold text-gray-700">{review.name}</h4>
                                    <div className="flex items-center gap-2">
                                       {renderStars(review.rating)}
                                       <span className="text-xs text-gray-400">{review.time}</span>
                                    </div>
                                 </div>
                              </div>
                              <p className="text-gray-600 italic">"{review.text}"</p>
                           </div>
                        ))}
                     </div>
                     
                     {!showAllReviews && currentReviews.length > 2 && (
                        <div className="flex justify-center mt-10">
                           <button onClick={() => setShowAllReviews(true)} className="bg-white border-2 border-[#265336] text-[#265336] px-10 py-3 rounded-full font-bold hover:bg-[#265336] hover:text-white transition-all">
                              Read All {currentReviews.length} Reviews
                           </button>
                        </div>
                     )}
                  </div>
                  
                  {/* RELATED PRODUCTS SECTION (CHANGE APPLIED HERE) */}
                  <div className="mt-20 pt-16 border-t border-gray-100">
                     <div className="flex flex-col items-center mb-10">
                        <h3 className="text-2xl md:text-4xl font-black text-gray-800 mb-2">🛍️ You May Also Like</h3>
                        <div className="w-20 h-1.5 bg-[#265336] rounded-full"></div>
                     </div>
                     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                        {products.filter(p => p.id !== selectedProduct.id).slice(0, 5).map((item) => {
                           const numericPrice = extractPrice(item.price);
                           return (
                              <div key={item.id} onClick={() => { setMainIndex(0); openModal(item); document.getElementById('product-modal').scrollTo({top: 0, behavior: 'smooth'}); }} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#265336]/50 cursor-pointer group flex flex-col h-full overflow-hidden relative">
                                 
                                 <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                                    <img src={item.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl" alt={item.name} />
                                    <div className="absolute top-3 left-0 bg-orange-500 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-r-full shadow-sm z-10">
                                       Free Shipping
                                    </div>
                                    {numericPrice >= 1000 && (
                                       <div className="absolute top-3 right-0 bg-[#265336] text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-l-full shadow-sm z-10">
                                          Best Seller
                                       </div>
                                    )}
                                 </div>
                                 <div className="p-3 md:p-4 flex flex-col gap-2 flex-grow">
                                    <h3 className="text-sm md:text-base font-bold text-gray-800 line-clamp-2 leading-snug group-hover:text-[#265336] transition-colors">{item.name}</h3>
                                    
                                    <div className="mt-auto pt-2 border-t border-gray-50">
                                       <span className="text-[#265336] font-black text-lg md:text-xl">{item.price}</span>
                                       <div className="flex items-center justify-between mt-1">
                                          <span className="text-[12px]">{renderStars(item.rating || 5)}</span>
                                          <span className="text-[10px] md:text-xs text-gray-500 font-medium">({item.sold} sold)</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>

               </div>
           </div>
        </div>
      )}

      {/* --- CHECKOUT FORM MODAL --- */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[400] p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md p-8 rounded-[2rem] shadow-2xl relative animate-scale-up">
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 bg-gray-50 p-2 rounded-full transition-all"><FaTimes/></button>
            
            <h2 className="text-2xl font-black text-center text-[#265336] mb-4 flex flex-col items-center gap-1">
               <FaLock className="text-gray-400 text-lg" /> Secure Checkout
            </h2>
            
            <div className="bg-orange-50 border border-orange-100 p-3 rounded-xl mb-6">
              <p dir="rtl" className="text-lg text-orange-600 text-center" style={{ fontFamily: 'Jameel Noori Nastaleeq, "Noto Nastaliq Urdu", serif' }}>
                برائے کرم آرڈر کرنے کے لیے اپنا مکمل پتا شہر کے نام کے ساتھ درج کریں
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); sendToWhatsApp(); }} className="flex flex-col gap-4">
              <input type="text" name="name" placeholder="Full Name" onChange={handleFormChange} required className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:border-[#265336] outline-none font-bold" />
              <textarea name="address" placeholder="Complete Shipping Address" onChange={handleFormChange} required className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:border-[#265336] outline-none font-bold h-24 resize-none" />
              <input type="text" name="city" placeholder="City Name" onChange={handleFormChange} required className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:border-[#265336] outline-none font-bold" />

              <button type="submit" className="bg-[#265336] text-white py-4 rounded-xl font-black hover:bg-[#1a3a26] transition-all flex items-center justify-center gap-2 mt-2">
                <FaWhatsapp className="text-xl" /> Confirm Order
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- FLOATING CART BUTTON --- */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 left-6 md:bottom-8 md:left-8 bg-white p-4 rounded-full shadow-xl border-2 border-[#265336] text-[#265336] hover:bg-[#265336] hover:text-white transition-all duration-300 flex items-center gap-2 z-[90]"
      >
         <FaShoppingCart className="text-2xl" />
         <span className="font-bold hidden sm:block">Cart</span>
         {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-black h-7 w-7 rounded-full flex items-center justify-center border-[3px] border-white animate-bounce">
               {cart.length}
            </span>
         )}
      </button>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a 
        href="https://wa.me/923191942002?text=Hello! I need some help with my order." 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-xl z-[90] hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp className="text-4xl" />
        <span className="absolute -inset-1 rounded-full border border-[#25D366] animate-ping opacity-50"></span>
      </a>

    </div>
  );
};

export default Products;