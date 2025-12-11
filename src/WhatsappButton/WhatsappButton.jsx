import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "923191942002"; // your WhatsApp number (92 + mobile)
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Assalamualaikum!%20I%20visited%20your%20website%20and%20want%20to%20get%20in%20touch%20with%20you.`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform transform hover:scale-110"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappButton;
