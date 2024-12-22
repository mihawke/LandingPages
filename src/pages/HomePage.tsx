import { Link } from "react-router-dom"


const HomePage = () => {
    return (
        <div className="flex flex-1 flex-col items-center">
            <h1 className="text-4xl">Landing Pages</h1>
            <ul className="mt-20">
                <li>
                    <Link
                        to={'/nftdesignone'}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                        NFT Design One
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/aquarium'}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                        Aquarium
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/gymfluencer'}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                        GymFluencer
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage