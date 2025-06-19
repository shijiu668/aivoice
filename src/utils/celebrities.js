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
  }
];

export const getCelebrityById = (id) => {
  return celebrities.find(celebrity => celebrity.id === parseInt(id));
};

export const getCelebrityAudioUrl = (id) => {
  const celebrity = getCelebrityById(id);
  return celebrity ? celebrity.audioFile : null;
};