import { motion } from 'framer-motion'
import { Img, Page, Title } from '../components/Fx'
export default function Timeline({ c }) {
  return (
    <Page className="!justify-start">
      <Title>From Strangers to My Favorite Person.</Title>
      <div className="relative w-full max-w-xl border-l-4 border-dotted border-white/80 pl-6 text-left">
        {c.cfg.timeline.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass relative mb-8 rounded-3xl p-4">
            <span className="absolute -left-[2.15rem] top-5 text-xl">💙</span>
            <span className="rounded-full bg-sky-200 px-3 py-1 text-xs font-bold">{t.date}</span>
            <h3 className="mt-2 font-script text-2xl font-bold">{t.title}</h3>
            {t.photo && <Img s={t.photo} n={i} className="my-2 h-40 w-full rounded-xl" />}
            <p>{t.text}</p>
          </motion.div>))}
      </div>
    </Page>)
}
