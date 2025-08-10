const About = () => {
    return (
      <section 
        id="about" 
        className="py-20 bg-gray-900"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(10,0,20,0.9)",
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="section-title">What We're About</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="card p-8">
              <i className="fas fa-comments text-violet-400 text-5xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">Real Conversations</h3>
              <p className="text-gray-400">
                We're more than just LFG. We're a place for genuine connection, where you can chat about games, hobbies,
                and life.
              </p>
            </div>
            <div className="card p-8">
              <i className="fas fa-users text-violet-400 text-5xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">Group Gaming</h3>
              <p className="text-gray-400">
                From casual party games to competitive team play, we organize regular events for everyone to enjoy
                together.
              </p>
            </div>
            <div className="card p-8">
              <i className="fas fa-heart text-violet-400 text-5xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">Inclusive Community</h3>
              <p className="text-gray-400">
                We pride ourselves on being a friendly and welcoming space for gamers of all backgrounds and skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
