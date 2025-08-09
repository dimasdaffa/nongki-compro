"use client"

import { useState } from "react"
import Link from "next/link"

const Join = () => {
  const [copySuccess, setCopySuccess] = useState(false)
  const discordInviteLink = "discord.gg/YourInviteCode"

  const handleCopy = () => {
    navigator.clipboard
      .writeText(discordInviteLink)
      .then(() => {
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
      })
      .catch((err) => console.error("Failed to copy:", err))
  }

  return (
    <section id="join" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="section-title">Become a Part of Nongki</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Ready to join? It's easy. Our Discord server is open to everyone who shares our passion for gaming and
          community.
        </p>
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-6 flex items-center justify-between">
          <span id="discord-link" className="text-gray-400 font-mono text-sm md:text-base">
            {discordInviteLink}
          </span>
          <button
            onClick={handleCopy}
            className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            {copySuccess ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className={`mt-4 text-green-400 transition-opacity ${copySuccess ? "opacity-100" : "opacity-0"}`}>
          Copied to clipboard!
        </div>
        <Link href={`https://${discordInviteLink}`} target="_blank" className="btn-primary inline-block mt-8 text-lg">
          <i className="fab fa-discord mr-2"></i> Open Discord
        </Link>
      </div>
    </section>
  )
}

export default Join
