"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Pencil } from "lucide-react";

export default function AccountInfo() {
  const [firstName, setFirstName] = useState("James");
  const [lastName, setLastName] = useState("Potter");
  const [email, setEmail] = useState("jamespotter@gmail.com");
  const [phone, setPhone] = useState("(+959) *********");
  const [ageHeight, setAgeHeight] = useState("55 years old / 5 ft 2 in");
  const [genderWeight, setGenderWeight] = useState("Male / 120lb");

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-10">
        <div className="rounded-2xl border border-gray-200 p-10">
          <h1 className="text-3xl font-bold mb-8">Account Information</h1>

          <div className="w-28 h-28 rounded-xl bg-gray-200 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-semibold text-gray-600">First Name</label>
                <button className="flex items-center gap-1 text-sm text-gray-500">
                  <Pencil size={14} />
                  Edit
                </button>
              </div>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600 block mb-1">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600 block mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600 block mb-1">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600 block mb-1">Age / Height</label>
              <input
                type="text"
                value={ageHeight}
                onChange={(e) => setAgeHeight(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600 block mb-1">Gender / Weight</label>
              <input
                type="text"
                value={genderWeight}
                onChange={(e) => setGenderWeight(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}