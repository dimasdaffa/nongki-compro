import Image from "next/image";

const Events = () => {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Recent & Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event Card 1 */}
          <div className="card">
            <Image
              src="https://image.idntimes.com/post/20250808/upload_e8b06d00b2a6f1547d0eb41289abe054_75810987-5352-4991-83a4-1b01eaaa384d.jpeg"
              alt="Roblox Event"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                17 Agustusan: Main Roblox Bareng!
              </h3>
              <p className="text-violet-400 font-semibold mb-3">
                August 17, 2025
              </p>
              <p className="text-gray-400">
                Rayakan hari kemerdekaan dengan mabar Roblox! Ikut berbagai
                mini-game seru dan dapatkan teman baru.
              </p>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="card">
            <Image
              src="https://cdn.discordapp.com/attachments/809387207848230922/1403126923596529786/880626137_78412918885399_1754578042314.png?ex=6899b707&is=68986587&hm=957400c3488b82b65ad36b656e69173b40987720920b52e7b00aabd8f82bab13&"
              alt="Jackbox Party Games"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Jackbox Party Pack Chaos
              </h3>
              <p className="text-violet-400 font-semibold mb-3">
                August 22, 2025
              </p>
              <p className="text-gray-400">
                Get ready to laugh! We're streaming a variety of Jackbox games.
                No purchase necessary to play.
              </p>
            </div>
          </div>
          {/* Event Card 3 */}
          <div className="card">
            <Image
              src="https://cdn.discordapp.com/attachments/809387207848230922/1395788419958837378/3334828089_90856382943671_1752852239435.png?ex=689a0b43&is=6898b9c3&hm=a4770e454832a31782bf6ceb9f0cd90f29bd8e890bcf1af6b472f5621e8262ba&"
              alt="Roblox Event"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Minecraft Creative Build-Off
              </h3>
              <p className="text-violet-400 font-semibold mb-3">
                August 29, 2025
              </p>
              <p className="text-gray-400">
                Team up or go solo in our themed building competition on the
                community Minecraft server.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
