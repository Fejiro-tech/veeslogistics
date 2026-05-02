"use client";
import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Mail, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const page = () => {
  const [open, setOpen] = useState(false);
  const [openFaqs, setOpenFaqs] = useState({});
  const [showChat, setShowChat] = useState(true);

  const whatsappNumber = "2347054195186";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Vee's Logistics, I need help with a delivery.",
  )}`;

  const faqs = [
    {
      question: "How long is delivery?",
      answer:
        "Delivery within Warri usually takes 30 minutes to 2 hours depending on distance and traffic.",
    },
    {
      question: "Do you deliver everywhere in Warri?",
      answer:
        "Yes, our dispatch riders cover all major areas within Warri and nearby locations.",
    },
    {
      question: "Can I send urgent packages?",
      answer:
        "Yes, we specialize in fast bike delivery for urgent documents, parcels, and items.",
    },
    {
      question: "How do I track my delivery?",
      answer:
        "You can track your shipment using your tracking ID on the tracking page.",
    },
    {
      question: "What happens if I miss my delivery?",
      answer:
        "If you miss your delivery, the rider will attempt to contact you. A rescheduling fee may apply before another delivery attempt is made.",
    },
    {
      question: "Do you do same-day delivery?",
      answer: "Yes, we offer same day deliveries in Warri.",
    },
    {
      question: "What items can I send?",
      answer:
        "You can send documents, small parcels, food items, and lightweight packages.",
    },
    {
      question: "Is rescheduling free?",
      answer:
        "Rescheduling is free only if the rider has not already arrived. Otherwise, a small fee may apply.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach us instantly via call or WhatsApp from the support section.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      // when user is near bottom (footer area)
      const isAtFooter = scrollY + windowHeight >= fullHeight - 120;

      setShowChat(!isAtFooter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              onClick={() => setOpen(!open)}
              className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
            >
              {open ? <X /> : <MessageCircle />}
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-16 right-0 w-72 bg-white shadow-xl rounded-xl p-4"
                >
                  <h2 className="font-semibold mb-3">Need Help?</h2>

                  <div className="space-y-2">
                    <a
                      href="tel:+2347054195186"
                      className="flex gap-2 p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <Phone className="text-blue-600" />
                      Call Support
                    </a>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <FaWhatsapp className="text-green-600 text-xl" />
                      WhatsApp Chat
                    </a>

                    <a
                      href="mailto:veeslogistics44@gmail.com"
                      className="flex gap-2 p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <Mail className="text-red-500" />
                      Email Us
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN PAGE */}
      <motion.div
        className="min-h-screen px-4 py-12 pb-24 md:pb-12"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="max-w-5xl mx-auto">
          {/* HEADER */}
          <motion.div variants={item} className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#166534]">
              Help & Support
            </h1>
            <p className="text-gray-500 mt-2">
              Get instant help via call, WhatsApp, or email
            </p>
          </motion.div>

          {/* QUICK ACTIONS */}
          <motion.div variants={item} className="grid md:grid-cols-3 gap-4">
            <a
              href="tel:+2347054195186"
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex flex-col gap-2 border border-gray-200"
            >
              <Phone className="text-blue-600" />
              <h2 className="font-semibold">Call Support</h2>
              <p className="text-sm text-gray-500">Instant response</p>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex flex-col gap-2 border border-gray-200"
            >
              <FaWhatsapp className="text-green-600 text-2xl" />
              <h2 className="font-semibold">WhatsApp Chat</h2>
              <p className="text-sm text-gray-500">Replies in minutes</p>
            </a>

            <a
              href="mailto:veeslogistics44@gmail.com"
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex flex-col gap-2 border border-gray-200"
            >
              <Mail className="text-red-500" />
              <h2 className="font-semibold">Email Us</h2>
              <p className="text-sm text-gray-500">24h response</p>
            </a>
          </motion.div>

          {/* FAQ */}
          <motion.div variants={item} className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-green-600">FAQs</h2>

            <div className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-3">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqs[index];

                    return (
                      <motion.div
                        key={index}
                        layout
                        className={`rounded-2xl shadow-md p-4 border transition-all duration-300 ${
                          isOpen
                            ? "bg-green-50 border-green-300"
                            : "bg-white border-gray-200"
                        }`}
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex justify-between items-center text-left"
                        >
                          <h3 className="font-medium text-gray-800">
                            {faq.question}
                          </h3>

                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-green-600" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-sm text-gray-600 mt-2 overflow-hidden"
                            >
                              {faq.answer}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default page;
