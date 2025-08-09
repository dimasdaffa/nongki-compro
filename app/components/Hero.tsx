import Link from "next/link"

const Hero = () => {
  return (
    <section className="hero-bg py-24 md:py-40 text-center text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-black mb-4 brand-glow uppercase tracking-wider">
          Your Next Adventure Awaits
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
  )
}

export default Hero
