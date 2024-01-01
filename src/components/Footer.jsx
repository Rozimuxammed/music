import React from 'react'
import { MdMusicNote } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaLink, FaInstagram } from "react-icons/fa6";
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="logo">
                    <MdMusicNote className='logo_music' /> <h1>Music</h1>
                </div>
                <div className="links">
                    <div className="link">
                        <FaTelegram /> <a href="https://web.telegram.org/a/">telegram</a>
                    </div>
                    <div className="link">
                        <FaLink /> <a blank href="https://t.me/lovestory_rs">chanel</a>
                    </div>
                    <div className="link">
                        <FaInstagram /> <a href="https://www.instagram.com/rz.muxammed/">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer