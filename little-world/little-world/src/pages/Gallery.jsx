import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Img, Page, Title } from '../components/Fx'
export default function Gallery({ c }) {
  const P = c.cfg.photos, [sel, setSel] = useState(null)
  const mv = d => setSel(s => (s + d + P.length) % P.length)
  return (
    <Page className="!justify-start">
      <Title>Every Picture Has a Story, Every Story Has You.</Title>
      <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3">
        {P.map((p, i) => (
          <motion.button key={i} onClick={() => setSel(i)} initial={{ opacity: 0, y: 40, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: ((i * 7) % 9) - 4 }} viewport={{ once: true }} whileHover={{ scale: 1.08, rotate: 0, zIndex: 5 }} whileTap={{ scale: .95 }} className="rounded bg-white p-2 pb-3 shadow-lg">
            <Img s={p.src} n={i + 1} className="aspect-square w-full rounded-sm" />
            <p className="mt-2 font-hand text-lg leading-5">{p.caption}</p>
          </motion.button>))}
      </div>
      <AnimatePresence>{sel !== null && (
        <motion.div key="lb" className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1f4acc] p-4 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
          <motion.div key={sel} initial={{ scale: .7, rotate: -6 }} animate={{ scale: 1, rotate: 0 }} className="w-full max-w-sm rounded bg-white p-3 pb-5" onClick={e => e.stopPropagation()}>
            <Img s={P[sel].src} n={sel + 1} className="max-h-[65vh] w-full rounded-sm" />
            <p className="mt-3 font-hand text-2xl">{P[sel].caption}</p>
          </motion.div>
          <button className="absolute right-4 top-4 text-white"><X /></button>
          <button className="absolute left-2 text-white" onClick={e => { e.stopPropagation(); mv(-1) }}><ChevronLeft size={36} /></button>
          <button className="absolute right-2 text-white" onClick={e => { e.stopPropagation(); mv(1) }}><ChevronRight size={36} /></button>
        </motion.div>)}</AnimatePresence>
    </Page>)
}
