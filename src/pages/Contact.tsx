import React from 'react';

export default function Contact() {
  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white/70"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white/70"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white/70"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white p-3 rounded hover:bg-teal-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}