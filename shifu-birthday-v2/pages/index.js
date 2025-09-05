import Head from 'next/head'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })
  const [balloons, setBalloons] = useState([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    const interval = setInterval(() => {
      setBalloons((prev) => [...prev, Math.random()])
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ textAlign: "center", background: "#ffebf0", height: "100vh", overflow: "hidden" }}>
      <Head>
        <title>Happy Birthday Shifu ❤️</title>
      </Head>

      <audio autoPlay loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      <Confetti width={windowSize.width} height={windowSize.height} />

      <h1 style={{ fontSize: "2.5rem", marginTop: "20px", color: "#e60073" }}>
        🎂 Happy Birthday Shifu ❤️ 🎉
      </h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "50px", marginTop: "30px" }}>
        <img src="/love.png" alt="Love" width="250" />
        <img src="/heart.png" alt="Heart" width="250" />
      </div>

      <p style={{ fontSize: "1.5rem", marginTop: "20px", color: "#cc0052" }}>
        You make my world brighter every single day 💖
      </p>

      {balloons.map((b, i) => (
        <div key={i} style={{
          position: "absolute",
          bottom: "-50px",
          left: `${Math.random() * 100}%`,
          fontSize: "2rem",
          animation: "rise 8s linear infinite",
        }}>
          🎈
          <style jsx>{`
            @keyframes rise {
              0% { transform: translateY(0); opacity: 1; }
              100% { transform: translateY(-110vh); opacity: 0; }
            }
          `}</style>
        </div>
      ))}
    </div>
  )
}
