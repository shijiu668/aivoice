export const celebrities = [
  {
    id: 1,
    name: "Trump",
    audioFile: "/audio/celebrity1.wav",
    avatar: "/avatars/trump.jpg",
    category: "Political"
  },
  {
    id: 2,
    name: "Hawking",
    audioFile: "/audio/celebrity2.wav",
    avatar: "/avatars/hawking.jpg",
    category: "Scientist"
  },
  {
    id: 3,
    name: "Biden",
    audioFile: "/audio/celebrity3.wav",
    avatar: "/avatars/biden.jpg",
    category: "Political"
  },
  {
    id: 4,
    name: "JoeRogan",
    audioFile: "/audio/celebrity4.wav",
    avatar: "/avatars/joerogan.jpg",
    category: "Media"
  },
  {
    id: 5,
    name: "Obama",
    audioFile: "/audio/obama.wav",
    avatar: "/avatars/obama.jpg",
    category: "Political"
  },
  {
    id: 6,
    name: "Peter",
    audioFile: "/audio/peter.wav",
    avatar: "/avatars/peter.jpg",
    category: "Animation"
  },
  {
    id: 7,
    name: "SpongeBob",
    audioFile: "/audio/spongebob.wav",
    avatar: "/avatars/spongebob.jpg",
    category: "Animation"
  }
];

export const getCelebrityById = (id) => {
  return celebrities.find(celebrity => celebrity.id === parseInt(id));
};

export const getCelebrityAudioUrl = (id) => {
  const celebrity = getCelebrityById(id);
  return celebrity ? celebrity.audioFile : null;
};