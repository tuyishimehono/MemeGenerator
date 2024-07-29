import { useEffect, useState } from "react"
import memesData from '../../memesData'
export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        memeImage : "https://i.imgflip.com/3lmzyx.jpg",
    })
    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    })
    
    function getMeme(e) {
        e.preventDefault()
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({...prevMeme, memeImage: memesArray[randomNumber].url}))
    }

    function handleChanges(e){
        // e.preventDefault()
        const {name, value} = e.target
        setMeme(prevMeme=> ({
            ...prevMeme,
            [name] : value
        }))
        
    }
    return (
        <main>
            <form className="pt-7">
                <div className="grid grid-cols-2 gap-8 pb-8">
                    <div className="flex flex-col gap-2">
                        <label className="text-xl flex flex-col gap-2">Top text
                            <input 
                                type="text" 
                                placeholder="Shut up" 
                                className="border-2 rounded-md px-3 h-10"
                                name = "topText"
                                value= {meme.topText}
                                onChange={handleChanges}
                                />
                        </label>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl flex flex-col gap-2">Bottom text
                            <input 
                                type="text" 
                                placeholder="and take my money" 
                                className="border-2 rounded-md px-3 h-10"
                                name = "bottomText"
                                value= {meme.bottomText}
                                onChange={handleChanges}
                                />
                        </label>
                    </div>
                </div>
                <button onClick={getMeme} className="bg-gradient-to-r from-fuchsia-900 to-fuchsia-600 w-full py-3 rounded-md text-white text-3xl">Get a new meme image  🖼</button>
            </form>
            <div className="relative">
                <img src={meme.memeImage} alt="meme image" className="max-w-[100%] pt-8 pb-20"/>
                <h2 className="text-4xl absolute top-9 px-2 uppercase left-14 bg-white font-semibold">{meme.topText}</h2>
                <h2 className="text-4xl absolute bottom-20 px-2 uppercase left-12 bg-white font-semibold">{meme.bottomText}</h2>
            </div>
        </main>
    )
}