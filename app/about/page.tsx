import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Heart, PlusSquare, UserRound, MapPin, Phone, Mail } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <h1 className="text-3xl font-bold text-center my-10">About Us</h1>

      <div className="max-w-6xl mx-auto space-y-10 px-8 pb-16">
        {/* Main card */}
        <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-12 pb-0">
            <div className="text-center">
              <Image
                src="/lifewell-logo-removebg-preview.png"
                alt="LifeWell logo"
                width={300}
                height={300}
                className="mx-auto mb-3"
              />
            </div>

            <p className="text-gray-400 absolute top-10 right-10 text-lg">•••</p>

            <p className="text-center mt-10 text-xl text-gray-800 flex items-center justify-center gap-3">
              <Heart size={22} className="text-green-600" fill="currentColor" />
              Let us accompany you on your way to a{" "}
              <span className="text-green-600 font-bold">HEALTHIER</span> Lifestyle
              <Heart size={22} className="text-green-600" fill="currentColor" />
            </p>

            <div className="bg-yellow-50 rounded-xl p-8 mt-10 max-w-xl">
              <p className="text-yellow-700 font-semibold text-lg mb-3">People tend to :</p>
              <ul className="text-yellow-700 space-y-2 text-base">
                <li>→ Forget what they eat</li>
                <li>→ Not know how much calories a food contain</li>
                <li>→ Fail to monitor their lifestyle</li>
              </ul>
            </div>
          </div>

          {/* Bottom gradient strip */}
          <div className="bg-gradient-to-b from-white to-green-100 px-12 py-10 mt-10">
            <div className="flex justify-between items-center">
              <p className="font-bold text-gray-900 text-lg flex items-center gap-3">
                <PlusSquare size={26} className="text-green-700" />
                You provide your Lifestyle
              </p>
              <p className="font-bold text-gray-900 text-lg flex items-center gap-3">
                <UserRound size={26} className="text-green-700" />
                We make it <span className="text-green-600">BETTER</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact card */}
        <div className="bg-gradient-to-b from-white to-green-50 rounded-2xl border border-gray-200 p-12 flex justify-between items-center">
          <div className="space-y-6 text-lg text-gray-800">
            <p className="flex items-center gap-4">
              <MapPin size={24} className="text-blue-600" />
              No.67B, Insein Road,
              <br />
              Mayangone Township, Yangon
            </p>
            <p className="flex items-center gap-4">
              <Phone size={24} className="text-green-600" />
              +95 97890616515, +95 9788660063, +95 1676968
            </p>
            <p className="flex items-center gap-4">
              <Mail size={24} className="text-blue-600" />
              lifewell.contact@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Image
              src="/lifewell-logo.svg"
              alt="LifeWell logo"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}