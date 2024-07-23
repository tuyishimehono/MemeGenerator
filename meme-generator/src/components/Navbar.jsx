import MemeLogo from '/images/meme-logo.svg'

export default function Navbar() {
    return (
        <nav className='bg-gradient-to-r from-fuchsia-900 to-fuchsia-600 flex place-items-center justify-between flex-wrap px-10 py-6'>
            <div className='flex gap-3'>
                <img src={MemeLogo} alt="meme logo" />
                <h2 className='text-white text-4xl font-bold'>Meme Generator</h2>
            </div>
            <div>
                <h4 className='text-white text-lg'>React Course - Project 3</h4>
            </div>
        </nav>
    )
}