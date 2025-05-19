import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function ElectricalAIWebsite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    "Residential Wiring",
    "Industrial Automation",
    "Solar Installation",
    "Electrical Panel Upgrade",
    "AI Energy Monitoring"
  ];

  return (
    <div className="font-sans">
      <header className="bg-black text-white p-6 shadow-lg sticky top-0 z-50">
        <h1 className="text-3xl font-bold">EliteVolt AI Electricals</h1>
      </header>

      <section className="bg-gray-100 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">Smart Electrical Solutions with AI</h2>
          <p className="text-lg text-gray-700 mb-6">
            We fuse electrical engineering with artificial intelligence to give you optimized, automated, and efficient power solutions.
          </p>
          <Button className="bg-blue-600 text-white">Get a Free Quote</Button>
        </motion.div>
      </section>

      <section className="py-16 bg-white">
        <h3 className="text-3xl text-center font-bold mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6 px-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl shadow-lg p-6 bg-gray-50"
            >
              <h4 className="text-xl font-semibold mb-2">{service}</h4>
              <p className="text-sm text-gray-600">
                High-quality and AI-driven electrical service tailored to your needs.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-xl"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-xl"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-xl"
              rows="4"
              required
            ></textarea>
            <Button className="bg-green-600 text-white w-full">Send Message</Button>
          </form>
        </div>
      </section>

      <div className="fixed bottom-6 right-6">
        <Button className="rounded-full p-4 bg-yellow-400 shadow-xl">
          <MessageSquare size={24} />
        </Button>
      </div>

      <footer className="bg-black text-white text-center p-4">
        &copy; {new Date().getFullYear()} EliteVolt AI Electricals. All rights reserved.
      </footer>
    </div>
  );
}