import React from "react";

interface ImageComponentProps {
    src: string
    label: string
}
const ImageComponent: React.FC<ImageComponentProps> = ({ src, label }) => {
    return (
        <div className="flex w-full h-[650px] items-center justify-center relative overflow-hidden">
            <div className="h-full w-full absolute inset-0 group hover:scale-110 transition-transform duration-500  transform group-hover:scale-110">
                <div className="absolute inset-0 
                bg-gradient-to-b from-black/40 to-black/40
                 z-10"
                ></div>
                <img
                    loading="lazy"
                    className="block w-full h-full object-cover object-center"
                    src={src}
                    alt=""
                />
            </div>
            <div className="flex flex-1 relative justify-center items-center z-10">
                <h1 className="text-2xl font-black font-orbitron text-center text-white">
                    {label}
                </h1>
            </div>
        </div>
    );
};

const ServiceSection = () => {
    return (
        <section className="bg-black">
            <div className='flex flex-col min-h-screen w-full items-center gap-20'>

                <div className='md:px-10 flex h-full flex-col gap-12 items-center justify-center lg:mt-10'>
                    <div className='lg:w-[80%] flex flex-col gap-4 items-center justify-center'>
                        <div className='lg:w-[50%] outline-none flex flex-col justify-start shrink-0 transform-none'>
                            <h1 className="text-[34px] font-orbitron font-black leading-[120%] text-center text-[#ea0201]">
                                OUR SERVICES
                            </h1>
                        </div>
                        <div className="w-full lg:w-[70%] outline-none flex flex-col items-center justify-start shrink-0 transform-none">
                            <p className="text-[20px] font-spacegrotesk font-medium leading-[150%] text-center text-[rgb(220,220,220)]">
                                GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 w-full bg-red-500">
                    <ImageComponent
                        label="TRACK"
                        src="https://framerusercontent.com/images/QCoTSMtHpimr9lp2CmaQOtriXU.png"
                    />
                    <ImageComponent
                        label="ANALYZE"
                        src="https://framerusercontent.com/images/LqURARtPkDasnz8xNZRw6V7LVc.png"
                    />
                    <ImageComponent
                        label="TRAIN"
                        src="https://framerusercontent.com/images/ZiSz1ONCwWlZSSTVgpW4sZm1hI.png"
                    />
                    <ImageComponent
                        label="CONNECT"
                        src="https://framerusercontent.com/images/H2mFADPlDeJZEZVhsqozg6Yc0.jpg"
                    />
                    <ImageComponent
                        label="CHALLENGE"
                        src="https://framerusercontent.com/images/JrDw3jtgKjcQOYfgKW5tggM5U.jpg"
                    />
                </div>
            </div>
        </section>
    )
}

export default ServiceSection