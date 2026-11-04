import { useState } from 'react'
import { motion } from 'framer-motion'
import { Btn, Page, Rise } from '../components/Fx'
export default function Birthday({ c }) {
  const [out, setOut] = useState(false)
  const wish = () => { setOut(true); c.burst() }
  const balloons = ['#7ec8f5', '#a9c4f5', '#c9b8f5', '#bfe3fa', '#5b86d6']
  return (
    <Page>
      <Rise e={['🌸', '💙', '🌼', '✨']} n={14} />
      {balloons.map((b, i) => <motion.div key={i} className="pointer-events-none absolute bottom-0 h-16 w-12 rounded-[50%]" style={{ left: 6 + i * 21 + '%', background: b }} animate={{ y: [0, -40, 0] }} transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}><i className="absolute left-1/2 top-full h-14 w-px bg-white/70" /></motion.div>)}
      <h1 className="font-script text-4xl font-bold md:text-6xl">HAPPY BIRTHDAY, MY SAYANGKUUU! 🎂</h1>
      <p className="text-lg">Today is your day, and I hope it becomes one of your most beautiful memories.</p>
      <div className="relative flex flex-col items-center">
        <div className="flex gap-6 pb-0">{[0, 1, 2].map(k => <div key={k} className="relative flex flex-col items-center"><div className="h-6 w-6">{!out && <motion.div className="mx-auto h-5 w-3 rounded-full bg-amber-300 shadow-[0_0_14px_6px_rgba(252,211,77,.7)]" animate={{ scale: [1, 1.25, .9, 1], rotate: [-4, 4, -4] }} transition={{ duration: .7, repeat: Infinity, delay: k * .15 }} />}{out && <motion.span className="block text-center text-sm" initial={{ y: 0, opacity: 1 }} animate={{ y: -40, opacity: 0 }} transition={{ duration: 1.5 }}>💨</motion.span>}</div><div className="h-10 w-2 rounded bg-white" /></div>)}</div>
        <div className="h-16 w-40 rounded-t-2xl bg-sky-200 [box-shadow:inset_0_10px_0_#fff]" />
        <div className="h-20 w-56 rounded-t-2xl bg-sky-300 [box-shadow:inset_0_10px_0_#fff]" />
        <div className="h-3 w-64 rounded-full bg-white/90" />
      </div>
      {!out ? <Btn onClick={wish}>MAKE A WISH, BABY ✨</Btn>
        : <motion.p initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-2xl px-5 py-3 text-lg font-bold">I hope every beautiful thing in this world finds its way to you.</motion.p>}
    </Page>)
}
