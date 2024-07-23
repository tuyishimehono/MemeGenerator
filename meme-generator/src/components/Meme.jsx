import { useState } from "react"
import memesData from '../../memesData'
export default function Meme(){
    const [memeImage, setMemeImage] = useState("")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        console.log(memeImage)
    }
    return (
        <main>
            <form className="px-10 pt-7">
                <div className="grid grid-cols-2 gap-8">
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
                <div className="pt-8">
                    <button onClick={getMemeImage} className="bg-gradient-to-r from-fuchsia-900 to-fuchsia-600 w-full py-3 rounded-md text-white text-3xl">Get a new meme image  🖼</button>
                </div>
            </form>
            <img src={memeImage} alt="meme image" className="max-w-[100%]"/>
        </main>
    )
}