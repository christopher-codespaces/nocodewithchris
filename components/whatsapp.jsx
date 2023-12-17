import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ number }) => {


return (
  <a href=" https://wa.me/0612573431">
    <button
      
      style={{ position: "fixed", right: "20px", bottom: "20px" }}
    >
      <FaWhatsapp size={90} style={{ backgroundColor: "lightgreen",borderRadius:40 }} />
    </button>
  </a>
);
};

export default WhatsAppButton;