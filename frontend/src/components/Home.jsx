import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeartbeat,
  FaBrain,
  FaTint,
  FaAppleAlt,
  FaSyncAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaHeartbeat className="w-8 h-8 text-teal-600" />,
    title: "Personalized Health Advice",
    desc: "Get tailored health suggestions based on your lifestyle and habits.",
  },
  {
    icon: <FaBrain className="w-8 h-8 text-teal-600" />,
    title: "Mental Health Awareness",
    desc: "Includes questions to assess and support your mental well-being.",
  },
  {
    icon: <FaTint className="w-8 h-8 text-teal-600" />,
    title: "Hydration & Nutrition Tips",
    desc: "Practical advice to improve your water and food intake habits.",
  },
  {
    icon: <FaAppleAlt className="w-8 h-8 text-teal-600" />,
    title: "Chronic Illness Awareness",
    desc: "Asks about diabetes, hypertension, and provides useful insights.",
  },
  {
    icon: <FaSyncAlt className="w-8 h-8 text-teal-600" />,
    title: "Actionable Next Steps",
    desc: "Summary with concrete actions to help you get started on better health.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-teal-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-teal-100">
        <h1 className="text-4xl font-bold mb-4 text-teal-800">
          🩺 Your Preventive Health Buddy
        </h1>
        <p className="text-lg mb-8 text-teal-700 max-w-2xl mx-auto">
          Chat with an AI-powered health assistant that gives personalized
          preventive health guidance based on your habits.
        </p>
        <button
          onClick={() => navigate("/Chat")}
          className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition"
        >
          Start Chatting
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-10">
          ✨ Features That Make a Difference
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-start space-y-3 hover:shadow-2xl hover:shadow-teal-500 transition-transform transform hover:scale-105"
            >
              <div className="text-teal-600 hover:text-teal-400 transition-all">
                {feat.icon}
              </div>
              <h3 className="text-xl font-semibold text-teal-700">
                {feat.title}
              </h3>
              <p className="text-gray-600">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
