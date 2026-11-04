import { useState } from 'react'
import { motion } from 'framer-motion'
import { Btn, Page, Img } from '../components/Fx'
export default function Opening({ c }) {
  const [open, setOpen] = useState(false)
  const go = () => { setOpen(true); c.burst(); c.start(); setTimeout(c.next, 2400) }
  return (
    <Page>
      <motion.div initial={{ rotate: -8, scale: .8, opacity: 0 }} animate={{ rotate: -4, scale: 1, opacity: 1 }} transition={{ type: 'spring', delay: .2 }} className="rounded bg-white p-2 pb-6 shadow-xl">
        <Img s={c.cfg.openingPhoto} n={0} className="h-40 w-32 rounded-sm" />
      </motion.div>
      <h1 className="font-script text-4xl font-bold md:text-6xl">HELLOOO, MY SAYANGKUUU! 💙</h1>
      <p className="text-lg">Someone special has prepared a little surprise just for you.</p>
      <p className="text-lg font-semibold">Today is all about you, my favorite girl.</p>
      <div className="relative mt-2 h-28 w-28">
        <motion.div className="absolute -top-2 left-0 z-10 h-7 w-28 rounded-md bg-sky-300" animate={open ? { y: -50, rotate: -25, x: -14 } : { y: [0, -4, 0] }} transition={open ? { duration: .7 } : { repeat: Infinity, duration: 1.6 }} />
        <div className="absolute bottom-0 h-20 w-28 rounded-b-lg bg-sky-400"><div className="mx-auto h-full w-5 bg-white/80" /></div>
        {open && <motion.div className="absolute left-1/2 top-0 -translate-x-1/2 text-4xl" initial={{ y: 0, opacity: 0 }} animate={{ y: -60, opacity: 1, scale: [1, 1.4, 1] }} transition={{ duration: 1 }}>💙</motion.div>}
      </div>
      {!open && <Btn onClick={go}>OPEN YOUR GIFT ✨</Btn>}
    </Page>)
}
