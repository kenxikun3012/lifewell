"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BMICalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<string | null>(null);

  const calculateBMI = () => {
    const totalInches = Number(heightFt) * 12 + Number(heightIn);
    const heightMeters = totalInches * 0.0254;
    const weightKg = Number(weight) * 0.453592;

    if (heightMeters > 0 && weightKg > 0) {
      const result = weightKg / (heightMeters * heightMeters);
      setBmi(result.toFixed(1));
    }
  };

  const clearForm = () => {
    setAge("");
    setGender("male");
    setHeightFt("");
    setHeightIn("");
    setWeight("");
    setBmi(null);
  };

  const classifications = [
    { label: "Severe Thinness", range: "< 16" },
    { label: "Moderate Thinness", range: "16 - 17" },
    { label: "Mild Thinness", range: "17 - 18.5" },
    { label: "Normal", range: "18.5 - 25" },
    { label: "Overweight", range: "25 - 30" },
    { label: "Obese Class I", range: "30 - 35" },
    { label: "Obese Class II", range: "35 - 40" },
    { label: "Obese Class III", range: "> 40" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <h1 className="text-3xl font-bold text-center my-10">BMI Calculation</h1>

      <div className="max-w-6xl mx-auto px-8 pb-16 grid md:grid-cols-2 gap-8">
        {/* Calculator card */}
        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          <div className="bg-blue-900 text-white text-center py-4 text-lg font-semibold">
            BMI Calculator
          </div>
          <div className="p-8 space-y-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="years"
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Gender</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                  />
                  Female
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Height</label>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                  placeholder="ft"
                  className="border rounded px-3 py-2 w-1/2"
                />
                <input
                  type="number"
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                  placeholder="in"
                  className="border rounded px-3 py-2 w-1/2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Weight (lb)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="lb"
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <button
                onClick={calculateBMI}
                className="bg-green-600 text-white px-6 py-2 rounded font-medium"
              >
                Calculate ▶
              </button>
              <button
                onClick={clearForm}
                className="bg-gray-500 text-white px-6 py-2 rounded font-medium"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Results card */}
        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          <div className="bg-blue-900 text-white text-center py-4 text-lg font-semibold">
            Results
          </div>
          <div className="p-8">
            <p className="font-bold text-lg mb-4">
              BMI = {bmi ? `${bmi} kg/m²` : "—"}
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-6">
              <li>• Healthy BMI range: 18.5 kg/m2 - 25 kg/m2</li>
              <li>• Healthy weight for the height: —</li>
              <li>• BMI Prime: —</li>
              <li>• Ponderal Index: —</li>
            </ul>

            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="text-left p-2">Classification</th>
                  <th className="text-left p-2">BMI range - kg/m²</th>
                </tr>
              </thead>
              <tbody>
                {classifications.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="p-2">{row.label}</td>
                    <td className="p-2">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}