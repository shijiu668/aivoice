export const celebrities = [
  {
    id: 1,
    name: "Morgan Freeman",
    audioFile: "/audio/celebrity1.wav",
    description: "Deep, authoritative voice",
    category: "Actor"
  },
  {
    id: 2,
    name: "Scarlett Johansson",
    audioFile: "/audio/celebrity1.wav",
    description: "Smooth, captivating voice",
    category: "Actress"
  },
  {
    id: 3,
    name: "Barack Obama",
    audioFile: "/audio/celebrity1.wav",
    description: "Presidential, inspiring voice",
    category: "Political"
  },
  {
    id: 4,
    name: "David Attenborough",
    audioFile: "/audio/celebrity1.wav",
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