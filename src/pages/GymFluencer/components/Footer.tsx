const Footer = () => {
    return (
        <section className='bg-black w-auto flex flex-col items-center justify-between pt-16 pb-10 px-24  gap-8'>
            <a className='h-12'>
                <img
                    decoding="async"
                    src="https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg" alt="Logo"
                    className="block w-full h-full rounded-inherit object-cover object-center"
                />
            </a>
            <p className="text-[20px] lg:w-80 font-orbitron font-semibold leading-[150%] text-center text-[#969696]">
                Where Fitness Meets Social Connection!
            </p>
            <div className='p-4 px-5 border border-white/10 flex gap-2 bg-[#171717] w-fit rounded-xl items-center'>
                <div className='w-6 h-6'>
                    <img
                        decoding="async"
                        className='block w-full h-full object-center object-cover'
                        src="https://framerusercontent.com/images/dzy2fU5uUTG4Qc1EQfhDcDYbU4.svg"
                        alt="" />
                </div>
                <div>
                    <p className="text-[16px] font-spacegrotesk font-medium leading-[150%] text-center text-white">
                        hello@gym.birlaventures.com
                    </p>
                </div>
            </div>
            <div className='flex items-center gap-6 py-10'>
                <div>
                    <a href="">
                        <p className="text-[16px] font-orbitron font-medium leading-[150%] text-center text-[#969696] hover:text-white transition-all duration-300">
                            Home
                        </p>
                    </a>
                </div>
                <div className="w-1 h-1 rounded-full bg-[#969696] opacity-50" />
                <div>
                    <a href="">
                        <p className="text-[16px] font-orbitron font-medium leading-[150%] text-center text-[#969696] hover:text-white transition-all duration-300">
                            Workout Plan
                        </p>
                    </a>
                </div>
                <div className="w-1 h-1 rounded-full bg-[#969696] opacity-50" />
                <div>
                    <a href="">
                        <p className="text-[16px] font-orbitron font-medium leading-[150%] text-center text-[#969696] hover:text-white transition-all duration-300">
                            Diet Plan
                        </p>
                    </a>
                </div>
                <div className="w-1 h-1 rounded-full bg-[#969696] opacity-50" />
                <div>
                    <a href="">
                        <p className="text-[16px] font-orbitron font-medium leading-[150%] text-center text-[#969696] hover:text-white transition-all duration-300">
                            FAQ's
                        </p>
                    </a>
                </div>
            </div>
            <div className="w-full h-[1px] bg-gray-800"></div>
            <div className="flex w-full justify-between items-center bottom-0">
                <p className="text-[16px] font-orbitron font-medium leading-[150%] text-center text-[#969696] transition-all duration-300">
                    © 2024 GymFluencer. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <div className='h-fit w-fit p-2 bg-[#181818] rounded-lg'>
                        <img
                            decoding="async"
                            loading="lazy"
                            src='https://framerusercontent.com/images/e29n3ck4a9kvBPgl9YhDr9UrVe0.svg'
                            alt=""
                            className="block w-[26px] h-[26px] object-cover object-center"
                        />
                    </div>
                    <div className='h-fit w-fit p-2 bg-[#181818] rounded-lg'>
                        <img
                            decoding="async"
                            loading="lazy"
                            src='https://framerusercontent.com/images/1z5NCIcMnM2ERwz5QuTnWfDS1uc.svg'
                            alt=""
                            className="block w-[26px] h-[26px] object-cover object-center"
                        />
                    </div>
                    <div className='h-fit w-fit p-2 bg-[#181818] rounded-lg'>
                        <img
                            decoding="async"
                            loading="lazy"
                            src='https://framerusercontent.com/images/4I0uO5WpISDay2aPXHK8Kb9HAc.svg'
                            alt=""
                            className="block w-[26px] h-[26px] object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer