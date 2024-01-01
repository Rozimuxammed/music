import React, { useState } from 'react'
import { MdMusicNote } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { IoMoonSharp } from "react-icons/io5";
function Navbar({ setMode, mode }) {
    const [icon, setIcon] = useState(false)
    const changeicon = () => {
        setMode(!mode)
        setIcon(!icon)
    }
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <MdMusicNote className='logo_music' /> <h1>Music</h1>
                </div>
                <div className="link">
                    {icon ? <IoMoonSharp onClick={changeicon} className='logo_mode' /> : <WiDaySunny onClick={changeicon} className='logo_mode' />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar