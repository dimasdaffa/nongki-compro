import Image from "next/image"

const Events = () => {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Recent & Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event Card 1 */}
          <div className="card">
            <Image
              src=""
              alt="Roblox Event"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">17 Agustusan: Main Roblox Bareng!</h3>
              <p className="text-violet-400 font-semibold mb-3">August 17, 2025</p>
              <p className="text-gray-400">
                Rayakan hari kemerdekaan dengan mabar Roblox! Ikut berbagai mini-game seru dan dapatkan teman baru.
              </p>
            </div>
          </div>
          {/* Event Card 2 */}
          <div className="card">
            <Image
              src=""
              alt="Jackbox Party Games"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Jackbox Party Pack Chaos</h3>
              <p className="text-violet-400 font-semibold mb-3">August 22, 2025</p>
              <p className="text-gray-400">
                Get ready to laugh! We're streaming a variety of Jackbox games. No purchase necessary to play.
              </p>
            </div>
          </div>
          {/* Event Card 3 */}
          <div className="card">
            <Image
              src=""
              alt="Minecraft Build-off"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Minecraft Creative Build-Off</h3>
              <p className="text-violet-400 font-semibold mb-3">August 29, 2025</p>
              <p className="text-gray-400">
                Team up or go solo in our themed building competition on the community Minecraft server.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
