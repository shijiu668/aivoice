export const celebrities = [
  {
    id: 1,
    name: "Trump",
    audioFile: "/audio/Trump.wav",
    avatar: "/avatars/trump.jpg",
    category: "Political"
  },
  {
    id: 2,
    name: "Hawking",
    audioFile: "/audio/Hawking.wav",
    avatar: "/avatars/hawking.jpg",
    category: "Scientist"
  },
  {
    id: 3,
    name: "Biden",
    audioFile: "/audio/joe-biden.wav",
    avatar: "/avatars/biden.jpg",
    category: "Political"
  },
  {
    id: 4,
    name: "JoeRogan",
    audioFile: "/audio/JoeRogan.wav",
    avatar: "/avatars/joerogan.jpg",
    category: "Media"
  },
  {
    id: 5,
    name: "Obama",
    audioFile: "/audio/Obama.wav",
    avatar: "/avatars/obama.jpg",
    category: "Political"
  },
  {
    id: 6,
    name: "Peter",
    audioFile: "/audio/Peter.wav",
    avatar: "/avatars/peter.jpg",
    category: "Animation"
  },
  {
    id: 7,
    name: "SpongeBob",
    audioFile: "/audio/spongebob.wav",
    avatar: "/avatars/spongebob.jpg",
    category: "Animation"
  },
  {
    id: 8,
    name: "Ice Spice",
    audioFile: "/audio/ice-spice.wav",
    avatar: "/avatars/ice-spice.jpg",
    description: "Rapper & Artist",
    category: "Music"
  },
  {
    id: 9,
    name: "Morgan Freeman",
    audioFile: "/audio/morgan-freeman.wav",
    avatar: "/avatars/morgan-freeman.jpg",
    description: "Morgan Freeman",
    category: "Media"
  },
  {
    id: 10,
    name: "Pokimane",
    audioFile: "/audio/pokimane.wav",
    avatar: "/avatars/pokimane.jpg",
    description: "Twitch Streamer & Content Creator",
    category: "Gaming"
  },
  {
    id: 11,
    name: "Siri",
    audioFile: "/audio/siri.wav",
    avatar: "/avatars/siri.jpg",
    description: "Apple's Virtual Assistant",
    category: "Technology"
  },
  {
    id: 12,
    name: "Squidward",
    audioFile: "/audio/squidward.wav",
    avatar: "/avatars/squidward.jpg",
    description: "SpongeBob SquarePants Character",
    category: "Animation"
  },
  {
    id: 13,
    name: "Taylor Swift",
    audioFile: "/audio/taylor-swift.wav",
    avatar: "/avatars/taylor-swift.jpg",
    description: "Singer & Songwriter",
    category: "Music"
  },
  {
    id: 14,
    name: "The Grinch",
    audioFile: "/audio/grinch.wav",
    avatar: "/avatars/grinch.jpg",
    description: "How the Grinch Stole Christmas Character",
    category: "Animation"
  },
  {
    id: 15,
    name: "Kanye West",
    audioFile: "/audio/kanye.wav",
    avatar: "/avatars/kanye.jpg",
    description: "Rapper & Music Producer",
    category: "Music"
  },
  {
    id: 16,
    name: "Kim Kardashian",
    audioFile: "/audio/kim-kardashian.wav",
    avatar: "/avatars/kim-kardashian.jpg",
    description: "Media Personality & Entrepreneur",
    category: "Celebrity"
  },
  {
    id: 17,
    name: "Michael Jackson",
    audioFile: "/audio/michael-jackson.wav",
    avatar: "/avatars/michael-jackson.jpg",
    description: "King of Pop & Music Legend",
    category: "Music"
  },
  {
    id: 18,
    name: "MrBeast",
    audioFile: "/audio/mrbeast.wav",
    avatar: "/avatars/mrbeast.jpg",
    description: "YouTube Creator & Philanthropist",
    category: "Creator"
  },
  {
    id: 19,
    name: "Optimus Prime",
    audioFile: "/audio/optimus-prime.wav",
    avatar: "/avatars/optimus-prime.jpg",
    description: "Autobot Leader & Transformer Hero",
    category: "Character"
  }
];

export const getCelebrityById = (id) => {
  return celebrities.find(celebrity => celebrity.id === parseInt(id));
};

export const getCelebrityAudioUrl = (id) => {
  const celebrity = getCelebrityById(id);
  return celebrity ? celebrity.audioFile : null;
};