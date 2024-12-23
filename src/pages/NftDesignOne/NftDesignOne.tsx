import { useState } from "react"
import mainImg from './main_img.jpg'
import { FaDiscord, FaFacebookF, FaHeart, FaInstagram, FaTwitter, FaVideo } from "react-icons/fa"
const NftDesignOne = () => {
  const [currentTab, setCurrentTab] = useState('home')
  const PopularCardsData = [
    {
      imageSrc: "https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611169.jpg?t=st=1734672386~exp=1734675986~hmac=28b6c91d9fcad93140371b614a9ab3987d2ee91a092d3b430555fa46ac8d2b65&w=740",
      title: "Digital Decade",
      artist: "Marcus Kelly",
      price: 20,
      likes: 50
    },
    {
      imageSrc: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?t=st=1734694487~exp=1734698087~hmac=c6141b66eb755a0ef468438ab36a2e93b690068a0563c044df3be94215dbf99d&w=740",
      title: "Digital Decade",
      artist: "Marcus Kelly",
      price: 20,
      likes: 50
    },
    {
      imageSrc: "https://cdn.pixabay.com/photo/2022/11/02/16/04/digital-art-7565263_1280.jpg",
      title: "Digital Decade",
      artist: "Marcus Kelly",
      price: 20,
      likes: 50
    },
    {
      imageSrc: "https://img.freepik.com/free-photo/portrait-futuristic-female-humanoid-with-advanced-technology_23-2151666260.jpg?t=st=1734694745~exp=1734698345~hmac=cded502b9f91d082cd40d5a4ab24a4b10491b4aab6db7ec508fb7897d55f24ac&w=740",
      title: "Digital Decade",
      artist: "Marcus Kelly",
      price: 20,
      likes: 50
    },
    {
      imageSrc: "https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square-1260x1260.jpg",
      title: "Digital Decade",
      artist: "Marcus Kelly",
      price: 20,
      likes: 50
    },
    {
      imageSrc: "https://i.pinimg.com/736x/f9/55/2d/f9552dd8f507318e8bc474d900b7f1e8.jpg",
      title: "Digital Decade",
      artist: "Marcus Kelly",
      price: 20,
      likes: 50
    },
    {
      imageSrc: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5AyYzOlGlv501PlJlIdZZQ.jpeg",
      title: "Digital Decade",
      artist: "Marcus Kelly",
      price: 20,
      likes: 50
    },
    {
      imageSrc: "https://i.pinimg.com/736x/dd/68/9c/dd689cb711cbba5dc14b62eea8d3f14f.jpg",
      title: "Digital Decade",
      artist: "Marcus Kelly",
      price: 20,
      likes: 50
    },
    {
      imageSrc: "https://i.pinimg.com/736x/6c/00/f3/6c00f3988c50a550a37e63ab53d6488c.jpg",
      title: "Digital Decade",
      artist: "Marcus Kelly",
      price: 20,
      likes: 50
    },
  ]

  return (
    <div className="flex flex-1 w-screen flex-col items-center bg-black text-white relative">
      <div className="absolute top-[8%] left-10 z-10 rounded-full w-[1px] h-[1px]"
        style={{ boxShadow: '0 0 1200px 300px rgba(139, 92, 246, 0.3)' }}
      />
      <div className="absolute top-[15%] right-5 z-20 rounded-full w-[1px] h-[1px]"
        style={{ boxShadow: '0 0 1200px 300px rgba(96, 165, 250, 0.3)' }}
      />
      <div className="absolute top-[38%] right-[50%] rounded-full w-[1px] h-[1px]"
        style={{ boxShadow: '0 0 1200px 350px rgba(96, 165, 250, 0.3)' }}
      />
      <div
        className="absolute top-[75%] right-[10%] rounded-full w-[1px] h-[1px]"
        style={{ boxShadow: '0 0 1200px 400px rgba(139, 92, 246, 0.3)' }}
      />

      <div className="absolute bottom-[5%] left-[10%] rounded-full w-[1px] h-[1px]"
        style={{ boxShadow: '0 0 1200px 300px rgba(139, 92, 246, 0.3)' }}
      />
      <main className="flex flex-1 flex-col min-h-screen">
        <header className="flex items-center justify-between px-10 py-6">
          <p className="text-[26px] font-semibold" style={{ fontFamily: 'Good Timing' }}>LOGO
            <span
              className="ml-1 px-2 bg-gradient-to-r from-purple-500 to-cyan-500"
            >NFT</span>
          </p>
          <nav className="w-[50%] font-space text-sm flex items-center justify-evenly" style={{ fontFamily: 'Space Mono' }}>
            <div className="relative pb-1 hover:opacity-85" onClick={() => setCurrentTab('home')}>
              <a className="font-space">Home</a>
              <div className={`absolute left-0 bottom-0 h-[2px] rounded-full w-[70%] 
              ${currentTab === 'home' ? 'bg-gradient-to-r from-purple-500 to-cyan-500 animate-beam' : 'bg-transparent'}`}
              ></div>
            </div>
            <div className="relative pb-1 hover:opacity-85" onClick={() => setCurrentTab('explore')}>
              <a className="font-space">Explore</a>
              <div className={`absolute left-0 bottom-0 h-[2px] rounded-full w-[70%] 
              ${currentTab === 'explore' ? 'bg-gradient-to-r from-purple-500 to-cyan-500 animate-beam' : 'bg-transparent'}`}
              ></div>
            </div>
            <div className="relative pb-1 hover:opacity-85" onClick={() => setCurrentTab('marketplace')}>
              <a className="font-space">Marketplace</a>
              <div className={`absolute left-0 bottom-0 h-[2px] rounded-full w-[70%] 
              ${currentTab === 'marketplace' ? 'bg-gradient-to-r from-purple-500 to-cyan-500 animate-beam' : 'bg-transparent'}`}
              ></div>
            </div>
            <div className="relative pb-1 hover:opacity-85" onClick={() => setCurrentTab('artists')}>
              <a className="font-space">Artists</a>
              <div className={`absolute left-0 bottom-0 h-[2px] rounded-full w-[70%] 
              ${currentTab === 'artists' ? 'bg-gradient-to-r from-purple-500 to-cyan-500 animate-beam' : 'bg-transparent'}`}
              ></div>
            </div>
            <div className="relative pb-1 hover:opacity-85" onClick={() => setCurrentTab('news')}>
              <a className="font-space">News</a>
              <div className={`absolute left-0 bottom-0 h-[2px] rounded-full w-[70%] 
              ${currentTab === 'news' ? 'bg-gradient-to-r from-purple-500 to-cyan-500 animate-beam' : 'bg-transparent'}`}
              ></div>
            </div>
          </nav>
          <div className="flex items-center gap-5">
            <button
              className="p-[1px] rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-lg hover:shadow-[0px_0px_20px_4px] hover:scale-105 hover:shadow-purple-500/60 transition-all duration-300 relative overflow-hidden"
            >
              <p className="bg-black px-6 py-1 rounded-lg">Search</p>
            </button>
            <button
              className="px-6 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-lg hover:shadow-[0px_0px_20px_4px] hover:scale-105 hover:shadow-purple-500/60 transition-all duration-300 relative overflow-hidden"
            >
              Register
            </button>
          </div>
        </header>
        <section className="flex flex-1 items-center justify-center px-10">
          <div className="flex flex-col w-[60%]">
            <h1 className="lg:text-[86px] leading-[1] mb-5" style={{ fontFamily: 'Good Timing' }}>Discover, Collect and Sell Dope Art and NFTs</h1>
            <p className="mb-10 text-white text-opacity-85">
              The worlds largest digital marketplace for crypto <br></br>
              collections and non fungible tokens (NFTs)
            </p>
            <div className="flex items-center mb-10">
              <button
                className="px-6 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-[0px_0px_20px_4px] hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300"
              >
                Discover
              </button>
              <button
                className="p-[1px] rounded-lg ml-5 hover:shadow-[0px_0px_20px_4px] hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300"
                style={{ background: 'linear-gradient(90deg, #a855f7 0%, #06b6d4 100%)' }}>
                <p className="bg-black px-6 py-1 rounded-lg">Create</p>
              </button>
              <div className="flex items-center justify-center gap-2 ml-10 opacity-50 hover:opacity-70 cursor-pointer">
                <FaVideo className="text-blue-600" />
                <p className="text-sm underline underline-offset-2">Watch a video</p>
              </div>
            </div>
            <div className="flex w-fit gap-10 px-10 py-5 border-2 border-white/50 rounded-xl  bg-gradient-to-r from-purple-800 to-cyan-800">
              <div className="flex flex-col w-fit items-center scale-y-95">
                <p className="text-3xl" style={{ fontFamily: 'Good Timing' }}>27k+</p>
                <p>Art Works</p>
              </div>
              <div className="flex flex-col w-fit items-center scale-y-95">
                <p className="text-3xl" style={{ fontFamily: 'Good Timing' }}>7k+</p>
                <p>Artists</p>
              </div>
              <div className="flex flex-col w-fit items-center scale-y-95">
                <p className="text-3xl" style={{ fontFamily: 'Good Timing' }}>27k+</p>
                <p>Art Works</p>
              </div>
            </div>
          </div>  <div className="relative z-20 group transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-70 blur-lg transition-all duration-300" />

            <div className="relative">
              <div className="h-[500px] w-[350px] bg-cover bg-center rounded-xl transition-all duration-300 group-hover:shadow-2xl"
                style={{ backgroundImage: `url(${mainImg})` }}
              />

              <div className="flex w-full justify-between px-8 py-3 absolute bottom-0 left-0 transition-all duration-300 group-hover:bg-opacity-20"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                }}>
                <div className="text-left flex flex-col gap-1">
                  <p className="text-white text-xs text-opacity-70">Ending in:</p>
                  <p className="text-sm text-white">1h 20m 30s</p>
                  <button className="text-xs px-4 py-1 rounded-md bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 text-white">
                    Place a Bid
                  </button>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <p className="text-white text-xs text-opacity-70">Highest Bid</p>
                  <p className="text-sm text-white">32.4 ETH</p>
                  <button className="text-xs px-6 py-1 rounded-md bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 text-white">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="relative w-full overflow-hidden h-20 bg-gradient-to-r from-purple-800/50 to-cyan-800/50 my-20">
        <div className="absolute w-full h-full bg-inner-shadow z-10" />
        {/* Scrolling Content */}
        <div
          className="absolute flex w-full h-full items-center gap-8 animate-scroll"
          style={{ whiteSpace: "nowrap" }}
        >
          <p className="text-white text-4xl font-orbitron font-bold px-4">Exodus</p>
          <p className="text-white text-4xl font-orbitron font-bold px-4">Zenith</p>
          <p className="text-white text-4xl font-orbitron font-bold px-4">Nexus</p>
          <p className="text-white text-4xl font-orbitron font-bold px-4">Horizon</p>
          <p className="text-white text-4xl font-orbitron font-bold px-4">Ascend</p>
          <p className="text-white text-4xl font-orbitron font-bold px-4">Pinnacle</p>

          {/* Duplicate Content for Smooth Scrolling */}
          <p className="text-white text-4xl font-orbitron font-bold px-4">Exodus</p>
          <p className="text-white text-4xl font-orbitron font-bold px-4">Zenith</p>
          <p className="text-white text-4xl font-orbitron font-bold px-4">Nexus</p>
          <p className="text-white text-4xl font-orbitron font-bold px-4">Horizon</p>
          <p className="text-white text-4xl font-orbitron font-bold px-4">Ascend</p>
          <p className="text-white text-4xl font-orbitron font-bold px-4">Pinnacle</p>
        </div>
      </div>

      <section className="min-h-screen w-full px-20 flex flex-col items-center justify-evenly overflow-hidden relative z-10">
        <h1 className="text-[40px] font-bold z-10" style={{ fontFamily: 'Good Timing' }}>Popular this week</h1>
        <div className="w-full flex overflow-x-scroll gap-8 p-4">
          {PopularCardsData.map((item, index) => {
            return (
              <div
                key={index}
                className="relative group flex-none transition-all duration-500 hover:scale-105"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-50 blur-md transition-all duration-300" />
                <div
                  className="rounded-lg shadow-lg transition-transform duration-500 z-10"
                >
                  <NftCard
                    imageSrc={item.imageSrc}
                    title={item.title}
                    artist={item.artist}
                    price={item.price}
                    likes={item.likes}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="w-screen flex flex-col items-center justify-center overflow-hidden my-10 py-10 gap-10 z-10">
        <h1 className="text-[40px] font-bold " style={{ fontFamily: 'Good Timing' }}>Top Sellers</h1>
        <div className="w-full flex flex-col gap-8 relative">
          <div className="absolute w-full h-full bg-inner-shadow z-20" />
          <div
            className="flex w-full items-center gap-8 animate-scroll"
            style={{ whiteSpace: "nowrap" }}
          >
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              artist="Marcus Kelly"
              price={500}
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1555027908-c451b6273d71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1679673988162-018d0400240e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8"
              price={500}
              artist="Marcus Kelly"
            />

            {/* Duplicate Content for Smooth Scrolling */}
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              artist="Marcus Kelly"
              price={500}
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1555027908-c451b6273d71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1679673988162-018d0400240e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8"
              price={500}
              artist="Marcus Kelly"
            />
          </div>
          <div
            className="flex w-full items-center gap-8 animate-scrollR"
            style={{ whiteSpace: "nowrap" }}
          >
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              artist="Marcus Kelly"
              price={500}
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1555027908-c451b6273d71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1679673988162-018d0400240e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8"
              price={500}
              artist="Marcus Kelly"
            />

            {/* Duplicate Content for Smooth Scrolling */}
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              artist="Marcus Kelly"
              price={500}
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1555027908-c451b6273d71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
              price={500}
              artist="Marcus Kelly"
            />
            <SellerCard
              imageSrc="https://images.unsplash.com/photo-1679673988162-018d0400240e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8"
              price={500}
              artist="Marcus Kelly"
            />
          </div>
        </div>
      </section>

      <section className="min-h-screen w-full mx-auto px-40 py-10 flex flex-col gap-16 z-10">
        <h1
          className="text-4xl md:text-5xl font-bold text-center"
          style={{ fontFamily: 'Good Timing' }}
        >
          Explore Artworks
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          <ExploreCard
            imgOne="https://i.pinimg.com/736x/6d/3a/2b/6d3a2bf8dffe22682237b760aed5b5ef.jpg"
            imgTwo="https://i.pinimg.com/736x/f8/be/fa/f8befa21cc0904b884d5ebf636d962a1.jpg"
            imgThree="https://i.pinimg.com/736x/4a/ca/56/4aca568a7887eca544a07bcebd626b69.jpg"
            imgFour="https://i.pinimg.com/736x/cb/ec/76/cbec76e1cfa2b0b935d7fa5ba106a903.jpg"
            category="Digital Art"
            quantity={38}
          />
          <ExploreCard
            imgOne="https://i.pinimg.com/474x/aa/3d/67/aa3d6788e382ed4a9125ae66578e8e55.jpg"
            imgTwo="https://i.pinimg.com/736x/13/e4/f9/13e4f9058fbd616f5921cd7322175d68.jpg"
            imgThree="https://i.pinimg.com/736x/64/5f/2b/645f2b73128182f6754fc19fbf1034d6.jpg"
            imgFour="https://i.pinimg.com/736x/37/98/67/37986750ab9fc8fb9058444eda691622.jpg"
            category="3D Art"
            quantity={48}
          />
          <ExploreCard
            imgOne="https://i.pinimg.com/474x/cf/83/49/cf83490e2a369ef7d8752f37bb26553b.jpg"
            imgTwo="https://i.pinimg.com/474x/e8/d1/13/e8d1134bf2674f43f33be79e76ebe967.jpg"
            imgThree="https://i.pinimg.com/474x/a8/3c/41/a83c41f61d5a0ddad561c62d38ed2949.jpg"
            imgFour="https://i.pinimg.com/736x/93/b1/4b/93b14bad2e59718e3afbcbc56a91f3d4.jpg"
            category="Abstract"
            quantity={38}
          />
          <ExploreCard
            imgOne="https://i.pinimg.com/736x/cb/57/1c/cb571c93e747f00190227178c0bf34ea.jpg"
            imgTwo="https://i.pinimg.com/736x/72/dc/51/72dc5164db84a9d2186a4536fa1425b5.jpg"
            imgThree="https://i.pinimg.com/736x/19/87/be/1987bec2534b42a8a34a82bede56beb5.jpg"
            imgFour="https://i.pinimg.com/736x/77/f2/ff/77f2ffbeca0a7aee31bb9babaee82218.jpg"
            category="Grafitti"
            quantity={38}
          />
        </div>
      </section>

      <section
        className="w-[60%] py-10 my-20 gap-5 border-2 border-white/30 rounded-tl-[80px] rounded-br-[80px] flex flex-col items-center justify-center bg-gradient-to-r from-indigo-800 via-indigo-950 to-indigo-800 relative overflow-hidden"
      >
        <h1
          className="text-xl md:text-4xl font-normal text-center w-[60%] relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-500 to-purple-400"
          style={{ fontFamily: "Good Timing" }}
        >
          Join Us to Create Sell and Collect NFTs Digital Art
        </h1>

        <button
          className="text-2xl w-fit h-fit px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0px_0px_20px_4px] shadow-cyan-500 hover:shadow-purple-500 transition-all duration-300 ease-in-out hover:scale-105 relative z-10"
          style={{ fontFamily: "Good Timing" }}
        >
          Join Community
        </button>
      </section>


      <footer className="w-full pt-10 pb-8 px-4 z-10">
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
      </footer >
    </div >
  )
}

export default NftDesignOne

interface NFTCardProps {
  imageSrc: string;
  title: string;
  artist: string;
  price: number;
  likes: number
}
const NftCard: React.FC<NFTCardProps> = ({ imageSrc, title, artist, price, likes }) => {
  return (
    <div className="h-[460px] min-w-[280px] overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
      <div className="absolute h-full">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute px-6 py-3 z-10 bottom-0 w-full text-white flex items-center justify-between bg-gradient-to-r from-purple-900/80 to-cyan-900/80"
      >
        <div className="flex flex-col">
          <h3 className="text-base font-semibold" style={{ fontFamily: 'Good Timing' }}>{title}</h3>
          <p className="text-sm font-medium">By {artist}</p>
        </div>

        <div className="">
          <div className="flex flex-col gap-2 justify-between items-center w-full">
            <button className="px-2 py-1 text-sm font-medium text-white bg-transparent border border-[#9333ea] rounded-lg transition-colors duration-200">
              {price} ETH
            </button>
            <div className="flex gap-1 items-center">
              <FaHeart className="text-[#9333ea]" />
              <p className="text-sm font-medium">{likes}k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


interface SellerCardProps {
  imageSrc: string;
  artist: string;
  price: number;
}
const SellerCard: React.FC<SellerCardProps> = ({ imageSrc, artist, price }) => {
  return (
    <div className="flex rounded-lg shadow-lg hover:shadow-xl border-2 border-white/50 bg-gradient-to-r from-purple-950 to-cyan-950">
      <div className="w-32 h-32 p-2">
        <img
          src={imageSrc}
          alt=''
          className="w-full h-full object-cover object-center rounded-md"
        />
      </div>
      <div
        className="min-w-48 px-4 py-4 text-white flex flex-1 flex-col"
      >
        <p className="text-md font-semibold">{artist}</p>
        <p className="text-base font-normal text-[#dddddd]">
          {price} Eth
        </p>
      </div>
    </div>
  )
}

interface ExploreCardProps {
  imgOne: string;
  imgTwo: string;
  imgThree: string;
  imgFour: string;
  category: string;
  quantity: number;
}
const ExploreCard: React.FC<ExploreCardProps> = ({ imgOne, imgTwo, imgThree, imgFour, category, quantity }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-500 animate-gradient-x" />

      {/* Main container */}
      <div className="relative flex w-full h-full p-2 gap-4 flex-col rounded-lg bg-gradient-to-r from-black via-indigo-900 to-indigo-950">
        {/* Glass overlay on hover */}
        <div className="absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-10 bg-white" />

        <div className="space-y-2">
          {/* Top row of images */}
          <div className="flex flex-row gap-2">
            {[imgOne, imgTwo, imgThree].map((img, index) => (
              <div key={index} className="w-full h-20 overflow-hidden rounded-md group/image relative">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                <img
                  src={img}
                  className="w-full h-full object-cover object-center rounded-md transition-transform duration-500 group-hover/image:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Bottom image */}
          <div className="flex h-20 overflow-hidden rounded-md group/image relative">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
            <img
              src={imgFour}
              className="w-full h-full object-cover object-center rounded-md transition-transform duration-500 group-hover/image:scale-110"
            />
          </div>
        </div>

        <div className="flex w-full items-center justify-between relative z-10">
          <p className="text-md font-medium text-white group-hover:text-purple-300 transition-colors duration-300">
            {category}
          </p>
          <p className="px-2 py-1 w-fit h-fit text-sm font-medium text-white bg-transparent border border-purple-600 rounded-lg group-hover:bg-purple-600/20 group-hover:border-purple-400 transition-all duration-300">
            {quantity} items
          </p>
        </div>
      </div>
    </div>
  )
}