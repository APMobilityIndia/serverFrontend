// src/components/Home.tsx
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Types for future API integration
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
  // State for banner carousel
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Static data for development - replace with props when API is ready
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
      name: "Privilege",
      image: "/assets/category.png",
      slug: "privilege",
    },
  ];

  const staticGameCategories: GameCategory[] = [
    {
      id: "lottery",
      name: "Lottery",
      image: "/assets/lottery.jpg",
      slug: "lottery",
    },
    {
      id: "mini-games",
      name: "Mini games",
      image: "/assets/mini-games.jpg",
      slug: "mini-games",
    },
    {
      id: "hot-slot",
      name: "Hot slot",
      image: "/assets/hot-slot.jpg",
      slug: "hot-slot",
    },
    {
      id: "slot",
      name: "Slot",
      image: "/assets/slot.jpg",
      slug: "slot",
    },
    {
      id: "fishing",
      name: "Fishing",
      image: "/assets/fishing.jpg",
      slug: "fishing",
    },
    {
      id: "pvc",
      name: "PVC",
      image: "/assets/pvc.jpg",
      slug: "pvc",
    },
    {
      id: "casino",
      name: "Casino",
      image: "/assets/casino.jpg",
      slug: "casino",
    },
    {
      id: "sports",
      name: "Sports",
      image: "/assets/sports.jpg",
      slug: "sports",
    },
  ];

  const staticAnnouncement =
    "prm: We provide a brand new gaming enorm. We provide a brand new gaming ex.";

  // Use props if provided, otherwise fall back to static data
  const displayBanners = banners.length > 0 ? banners : staticBanners;
  const displayFeaturedGames =
    featuredGames.length > 0 ? featuredGames : staticFeaturedGames;
  const displayGameCategories =
    gameCategories.length > 0 ? gameCategories : staticGameCategories;
  const displayAnnouncement = announcement || staticAnnouncement;

  // Handle banner navigation
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

  // Auto-rotate banners
  useEffect(() => {
    const timer = setInterval(() => {
      nextBanner();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col bg-[#1A0B2E] min-h-screen text-white">
      {/* Content container - adjust padding to account for header and bottom tab */}
      <div className="flex-1 py-2 pb-16">
        {" "}
        {/* pb-16 to make room for bottom tabs */}
        {/* Main Banner Carousel */}
        <div className="relative w-100 px-3 py-2 ">
          <div className="rounded-3xl overflow-hidden relative border-2 border-purple-600 shadow-lg">
            <img
              src={displayBanners[currentBannerIndex]?.image}
              alt={displayBanners[currentBannerIndex]?.title}
              className="w-100 h-54 object-cover"
            />

            {/* Banner Navigation Arrows */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-purple-800 bg-opacity-50 rounded-full p-1"
              onClick={prevBanner}
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-800 bg-opacity-50 rounded-full p-1"
              onClick={nextBanner}
            >
              <FiChevronRight size={24} />
            </button>

            {/* Banner Dots Indicator */}
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
        </div>
        {/* Featured Games Row */}
        <div className="grid grid-cols-2 gap-3 px-3 mt-2 mb-4">
          {displayFeaturedGames.map((game) => (
            <div
              key={game.id}
              className="rounded-xl overflow-hidden relative shadow-lg border border-purple-700"
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-20 object-cover"
              />
              <div className="absolute bottom-1 left-2 text-xs font-semibold">
                {game.name}
              </div>
            </div>
          ))}
        </div>
        {/* Game Categories Grid */}
        <div className="grid grid-cols-4 gap-3 px-3 mb-4">
          {displayGameCategories.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden mb-1 bg-purple-800 shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-16 h-16 object-cover"
                />
              </div>
              <span className="text-xs text-center text-white">
                {category.name}
              </span>
            </div>
          ))}
        </div>
        {/* Announcement Banner */}
        <div className="bg-purple-950 mt-auto mx-3 mb-4 rounded-lg flex items-center p-2 border border-red-500">
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
          <div className="flex-1 text-xs truncate">{displayAnnouncement}</div>
          <button className="text-xs bg-purple-700 px-3 py-1 rounded ml-2">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
