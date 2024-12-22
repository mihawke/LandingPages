import { FaDiscord, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import footerBg from './assets/footer.jpg'
import bgOne from './assets/bgOne.jpg'
import bgTwo from './assets/bgTwo.jpg'

const Aquarium = () => {
  return (
    <div className="flex flex-1 w-screen flex-col items-center bg-black text-white relative">

      <main className="flex flex-1 w-full flex-col min-h-screen relative">
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black/95 z-10" />
        <div className="w-full h-full absolute">
          <img
            src={bgOne}
            alt=''
            className="w-full h-full object-cover object-center"
          />
        </div>
        <header className="flex items-center justify-between px-10 py-6 z-10">
          <p className="text-[26px] font-semibold" style={{ fontFamily: 'Good Timing' }}>
            Aquarium
          </p>
          <nav className="w-fit font-space text-sm flex items-center gap-10" style={{ fontFamily: 'Space Mono' }}>
            <div className="relative hover:opacity-85">
              <a className="font-space">Home</a>
            </div>
            <div className="relative hover:opacity-85">
              <a className="font-space">Explore</a>
            </div>
            <div className="relative hover:opacity-85">
              <a className="font-space">News</a>
            </div>
          </nav>
        </header>
        <section className="flex flex-1 flex-col font-roboto px-10 z-10">
          <h1 className="text-[86px] leading-none font-bold w-[50%]">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="w-[30%] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="w-fit h-fit bg-cyan-400 px-6 py-2 rounded-lg"
          style={{ boxShadow: '0 0 50px 10px rgba(34, 211, 238, 0.7)' }}
          >
            <p className="text-sm">Explore</p>
          </button>
        </section>
      </main>

      <section className="min-h-screen w-full px-20 flex flex-col items-center relative z-10">
        <div className="w-full h-full absolute -z-10">
          <img
            src={bgTwo}
            alt=''
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute w-full h-full bg-gradient-to-b from-black/40 to-black/85 -z-10" />
        <h1 className="text-[40px] font-bold mb-16 z-10">
          Popular this week
        </h1>
      </section>

      <footer className="w-full z-10 relative">
        <div className="w-full h-full absolute -z-10">
          <img
            src={footerBg}
            alt=''
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute w-full h-full bg-gradient-to-b from-black/40 to-black/85 -z-10" />

        <div className="z-10  pt-12 pb-8 px-4 ">
          <div className="flex justify-between">
            <div className="h-fit space-y-8">
              <div>
                <p className="text-[26px] font-semibold" style={{ fontFamily: 'Good Timing' }}>LOGO
                  <span
                    className="ml-1 px-2"
                    style={{ background: 'linear-gradient(90deg, #9333ea 0%, #12aff2 100%)' }}
                  >NFT</span>
                </p>
              </div>
              <div>
                <p className="text-base text-white/80">
                  The World's largest Digital Marketplace for crypto collections <br></br>
                  and non fungible tokens (NFTs) buy, sell and discover <br></br>
                  exclusive digital assets
                </p>
              </div>
              <div className="flex text-2xl gap-4">
                <FaTwitter className="text-white/80 hover:text-blue-500 transition-colors duration-300" />
                <FaInstagram className="text-white/80 hover:text-blue-500 transition-colors duration-300" />
                <FaFacebookF className="text-white/80 hover:text-blue-500 transition-colors duration-300" />
                <FaDiscord className="text-white/80 hover:text-blue-500 transition-colors duration-300" />
              </div>
            </div>
            <div className="flex gap-10 text-sm">
              <div className="flex">
                <div>
                  <h4 className="font-semibold text-lg text-white mb-4">Marketplace</h4>
                  <ul className="space-y-2 text-white/60">
                    <li><a href="#" className="hover:text-white transition-colors">All NFTs</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Art</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Music</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Photography</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Virtual Worlds</a></li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-4">Resources</h4>
                <ul className="space-y-2 text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Platform Status</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-4">Company</h4>
                <ul className="space-y-2 text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm">
                © 2024 NFT Market. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer >
    </div >
  )
}

export default Aquarium