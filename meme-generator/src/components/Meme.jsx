import { useState } from "react"
import memesData from '../../memesData'
export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText:"",
        memeImage : "https://i.imgflip.com/3lmzyx.jpg"
    })
    
    function getMeme(e) {
        e.preventDefault()

        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({...prevMeme, memeImage: memesArray[randomNumber].url}))
    }
    return (
        <main>
            <form className="px-10 pt-7">
                <div className="grid grid-cols-2 gap-8 pb-8">
                    <div className="flex flex-col gap-2">
                        <label className="text-xl flex flex-col gap-2">Top text
                            <input type="text" placeholder="Shut up" className="border-2 rounded-md px-3 h-10"/>
                        </label>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl flex flex-col gap-2">Bottom text
                            <input type="text" placeholder="and take my money" className="border-2 rounded-md px-3 h-10"/>
                        </label>
                    </div>
                </div>
                <button onClick={getMeme} className="bg-gradient-to-r from-fuchsia-900 to-fuchsia-600 w-full py-3 rounded-md text-white text-3xl">Get a new meme image  🖼</button>
            </form>
            <img src={meme.memeImage} alt="meme image" className="max-w-[100%] pt-8 pb-20 flex place-content-centercontent-center"/>
        </main>
    )
}