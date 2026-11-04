import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play, Volume2 } from 'lucide-react'
import { config } from './config'
import { Confetti, Rise, Sky, blip } from './components/Fx'
import Opening from './pages/Opening'
import Distance from './pages/Distance'
import Game from './pages/Game'
import Gallery from './pages/Gallery'
import Timeline from './pages/Timeline'
import Birthday from './pages/Birthday'
import Hug from './pages/Hug'
import Letter from './pages/Letter'
import Final from './pages/Final'
const pages = [Opening, Distance, Game, Gallery, Timeline, Birthday, Hug, Letter, Final]
export default function App() {
  const [i, setI] = useState(0), [n, setN] = useState(0), [vol, setVol] = useState(.6), [play, setPlay] = useState(false)
  const a = useRef(null)
  useEffect(() => { if (a.current) a.current.volume = vol }, [vol])
  const start = () => a.current?.play().catch(() => {})
  const toggle = () => (play ? a.current.pause() : start())
  const c = { cfg: config, start, go: setI, next: () => setI(x => Math.min(x + 1, pages.length - 1)), burst: () => setN(x => x + 1) }
  const P = pages[i]
  return (
    <div className="h-full" onClickCapture={e => e.target.closest('button') && blip()}>
      <Sky night={i >= 7} />
      <Rise n={7} />
      <audio ref={a} src={config.music} loop preload="auto" onPlay={() => setPlay(true)} onPause={() => setPlay(false)} />
      <AnimatePresence mode="wait"><P key={i} c={c} /></AnimatePresence>
      <Confetti n={n} />
      {i > 0 && <>
        <div className="glass fixed right-3 top-3 z-40 flex items-center gap-2 rounded-full px-3 py-2">
          <button onClick={toggle} aria-label="play/pause">{play ? <Pause size={18} /> : <Play size={18} />}</button>
          <Volume2 size={16} /><input type="range" min="0" max="1" step=".05" value={vol} onChange={e => setVol(+e.target.value)} className="w-16 accent-sky-500" />
        </div>
        <div className="glass fixed inset-x-3 bottom-3 z-40 mx-auto flex max-w-md items-center gap-3 rounded-full px-3 py-2">
          <button disabled={i < 2} onClick={() => setI(i - 1)} className="disabled:opacity-30"><ChevronLeft /></button>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/60"><div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 transition-all duration-500" style={{ width: (i / (pages.length - 1)) * 100 + '%' }} /></div>
          <button disabled={i >= pages.length - 1} onClick={c.next} className="disabled:opacity-30"><ChevronRight /></button>
        </div>
      </>}
    </div>)
}
