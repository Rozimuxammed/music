import React from 'react'

function Music({ allMusic }) {
    return (
        <div className='musics'>
            <div className="container">
                {allMusic.map((item) => {
                    return <div className='music'>
                        <img src={item.img} alt="" />
                        <audio src={item.audio} controls></audio>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Music