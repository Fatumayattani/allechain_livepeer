import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import login_icon from './login.png'
import nft_icon from './nft.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import clock_icon from './clock_icon.png'
import ac_logo from './ac_logo.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import musicnft1 from  './musicnft1.png'
import musicnft2 from './musicnft2.png'
import musicnft3 from './musicnft3.png'
import musicnft4 from './musicnft4.png'
import musicnft5 from './musicnft5.png'
import musicnft6 from './musicnft6.png'

import pod1 from './pod1.png'
import pod2 from './pod2.png'
import pod3 from './pod3.png'
import pod4 from './pod4.png'
import pod5 from './pod5.png'
import pod6 from './pod6.png'

import music1 from './music1.png'
import music2 from './music2.png'
import music3 from './music3.png'
import music4 from './music4.png'
import music5 from './music5.png'
import music6 from './music6.png'


export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    clock_icon,
    ac_logo,
    nft_icon,
    login_icon
}

export const albumsData = [
    {   
        id: 0,
        name: "African Beats",
        image: img8,
        desc: "Explore the vibrant sounds from across the continent.",
        bgColor: "#2a4365"
    },
    {   
        id: 1,
        name: "Top Hits: Africa",
        image: img9,
        desc: "Your weekly guide to the most popular tracks in Africa.",
        bgColor: "#22543d"
    },
    {   
        id: 2,
        name: "Trending African Artists",
        image: img10,
        desc: "Discover the latest hits from Africa's rising stars.",
        bgColor: "#742a2a"
    },
    {   
        id: 3,
        name: "Pan-African Grooves",
        image: img16,
        desc: "Get lost in the rhythms that unite the continent.",
        bgColor: "#44337a"
    },
    {   
        id: 4,
        name: "Ultimate African Classics",
        image: img11,
        desc: "A curated collection of timeless tracks from Africa.",
        bgColor: "#234e52"
    },
    {   
        id: 5,
        name: "Feel-Good African Anthems",
        image: img15,
        desc: "Uplifting tracks to brighten your day and celebrate life.",
        bgColor: "#744210"
    }
]


export const songsData = [
    {
        id: 0,
        name: "Sunset Mirage",
        image: img1,
        file: song1,
        desc: "A hypnotic blend of house beats and tropical vibes to transport you to paradise.",
        duration: "3:00"
    },
    {
        id: 1,
        name: "Faded Memories",
        image: img2,
        file: song2,
        desc: "Soulful ballad reflecting on love lost but never forgotten.",
        duration: "2:20"
    },
    {
        id: 2,
        name: "Chasing Echoes",
        image: img3,
        file: song3,
        desc: "Synthwave goodness with nostalgic undertones and a dreamy atmosphere.",
        duration: "2:32"
    },
    {
        id: 3,
        name: "Gravity Falls",
        image: img4,
        file: song1,
        desc: "A soaring pop-rock anthem that pulls you in with its irresistible energy.",
        duration: "2:50"
    },
    {
        id: 4,
        name: "Midnight on Fire",
        image: img5,
        file: song2,
        desc: "Upbeat electronic banger perfect for late-night dancing.",
        duration: "3:10"
    },
    {
        id: 5,
        name: "Lost in the Moment",
        image: img14,
        file: song3,
        desc: "A smooth R&B track about seizing love while it lasts.",
        duration: "2:45"
    },
    {
        id: 6,
        name: "Blossoms in the Dark",
        image: img7,
        file: song1,
        desc: "Indie-folk gem that celebrates beauty even in hard times.",
        duration: "2:18"
    },
    {
        id: 7,
        name: "Electric Heartbeat",
        image: img12,
        file: song2,
        desc: "High-tempo EDM track with heart-pumping rhythms.",
        duration: "2:35"
    }
]

export const nftData = [
    {
      id: 1,
      name: "Midnight Lights",
      desc: "A one-of-a-kind music poster NFT with exclusive artwork.",
      image: musicnft1,
      price: "0.5 ETH",
    },
    {
      id: 2,
      name: "Neon Waves",
      desc: "A limited edition poster of a chart-topping single.",
      image: musicnft2,
      price: "0.75 ETH",
    },
    {
      id: 3,
      name: "Soundwaves in Space",
      desc: "An NFT featuring a rare design for an underground music track.",
      image: musicnft3,
      price: "1.0 ETH",
    },
    {
      id: 4,
      name: "Electric Soul",
      desc: "A collectible poster from a legendary music concert.",
      image: musicnft4,
      price: "1.2 ETH",
    },
    {
      id: 5,
      name: "Mystic Beats",
      desc: "A vibrant music poster NFT to celebrate the artist's latest album.",
      image: musicnft5,
      price: "0.6 ETH",
    },
    {
      id: 6,
      name: "Retro Future",
      desc: "A futuristic design to represent the future of music.",
      image: musicnft6,
      price: "0.8 ETH",
    },
  ]

  export const podData = [
    {
      id: 1,
      name: "The Creative Mind",
      image: pod1,
    },
    {
      id: 2,
      name: "AI meets Livepeer",
      image: pod2,
    },
    {
      id: 3,
      name: "Health & Wellness Talks",
      image: pod3,
    },
    {
      id: 4,
      name: "Entrepreneurial Journey",
      image: pod4,
    },
    {
      id: 5,
      name: "Exploring the Cosmos",
      image: pod5,
    },
    {
      id: 6,
      name: "The History Chronicles",
      image: pod6,
    },
  ]
  export const musicData = [
    {
      id: 1,
      name: "Ethereal Echoes",
      artist: "Luna Harmonix",
      image: music1,
    },
    {
      id: 2,
      name: "Neon Dreams",
      artist: "SynthWavez",
      image: music2,
    },
    {
      id: 3,
      name: "Finding My Way",
      artist: "Astral Melodies",
      image: music3,
    },
    {
      id: 4,
      name: "Rhythms of the Jungle",
      artist: "Tropic Grooves",
      image: music4,
    },
    {
      id: 5,
      name: "Urban Soul Vibes",
      artist: "MetroBeat",
      image: music5,
    },
    {
      id: 6,
      name: "Rock Revival",
      artist: "Crimson Chords",
      image: music6,
    },
  ]  
  