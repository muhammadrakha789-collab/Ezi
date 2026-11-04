import { useState } from 'react'
import { motion } from 'framer-motion'
import { Btn, Page, Rise, Title } from '../components/Fx'
const Ch = ({ girl, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative h-16 w-16 rounded-full bg-orange-100">
      <div className={`absolute -top-1 left-0 h-7 w-16 rounded-t-full ${girl ? 'bg-[#3a2a4a]' : 'bg-[#2a3350]'}`} />
      {girl && <span className="absolute -right-2 top-0 text-lg">🎀</span>}
      <i className="absolute left-4 top-8 h-2 w-2 rounded-full bg-[#1e3a6e]" /><i className="absolute right-4 top-8 h-2 w-2 rounded-full bg-[#1e3a6e]" />
      <i className="absolute left-2 top-10 h-2 w-3 rounded-full bg-pink-300/80" /><i className="absolute right-2 top-10 h-2 w-3 rounded-full bg-pink-300/80" />
      <i className="absolute left-6 top-11 h-2 w-4 rounded-b-full border-b-2 border-[#1e3a6e]" />
    </div>
    <div className={`-mt-1 h-16 w-14 rounded-t-3xl ${girl ? 'bg-indigo-300' : 'bg-sky-400'}`} />
    <small className="mt-1 font-bold">{label}</small>
  </div>)
export default function Hug({ c }) {
  const [h, setH] = useState(false)
  const send = () => { setH(true); c.burst() }
  return (
    <Page>
      {h && <Rise e={['💙', '💗', '🤗']} n={18} />}
      <Title>If I Could Be There Right Now...</Title>
      <div className="relative flex h-44 items-end justify-center">
        <motion.div animate={{ x: h ? 26 : -105 }} transition={{ duration: 1.6, type: 'spring' }}><Ch label={c.cfg.from} /></motion.div>
        <motion.div animate={{ x: h ? -26 : 105 }} transition={{ duration: 1.6, type: 'spring' }}><Ch girl label={c.cfg.to} /></motion.div>
        {h && <motion.div className="absolute -top-2 text-5xl" initial={{ scale: 0 }} animate={{ scale: [0, 1.5, 1] }} transition={{ delay: 1 }}>🤗</motion.div>}
      </div>
      <p className="text-lg font-semibold">Sayangkuuu, I wish I could be there right now.</p>
      <p>I wish I could give you a warm hug, hold your hand, and celebrate this special day right beside you.</p>
      {!h ? <Btn onClick={send}>SEND ME A HUG 🤗</Btn>
        : <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="glass rounded-2xl px-5 py-3 text-lg font-bold">Sending you the biggest hug from {c.cfg.from} to {c.cfg.to}!</motion.p>}
    </Page>)
}
