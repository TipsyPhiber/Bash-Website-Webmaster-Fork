"use client";

import { FiUsers, FiMic } from "react-icons/fi";
import { FaDiscord, FaLinkedin } from "react-icons/fa";

export default function GetInvolved() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {/* Card 1: Join Our Discord */}
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center flex flex-col">
          <div className="mx-auto">
            <FaDiscord size={32} className="text-blue-400 mb-4" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">
            Join Our Discord
          </h3>
          <p className="text-gray-300 mb-4 flex-grow">
            Connect with members, ask questions, and stay up-to-date.
          </p>
          <a
            href=""
            className="mt-auto bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Join Now
          </a>
        </div>

        {/* Card 3: Speak at BASH */}
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center flex flex-col">
          <div className="mx-auto">
            <FiMic size={32} className="text-blue-400 mb-4" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Speak at BASH</h3>
          <p className="text-gray-300 mb-4 flex-grow">
            Have an idea for a talk or workshop? Share your knowledge with the
            club.
          </p>
          <a
            href="/sponsors#speak"
            className="mt-auto bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Propose a Talk
          </a>
        </div>

        {/* Card 4: Connect with us on Linkedin */}
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center flex flex-col">
          <div className="mx-auto">
            <FaLinkedin size={32} className="text-blue-400 mb-4" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">
            Connect with us on Linkedin
          </h3>
          <p className="text-gray-300 mb-4 flex-grow">
            Follow our LinkedIn page for updates and major news
          </p>
          <a
            href="https://www.linkedin.com/company/bearkat-association-for-security-and-hacking-ba-h/"
            className="mt-auto bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Connect Here
          </a>
        </div>
      </div>
    </section>
  );
}
