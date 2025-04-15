import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Leaderboard from "../../../components/Leaderboard";
import Rules from "../../../components/Rules";

interface GameCategory {
  id: string;
  name: string;
  image: string;
  slug: string;
}

interface BannerSlide {
  id: string;
  image: string;
  title: string;
  link: string;
}

interface FeaturedGame {
  id: string;
  name: string;
  image: string;
  slug: string;
}

interface HomeProps {
  banners?: BannerSlide[];
  featuredGames?: FeaturedGame[];
  gameCategories?: GameCategory[];
  announcement?: string;
}

const Home: React.FC<HomeProps> = ({
  banners = [],
  featuredGames = [],
  gameCategories = [],
  announcement = "",
}) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("lottery");

  const staticBanners: BannerSlide[] = [
    {
      id: "banner1",
      image: "/assets/banner1.png",
      title: "Casino Host",
      link: "/promotions",
    },
    {
      id: "banner2",
      image: "/assets/banner1.png",
      title: "Welcome Bonus",
      link: "/bonus",
    },
    {
      id: "banner3",
      image: "/assets/banner1.png",
      title: "Live Dealer Games",
      link: "/live",
    },
  ];

  const staticFeaturedGames: FeaturedGame[] = [
    {
      id: "wheel",
      name: "Wheel",
      image: "/assets/wheel.png",
      slug: "wheel",
    },
    {
      id: "privilege",
      name: "Privileges",
      image: "/assets/category.png",
      slug: "privilege",
    },
  ];

  const staticGameCategories: GameCategory[] = [
    {
      id: "lottery",
      name: "Lottery",
      image: "/assets/image1.png",
      slug: "lottery",
    },
    {
      id: "mini-games",
      name: "Mini games",
      image: "/assets/image2.png",
      slug: "mini-games",
    },
    {
      id: "hot-slot",
      name: "Hot slot",
      image: "/assets/image3.png",
      slug: "hot-slot",
    },
    {
      id: "slot",
      name: "Slot",
      image: "/assets/image4.png",
      slug: "slot",
    },
    {
      id: "fishing",
      name: "Fishing",
      image: "/assets/image5.png",
      slug: "fishing",
    },
    {
      id: "pvc",
      name: "PVC",
      image: "/assets/image6.png",
      slug: "pvc",
    },
    {
      id: "casino",
      name: "Casino",
      image: "/assets/image7.png",
      slug: "casino",
    },
    {
      id: "sports",
      name: "Sports",
      image: "/assets/image8.png",
      slug: "sports",
    },
  ];

  const staticAnnouncement =
    "prm: We provide a brand new gaming enorm. We provide a brand new gaming ex.";

  const displayBanners = banners.length > 0 ? banners : staticBanners;
  const displayFeaturedGames =
    featuredGames.length > 0 ? featuredGames : staticFeaturedGames;
  const displayGameCategories =
    gameCategories.length > 0 ? gameCategories : staticGameCategories;
  const displayAnnouncement = announcement || staticAnnouncement;

  const nextBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === displayBanners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === 0 ? displayBanners.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextBanner();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const promoContent = [1, 2, 3, 4];

  return (
    <div className="flex flex-col bg-[#1A0B2E] min-h-screen text-white">
      <div className="flex-1 py-2 pb-16 w-full max-w-md mx-auto">
        <div className="relative w-100 px-3 py-2 ml-6">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 rounded-full w-8 h-8 flex items-center justify-center z-10 shadow-lg -mt-10"
            onClick={prevBanner}
            style={{
              background: "linear-gradient(135deg, #6366F1 0%, #9333EA 100%)",
              boxShadow: "0 4px 10px rgba(99, 102, 241, 0.5)",
            }}
          >
            <FiChevronLeft size={20} color="white" />
          </button>

          <div className="rounded-3xl overflow-hidden relative border-2 border-purple-600 shadow-lg mb-20 h-50">
            <img
              src={displayBanners[currentBannerIndex]?.image}
              alt={displayBanners[currentBannerIndex]?.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {displayBanners.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentBannerIndex ? "bg-white" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentBannerIndex(index)}
                ></div>
              ))}
            </div>
          </div>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 rounded-full w-8 h-8 flex items-center justify-center z-10 shadow-lg -mt-10"
            onClick={nextBanner}
            style={{
              background: "linear-gradient(135deg, #6366F1 0%, #9333EA 100%)",
              boxShadow: "0 4px 10px rgba(99, 102, 241, 0.5)",
            }}
          >
            <FiChevronRight size={20} color="white" />
          </button>
        </div>

        {/* Featured Games - Styled as per image with specific corner radius */}
        <div className="px-3 mb-6 -mt-10 mb-10">
          <div className="grid grid-cols-2 gap-3">
            {displayFeaturedGames.map((game) => (
              <div
                key={game.id}
                className="overflow-hidden shadow-lg cursor-pointer relative"
                style={{
                  backgroundImage: `url(${game.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "70px",
                  border: "1px solid #7E22CE",
                  borderRadius: "8px 8px 44px 8px", // Custom border radius: top-left, top-right, bottom-right, bottom-left
                }}
              >
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(88, 28, 135, 0.8), transparent)",
                    borderRadius: "8px 8px 44px 8px", // Match the outer radius but slightly smaller
                  }}
                ></div>
                <div className="absolute bottom-3 left-4 text-white font-medium text-xl">
                  {game.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="px-3 mb-4"
          style={{
            border: "2px solid #7E22CE",
            borderRadius: "8px 8px 8px 8px", // Custom border radius
            padding: "8px",
            marginBottom: "16px",
            maxWidth: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="grid grid-cols-4 gap-3">
            {displayGameCategories.map((category) => (
              <div
                key={category.id}
                className={`flex flex-col items-center cursor-pointer ${
                  selectedCategory === category.slug ? "" : ""
                }`}
                onClick={() => setSelectedCategory(category.slug)}
              >
                <div className="rounded-lg overflow-hidden mb-1 bg-purple-800 shadow-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-20 h-20 object-cover"
                  />
                </div>
                <span className="text-xs text-center text-white">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-purple-950 mt-auto mx-3 my-4 rounded-lg flex items-center p-2 border border-red-500">
          <div className="bg-red-500 rounded-md p-1 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1 text-xs break-words whitespace-normal">
            {displayAnnouncement}
          </div>
          <button className="text-xs text-white px-2 py-1 rounded ml-2 bg-gradient-to-r from-purple-600 to-purple-900">
            Detail
          </button>
        </div>
        <div className="px-3">
          <div className="text-lg font-semibold mb-2 capitalize flex ml-5">
            {selectedCategory}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {promoContent.map((_, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-purple-700 shadow-lg relative"
              >
                <img
                  src="/assets/image1.png"
                  alt="Promo"
                  className="w-full h-24 object-cover"
                />
                <div className="absolute top-2 left-2 bg-transparent text-white text-lg-bold px-2 py-1 rounded">
                  WIN GO
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Leaderboard />
      <Rules />
    </div>
  );
};

export default Home;
