'use client'
import DarkVeil from "@/Reactbits/DarkVeil/DarkVeil";
import Link from "next/link";

const Hero = () => {
  return (
    // Make the section relative to contain the absolute positioned background
    <section className="relative min-h-screen flex flex-col justify-center text-center text-white">
  {/* Background */}
  <div className="absolute inset-0 z-0">
    <DarkVeil />
  </div>

  {/* Konten */}
  <div className="relative z-10 container mx-auto px-6">
    <h1 className="text-4xl md:text-6xl font-black mb-4 brand-glow uppercase tracking-wider">
      Your Next Adventure{" "}
      <span className="bg-gradient-to-r from-purple-300 to-orange-200 bg-clip-text text-transparent">
        Awaits
      </span>
    </h1>
    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
      The ultimate community for meaningful conversations and epic group gaming. Find your squad, share your
      passion, and make lasting memories.
    </p>
    <Link href="#join" className="btn-primary text-lg">
      <i className="fab fa-discord mr-2"></i> Join The Community
    </Link>
  </div>
</section>

  );
};

export default Hero;