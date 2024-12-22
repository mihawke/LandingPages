export const Navbar = () => {
    return (

        <nav className='flex  w-full items-center justify-between fixed top-0 p-4 py-2.5 pl-5
    border border-white/10 bg-[#0a0a0a]/80 z-50'
    style={{backdropFilter:'blur(10px)'}}
    >
            <a className='h-8'>
                <img
                    decoding="async"
                    sizes="142px"
                    srcSet="https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg?scale-down-to=512 512w,
     https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg?scale-down-to=1024 1024w,
     https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg 1511w"
                    src="https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg" alt="Logo"
                    className="block w-full h-full rounded-inherit object-cover object-center"
                />
            </a>
            <div className='flex items-center gap-6'>
                <div>
                    <a href="">
                        <p className="text-[16px] font-orbitron font-medium leading-[150%] text-center text-[#969696] hover:text-[#ea0201] transition-all duration-300">
                            Home
                        </p>
                    </a>
                </div>
                <div>
                    <a href="">
                        <p className="text-[16px] font-orbitron font-medium leading-[150%] text-center text-[#969696] hover:text-[#ea0201] transition-all duration-300">
                            About
                        </p>
                    </a>
                </div>
                <div>
                    <a href="">
                        <p className="text-[16px] font-orbitron font-medium leading-[150%] text-center text-[#969696] hover:text-[#ea0201] transition-all duration-300">
                            Our Services
                        </p>
                    </a>
                </div>
                <div>
                    <a href="">
                        <p className="text-[16px] font-orbitron font-medium leading-[150%] text-center text-[#969696] hover:text-[#ea0201] transition-all duration-300">
                            Benifits
                        </p>
                    </a>
                </div>
                <div>
                    <a href="">
                        <p className="text-[16px] font-orbitron font-medium leading-[150%] text-center text-[#969696] hover:text-[#ea0201] transition-all duration-300">
                            Blogs
                        </p>
                    </a>
                </div>
                <div>
                    <a href="">
                        <p className="text-[16px] font-orbitron font-medium leading-[150%] text-center text-[#969696] hover:text-[#ea0201] transition-all duration-300">
                            Contact
                        </p>
                    </a>
                </div>
            </div>
            <div>
                <button className='px-6 py-3.5 text-[16px] text-white rounded-full font-orbitron font-semibold leading-[120%] text-center bg-[#ea0201]'>
                    Join us now
                </button>
            </div>
        </nav>
    )
}
