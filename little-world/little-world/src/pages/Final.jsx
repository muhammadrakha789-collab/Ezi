import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Btn, Img, Page, Rise } from '../components/Fx'
export default function Final({ c }) {
  useEffect(() => { const t = setTimeout(c.burst, 1500); return () => clearTimeout(t) }, [])
  const f = (d, cls, t) => <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: d, duration: 1 }} className={cls}>{t}</motion.p>
  return (
    <Page className="text-white">
      <Rise e={['💙', '✨', '⭐']} n={14} />
      <motion.div initial={{ scale: .6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2 }} className="rounded-full border-4 border-white/80 p-1 shadow-[0_0_40px_rgba(180,210,255,.8)]">
        <Img s={c.cfg.finalPhoto} n={0} className="h-44 w-44 rounded-full" />
      </motion.div>
      {f(1, 'text-lg', 'No matter how far we are, you will always have a special place in my heart.')}
      {f(2.4, 'font-script text-2xl font-bold', `From ${c.cfg.from} to ${c.cfg.to}, I will always choose you.`)}
      {f(3.8, 'font-script text-4xl font-bold md:text-5xl', 'Happy Birthday, My Sayangkuuu!')}
      {f(5, 'text-2xl font-extrabold tracking-wide', 'I LOVE YOU SO MUCHHH! ❤️')}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.2 }}><Btn onClick={() => c.go(0)}>REPLAY OUR LITTLE STORY</Btn></motion.div>
    </Page>)
}
