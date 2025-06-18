export const celebrities = [
  {
    id: 1,
    name: "Trump",
    audioFile: "/audio/Trump.wav",
    description: "Deep, authoritative voice",
    category: "Actor"
  },
  {
    id: 2,
    name: "Hawking",
    audioFile: "/audio/Hawking.wav",
    description: "Smooth, captivating voice",
    category: "Actress"
  },
  {
    id: 3,
    name: "Biden",
    audioFile: "/audio/baideng.wav",
    description: "Presidential, inspiring voice",
    category: "Political"
  },
  {
    id: 4,
    name: "JoeRogan",
    audioFile: "/audio/JoeRogan.wav",
    description: "Nature documentary narrator",
    category: "Narrator"
  }
];

export const getCelebrityById = (id) => {
  return celebrities.find(celebrity => celebrity.id === parseInt(id));
};

export const getCelebrityAudioUrl = (id) => {
  const celebrity = getCelebrityById(id);
  return celebrity ? celebrity.audioFile : null;
};