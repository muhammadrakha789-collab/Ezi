import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Btn, Page, Title } from '../components/Fx'
export default function Game({ c }) {
  const Q = c.cfg.quiz
  const [i, setI] = useState(0), [pick, setPick] = useState(null), [score, setScore] = useState(0), [done, setDone] = useState(false), [msg, setMsg] = useState('')
  const q = Q[i], ok = pick !== null && (q.answer === null || pick === q.answer)
  const choose = k => {
    if (ok) return
    setPick(k)
    if (q.answer === null || k === q.answer) { c.burst(); setScore(s => s + 1) }
    else setMsg(q.wrong[Math.floor(Math.random() * q.wrong.length)])
  }
  const next = () => { if (i + 1 >= Q.length) { setDone(true); c.burst() } else { setI(i + 1); setPick(null) } }
  if (done) return (
    <Page>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} className="text-7xl">🎉</motion.div>
      <Title>YAYYYY! YOU DID IT, MY SAYANGKUUU!</Title>
      <p className="text-lg">You know our little story so well. Here's another surprise for you.</p>
      <p className="font-bold">Score: {score}/{Q.length} 💗</p>
      <Btn onClick={c.next}>SHOW ME 💙</Btn>
    </Page>)
  return (
    <Page>
      <Title>Let's Test Your Memory, Sayangkuuu! 💗</Title>
      <div className="h-3 w-full max-w-md overflow-hidden rounded-full bg-white/60"><motion.div className="h-full bg-gradient-to-r from-sky-400 to-indigo-400" animate={{ width: ((i + (ok ? 1 : 0)) / Q.length) * 100 + '%' }} /></div>
      <p className="text-sm font-semibold">Question {i + 1} / {Q.length} · Score {score}</p>
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="glass w-full max-w-md rounded-3xl p-5">
          <h3 className="mb-4 text-xl font-bold">{q.q}</h3>
          <div className="grid gap-3">{q.options.map((o, k) => {
            const good = pick === k && ok, bad = pick === k && !ok
            return <motion.button key={k} onClick={() => choose(k)} whileTap={{ scale: .96 }} animate={bad ? { x: [0, -8, 8, -6, 6, 0] } : {}} className={`rounded-2xl px-4 py-3 text-left font-semibold ${good ? 'bg-sky-400 text-white' : bad ? 'bg-rose-200' : 'bg-white/70 hover:bg-white'}`}>{good ? '✅ ' : bad ? '😝 ' : ''}{o}</motion.button>
          })}</div>
          {pick !== null && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 font-semibold">{ok ? q.right : msg}</motion.p>}
          {pick !== null && (ok ? <Btn className="mt-4" onClick={next}>{i + 1 >= Q.length ? 'FINISH 🎉' : 'NEXT 💗'}</Btn> : <Btn className="mt-4" onClick={() => setPick(null)}>TRY AGAIN 🔁</Btn>)}
        </motion.div>
      </AnimatePresence>
    </Page>)
}
