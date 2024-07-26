import { useState } from "react"
import memesData from '../../memesData'
export default function Meme(){
    const [meme, setMeme] = useState({
        memeImage : "https://i.imgflip.com/3lmzyx.jpg",
    })
    const [formData, setFormData] = useState({
        topText: "",
        bottomText: "",
    })
    
    function handleGetMeme(e) {
        e.preventDefault()
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({...prevMeme, memeImage: memesArray[randomNumber].url}))
    }

    function handleChanges(e){
        e.preventDefault()
        
        const {name, value} = e.target
        setFormData(prevFormData=> ({
            ...prevFormData,
            [name] : value
        }))
        
    }
    return (
        <main>
            <form className="px-10 pt-7" onSubmit={handleGetMeme}>
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
                <button onClick={handleGetMeme} className="bg-gradient-to-r from-fuchsia-900 to-fuchsia-600 w-full py-3 rounded-md text-white text-3xl">Get a new meme image  🖼</button>
            </form>
            <div className="relative">
                <img src={meme.memeImage} alt="meme image" className="max-w-[100%] pt-8 pb-20 px-10"/>
                <h2 className="text-5xl absolute top-9 px-10 bg-white text-center">{formData.topText}</h2>
                <h2 className="text-5xl absolute bottom-20 px-10 bg-white flex items-center">{formData.bottomText}</h2>
            </div>
        </main>
    )
}