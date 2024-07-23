export default function Meme(){
    return (

        <main>
            <form className="px-10 pt-7">
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                        <label className="text-xl">Top text</label>
                        <input type="text" placeholder="Shut up" className="border-2 rounded-md px-3 h-10"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl">Bottom text</label>
                        <input type="text" placeholder="and take my money" className="border-2 rounded-md px-3 h-10"/>
                    </div>
                </div>
                <div className="pt-8">
                    <button className="bg-gradient-to-r from-fuchsia-900 to-fuchsia-600 w-full py-3 rounded-md text-white text-3xl">Get a new meme image  🖼</button>
                </div>
            </form>
        </main>
    )
}