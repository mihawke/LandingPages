import { useEffect, useState } from "react";

const PersonalizeSection = () => {
    const [activeCard, setActiveCard] = useState(0);
    const cards = [<CardOne />, <CardTwo />, <CardThree />,<CardOne />, <CardTwo />, <CardThree />,<CardOne />, <CardTwo />, <CardThree />];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % cards.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <section className="flex flex-col min-h-screen w-full px-32 bg-black relative">
            <div className="h-screen min-h-screen absolute inset-0 rounded-inherit">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/80 z-10"></div>
                <img
                    decoding="async"
                    sizes="100vw"
                    src="https://framerusercontent.com/images/2AmDHmcEtUuynT8pV9nsBLAMYeU.png"
                    alt=""
                    className="block w-full h-full rounded-inherit object-cover object-center"
                />
            </div>
            <div className="flex flex-1 w-full z-10 items-center justify-between">
                <div className="flex w-[450px] gap-12 flex-col justify-evenly"
                >
                    <h1 className="text-[36px] font-orbitron font-black leading-[120%] text-left text-[#ea0201] uppercase">
                        Your Personalized Fitness Hub
                    </h1>
                    <p className="text-base font-spacegrotesk font-medium leading-[150%] text-left text-[rgb(220,220,220)]">
                        Personalized workout routines tailored to your goals and preferences
                    </p>
                    <p className="text-base font-spacegrotesk font-medium leading-[150%] text-left text-[rgb(220,220,220)]">
                        Get expert guidance with virtual coaching sessions, available anytime, anywhere.
                    </p>
                    <p className="text-base font-spacegrotesk font-medium leading-[150%] text-left text-[rgb(220,220,220)]">
                        Track your fitness journey with detailed analytics, goal setting, and achievements.
                    </p>
                </div>
                <div className="flex w-[650px] h-[350px] overflow-hidden relative">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${index === activeCard
                                ? 'opacity-100 translate-y-0'
                                : index < activeCard
                                    ? 'opacity-0 translate-y-full'
                                    : 'opacity-0 -translate-y-full'
                                }`}
                        >
                            {card}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PersonalizeSection

const CardOne = () => {
    return (
        <div className="w-full h-full bg-[#0f0f0f]">
            <img src="https://framerusercontent.com/images/y3OEsrPpF9ZlVWFn8txqhafXYY.png"
                alt=""
                className="block w-full h-full object-cover object-top"
            />
        </div>
    )
}
const CardTwo = () => {
    return (
        <div className="w-full h-full bg-[#0f0f0f]">
            <img src="https://framerusercontent.com/images/WaP2lGu3X4zc8d5kCwZyhH3lDI.png"
                alt=""
                className="block w-full h-full object-cover object-top"
            />
        </div>
    )
}
const CardThree = () => {
    return (
        <div className="w-full h-full bg-[#0f0f0f]">
            <img src="https://framerusercontent.com/images/yuM4HjReun2ffEbHgraaGxf4Gl0.png"
                alt=""
                className="block w-full h-full object-cover object-top"
            />
        </div>
    )
}