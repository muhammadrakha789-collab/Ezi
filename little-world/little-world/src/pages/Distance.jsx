import { useState } from 'react'
import { motion } from 'framer-motion'
import { Page, Title } from '../components/Fx'
const T = [300, 230], D = [90, 80], K = [250, 90]
const pt = t => [0, 1].map(i => (1 - t) ** 2 * T[i] + 2 * (1 - t) * t * K[i] + t * t * D[i])
const pts = Array.from({ length: 21 }, (_, i) => pt(i / 20))
export default function Distance({ c }) {
  const [arr, setArr] = useState(false)
  return (
    <Page>
      <Title>From {c.cfg.from} to {c.cfg.to} — Our Distance, One Heart</Title>
      <div className="glass w-full max-w-md rounded-3xl p-3">
        <svg viewBox="0 0 400 300" className="w-full">
          <ellipse cx="110" cy="110" rx="95" ry="38" transform="rotate(40 110 110)" fill="#dbeeff" />
          <ellipse cx="290" cy="240" rx="80" ry="14" transform="rotate(-8 290 240)" fill="#dbeeff" />
          <motion.path d={`M${T} Q${K} ${D}`} fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4.5, delay: 1, ease: 'linear' }} style={{ filter: 'drop-shadow(0 0 6px #7ec8f5)' }} />
          {[T, D].map((p, i) => <g key={i}><motion.circle cx={p[0]} cy={p[1]} r="7" fill="#5b86d6" animate={{ r: [6, 10, 6] }} transition={{ repeat: Infinity, duration: 1.8 }} /><text x={p[0]} y={p[1] + (i ? -16 : 26)} textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e3a6e">📍 {i ? c.cfg.to : c.cfg.from}</text></g>)}
          <motion.g initial={{ x: T[0], y: T[1] }} animate={{ x: pts.map(p => p[0]), y: pts.map(p => p[1]) }} transition={{ duration: 4.5, delay: 1, ease: 'linear' }} onAnimationComplete={() => { setArr(true); c.burst() }}>
            <text fontSize="28" textAnchor="middle" transform="scale(-1,1)">✈️</text>
          </motion.g>
          {arr && <motion.text x={D[0]} y={D[1] - 4} fontSize="26" textAnchor="middle" initial={{ opacity: 0, y: 0 }} animate={{ opacity: [0, 1, 0], y: -30 }} transition={{ duration: 2, repeat: 2 }}>💙</motion.text>}
        </svg>
      </div>
      <p className="font-semibold">📍 {c.cfg.from.toUpperCase()} — WHERE I AM. &nbsp; 📍 {c.cfg.to.toUpperCase()} — WHERE YOU ARE.</p>
      <p className="font-script text-2xl">Different cities, but always the same heart.</p>
      <p>Even though distance keeps us apart, you are always close to me.</p>
      <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: arr ? 1 : 0, y: arr ? 0 : 12 }} className="glass min-h-14 rounded-2xl px-5 py-3 font-bold">If I could choose one place to be today, it would be right beside you.</motion.p>
    </Page>)
}
