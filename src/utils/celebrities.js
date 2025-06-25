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
  }
];

export const getCelebrityById = (id) => {
  return celebrities.find(celebrity => celebrity.id === parseInt(id));
};

export const getCelebrityAudioUrl = (id) => {
  const celebrity = getCelebrityById(id);
  return celebrity ? celebrity.audioFile : null;
};