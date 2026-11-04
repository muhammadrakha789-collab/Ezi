import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Btn, Page, Title } from '../components/Fx'
export default function Letter({ c }) {
  const L = c.cfg.letter
  const [st, setSt] = useState(0), [back, setBack] = useState(false), [n, setN] = useState(0)
  const scrollArea = useRef(null)
  const scrollTarget = useRef(0)
  const scrollFrame = useRef(0)
  const open = () => { setSt(1); setTimeout(() => setBack(true), 450); setTimeout(() => setSt(2), 2400) }
  useEffect(() => {
    if (st !== 2 || n >= L.length) return
    const t = setTimeout(() => setN(x => x + 1), n === 0 ? 500 : 1100 + L[n - 1].length * 20)
    return () => clearTimeout(t)
  }, [st, n])
  useEffect(() => {
    const area = scrollArea.current
    if (!area) return

    const onWheel = event => {
      if (event.ctrlKey || area.scrollHeight <= area.clientHeight) return

      const scale = event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? 16
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE ? area.clientHeight : 1
      const delta = event.deltaY * scale * 0.65
      const maxScroll = area.scrollHeight - area.clientHeight
      if (!scrollFrame.current) scrollTarget.current = area.scrollTop
      const target = Math.max(0, Math.min(maxScroll, scrollTarget.current + delta))
      if (target === scrollTarget.current && (target === 0 || target === maxScroll)) return

      event.preventDefault()
      scrollTarget.current = target
      if (scrollFrame.current) return

      const animateScroll = () => {
        const remaining = scrollTarget.current - area.scrollTop
        if (Math.abs(remaining) < 0.5) {
          area.scrollTop = scrollTarget.current
          scrollFrame.current = 0
          return
        }
        area.scrollTop += remaining * 0.12
        scrollFrame.current = requestAnimationFrame(animateScroll)
      }
      scrollFrame.current = requestAnimationFrame(animateScroll)
    }

    area.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      area.removeEventListener('wheel', onWheel)
      cancelAnimationFrame(scrollFrame.current)
    }
  }, [st])
  const fin = n >= L.length
  if (st < 2) return (
    <Page>
      <Title>A Letter From My Heart 💌</Title>
      <div style={{ perspective: 900 }} className="relative mt-10 h-48 w-72 cursor-pointer" onClick={st === 0 ? open : undefined}>
        <div className="absolute inset-0 rounded-lg bg-sky-300 shadow-xl" />
        <motion.div className="absolute left-3 right-3 top-2 z-10 h-40 rounded bg-white" animate={{ y: st ? -80 : 0 }} transition={{ delay: .9, duration: 1.1 }} />
        <div className="absolute inset-0 z-20 flex items-end justify-center rounded-lg bg-sky-200 pb-6 font-script text-xl font-bold" style={{ clipPath: 'polygon(0 0,50% 55%,100% 0,100% 100%,0 100%)' }}>To My Sayangkuuu, With All My Love.</div>
        <motion.div className="absolute left-0 top-0 h-28 w-full bg-sky-400" style={{ clipPath: 'polygon(0 0,100% 0,50% 100%)', transformOrigin: 'top', zIndex: back ? 5 : 30 }} animate={{ rotateX: st ? 180 : 0 }} transition={{ duration: .9 }} />
      </div>
      {st === 0 && <motion.p animate={{ opacity: [.4, 1, .4] }} transition={{ repeat: Infinity, duration: 1.8 }} className="text-sm font-semibold">💌 tap the envelope</motion.p>}
    </Page>)
  return (
    <motion.section ref={scrollArea} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .9 }} className="absolute inset-0 overflow-y-auto px-3 pb-28 pt-14">
      {!fin && <button onClick={() => setN(L.length)} className="glass fixed right-3 top-3 z-30 rounded-full px-4 py-2 text-sm font-bold">Buka seluruh surat</button>}
      <div className="paper relative mx-auto max-w-xl rounded-xl border-2 border-sky-200 px-6 py-8 text-left shadow-2xl md:px-10">
        <span className="absolute right-3 top-3 text-xl">🌸</span><span className="absolute bottom-3 left-3 text-xl">💙</span>
        {L.slice(0, n).map((p, i) => <motion.p key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mb-5 whitespace-pre-line font-hand text-[1.4rem] leading-[1.45] text-[#1e3a6e]">{p}</motion.p>)}
      </div>
      {fin && <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mt-8 text-center"><Btn onClick={c.next}>ONE LAST SURPRISE 💙</Btn></motion.div>}
    </motion.section>)
}
