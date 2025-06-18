export const celebrities = [
  {
    id: 1,
    name: "Trump",
    audioFile: "/audio/Trump.wav",
    category: "Actor"
  },
  {
    id: 2,
    name: "Hawking",
    audioFile: "/audio/Hawking.wav",
    category: "Actress"
  },
  {
    id: 3,
    name: "Biden",
    audioFile: "/audio/baideng.wav",
    category: "Political"
  },
  {
    id: 4,
    name: "JoeRogan",
    audioFile: "/audio/JoeRogan.wav",
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