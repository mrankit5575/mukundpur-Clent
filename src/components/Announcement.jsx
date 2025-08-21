 "use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Megaphone } from "lucide-react";

export default function AnnouncementBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    show && (
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="fixed top-15 left-0 w-screen bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 shadow-md z-50 flex justify-center items-center"
      >
        <Megaphone className="w-5 h-5 mr-2 flex-shrink-0" />
        <p className="text-sm md:text-base font-medium text-center">
  Share your notes and make this site helpful for everyone! Every note you share can help others. 
  Contribute your notes via WhatsApp:{" "}
  <a href="https://wa.me/9718659236" className="underline font-semibold">
    9718659236
  </a>
</p>



      </motion.div>
    )
  );
}
