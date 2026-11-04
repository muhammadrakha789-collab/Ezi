import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Heart } from 'lucide-react'
export const R = (a, b) => a + Math.random() * (b - a)

let ac
export const blip = (f = 680) => { try {
  ac ??= new (window.AudioContext || window.webkitAudioContext)()
  const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime
  o.type = 'sine'; o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 1.5, t + .12)
  g.gain.setValueAtTime(.07, t); g.gain.exponentialRampToValueAtTime(.001, t + .2)
  o.connect(g).connect(ac.destination); o.start(); o.stop(t + .2)
} catch {} }

export function Sky({ night }) {
  const stars = useMemo(() => Array.from({ length: 60 }, () => ({ x: R(0, 100), y: R(0, 75), s: R(1, 3), d: R(1.5, 4) })), [])
  const clouds = useMemo(() => Array.from({ length: 5 }, (_, i) => ({ y: 6 + i * 17, w: R(140, 240), d: R(60, 110), del: -R(0, 80) })), [])
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: night ? 'linear-gradient(#0e1c4a,#264080 60%,#6a8cd0)' : 'linear-gradient(#86c9f4,#bde2fa 55%,#eaf6ff)', transition: 'background 1.2s' }}>
      {stars.slice(0, night ? 60 : 28).map((s, i) => <motion.i key={i} className="absolute rounded-full bg-white" style={{ left: s.x + '%', top: s.y + '%', width: s.s, height: s.s }} animate={{ opacity: [.2, 1, .2] }} transition={{ duration: s.d, repeat: Infinity }} />)}
      <div className="absolute right-[9%] top-[7%] h-14 w-14 rounded-full bg-[#fffbe3]" style={{ boxShadow: '0 0 40px 8px rgba(255,251,227,.7), inset -8px -3px 0 #f4ecc0' }} />
      {clouds.map((c, i) => <motion.div key={i} className="absolute rounded-full bg-white/80 blur-md" style={{ top: c.y + '%', width: c.w, height: c.w * .32, opacity: night ? .15 : .85 }} initial={{ x: '-30vw' }} animate={{ x: '130vw' }} transition={{ duration: c.d, delay: c.del, repeat: Infinity, ease: 'linear' }} />)}
    </div>)
}

export function Rise({ e = ['💙'], n = 9 }) {
  const it = useMemo(() => Array.from({ length: n }, (_, k) => ({ x: R(0, 100), d: R(7, 13), del: R(0, 8), s: R(14, 28), e: e[k % e.length], dx: R(-30, 30) })), [])
  return <div className="pointer-events-none fixed inset-0 overflow-hidden">{it.map((o, k) =>
    <motion.span key={k} className="absolute" style={{ left: o.x + '%', bottom: -40, fontSize: o.s }} animate={{ y: [0, -(window.innerHeight + 80)], x: [0, o.dx], opacity: [0, .8, 0] }} transition={{ duration: o.d, delay: o.del, repeat: Infinity, ease: 'linear' }}>{o.e}</motion.span>)}</div>
}

export function Confetti({ n }) {
  const p = useMemo(() => n ? Array.from({ length: 80 }, () => ({ x: R(0, 100), d: R(2.2, 4.5), dx: R(-12, 12), r: R(-720, 720), c: ['#7ec8f5', '#bfe3fa', '#a9a8f0', '#fff', '#5b86d6', '#ffd6e8'][Math.floor(R(0, 6))], w: R(6, 11) })) : [], [n])
  return <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">{p.map((o, k) =>
    <motion.i key={n + '-' + k} className="absolute block rounded-sm" style={{ left: o.x + '%', top: -20, width: o.w, height: o.w * 1.6, background: o.c }} initial={{ y: 0, opacity: 1 }} animate={{ y: window.innerHeight + 60, x: o.dx + 'vw', rotate: o.r, opacity: [1, 1, 0] }} transition={{ duration: o.d, ease: 'easeIn' }} />)}</div>
}

export const Btn = ({ className = '', ...p }) => <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: .94 }} className={`rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 px-7 py-3 font-bold text-white shadow-lg shadow-sky-400/40 ${className}`} {...p} />

export const Page = ({ children, className = '' }) => (
  <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: .6 }} className="absolute inset-0 overflow-y-auto scroll-smooth">
    <div className={`mx-auto flex min-h-full max-w-3xl flex-col items-center justify-center gap-5 px-5 pb-28 pt-16 text-center ${className}`}>{children}</div>
  </motion.section>)

export const Title = ({ children, className = '' }) => <h2 className={`font-script text-4xl font-bold leading-tight text-[#1e3a6e] drop-shadow-[0_2px_8px_rgba(255,255,255,.8)] md:text-5xl ${className}`}>{children}</h2>

export function Img({ s, n, className = '' }) {
  const [e, setE] = useState(!s)
  return e
    ? <div className={`grid place-items-center bg-gradient-to-br from-sky-100 to-indigo-100 text-sky-400 ${className}`}><div className="flex flex-col items-center text-xs"><Heart size={26} /> Foto #{n}</div></div>
    : <img src={s} alt="" onError={() => setE(true)} className={`object-cover ${className}`} />
}
