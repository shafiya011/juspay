import { useState } from "react";
import {CheckOutlined} from "@ant-design/icons";

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800">
        Build Your <span className="text-orange-600">Rocket to Revenue</span>
      </h1>
      <p className="text-gray-600 mt-2 text-center">
        Unlock all <b>PRO</b> features. Earn up to{" "}
        <span className="font-semibold">350 additional Search Rank Points</span>{" "}
        and access valuable growth tools.
      </p>

      {/* Billing Toggle */}
      <div className="flex items-center gap-3 mt-6">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-6 py-2 rounded-full font-medium ${
            billing === "monthly"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("yearly")}
          className={`px-6 py-2 rounded-full font-medium flex items-center gap-2 ${
            billing === "yearly"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Yearly <span className="text-yellow-500 font-semibold">23% off</span>
        </button>
      </div>

      {/* Main Container */}
      <div className="mt-10 w-full max-w-5xl grid md:grid-cols-2 gap-6">
        {/* Left - Core Package */}
        <div className="bg-white shadow rounded-xl p-6 border">
          <h2 className="text-xl font-bold">Core Package (Required)</h2>
          <p className="text-green-600 text-sm mt-1">
            Bundle & Save: Add-ons are only $30/month when bundled (normally
            $69/month each)
          </p>

          <div className="mt-6 flex justify-between items-center">
            <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm">
              PRO+ CORE
            </span>
            <p className="text-xl font-bold text-gray-800">$69/month</p>
          </div>

          <ul className="mt-6 space-y-3">
            {[
              "Everything from Starter Plan",
              "Personal Website Analytics",
              "AI Powered Analytics",
              "Advanced Listing Distribution",
              "Google Partnership Tools",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <CheckOutlined />
                {item}
              </li>
            ))}
          </ul>

          {/* Add-ons */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold">
              Build Your Bundle Add-Ons{" "}
              <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                ADD ONS
              </span>
            </h3>
          </div>
        </div>

        {/* Right - Bundle Summary */}
        <div className="bg-white shadow rounded-xl p-6 border">
          <h2 className="font-semibold text-gray-700">Bundle Summary</h2>

          <div className="mt-4 flex justify-between text-gray-700">
            <span>PRO+</span>
            <span>$69/month</span>
          </div>

          {/* Promo Code */}
          <div className="mt-6 flex">
            <input
              type="text"
              placeholder="Enter promo code"
              className="flex-1 border rounded-l-lg px-3 py-2 text-sm focus:outline-none"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-r-lg text-sm">
              Apply
            </button>
          </div>

          <div className="mt-6 flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>$69/month</span>
          </div>

          <div className="mt-2 flex justify-between font-bold text-lg">
            <span>Total (Annual Commit)</span>
            <span>$69/month</span>
          </div>

          <button className="mt-6 w-full bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-800">
            🚀 Launch Your Bundle Now
          </button>
        </div>
      </div>
    </div>
  );
}
