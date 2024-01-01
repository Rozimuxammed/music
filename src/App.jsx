import { useState } from 'react'
import './App.css'
import Music from './components/Music'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const allMusic = [
    {
      img: "public/imgs/img1.jpg",
      audio: "public/audio/Джованна.mp3"
    },
    {
      img: "public/imgs/img2.jpg",
      audio: "public/audio/Тем,_кто_с_нами_АК_47_feat_Guf_Ноггано.mp3"
    },
    {
      img: "public/imgs/img3.jpg",
      audio: "public/audio/Фир - Ночь [ @GangstaLifee ].mp3"
    },
    {
      img: "public/imgs/img4.jpg",
      audio: "public/audio/Maga - Последний роман.mp3"
    },
    {
      img: "public/imgs/img5.jpg",
      audio: "public/audio/фразами_к_тебе_Low_Bass_by_Minzdraw_28,29Hz_Mania.mp3"
    },
    {
      img: "public/imgs/img6.jpg",
      audio: "public/audio/Axelancexld_Yeniden.mp3"
    },
    {
      img: "public/imgs/img7.jpg",
      audio: "public/audio/Dusha_Music_files.mp3"
    },
    {
      img: "public/imgs/img8.jpg",
      audio: "public/audio/doc_2024-01-01_14-30-03.mp3"
    },
    {
      img: "public/imgs/img9.jpg",
      audio: "public/audio/920347195.mp3"
    },
    {
      img: "public/imgs/img10.jpg",
      audio: "public/audio/2_5235971905881641639.mp3"
    }
  ]
  const [mode, setMode] = useState(false)

  return (
    <div className={mode ? "light" : "app"}>
      <Navbar mode={mode} setMode={setMode} />
      <Music allMusic={allMusic} />
      <Footer />
    </div>
  )
}

export default App
