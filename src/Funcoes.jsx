import { useState, useRef } from "react";

export function useFuncoes (db){
const audioRefs = useRef([]);
  const [progressList, setProgressList] = useState(db.map(() => 0));
  const [durationList, setDurationList] = useState(db.map(() => 0));
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [nomeUsuario, setNomeUsuario] = useState("Usuário");
  const [editandoNome, setEditandoNome] = useState(false);
  const [generoSelecionado, setGeneroSelecionado] = useState("");
  const [novaPlaylist, setNovaPlaylist] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [musicasNasPlaylists, setMusicasNasPlaylists] = useState({});
  const [playlistSelecionada, setPlaylistSelecionada] = useState("");


const trocarFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setFotoPerfil(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const adicionarPlaylist = () => {
    if (novaPlaylist.trim() && !playlists.includes(novaPlaylist)) {
      setPlaylists([...playlists, novaPlaylist]);
      setNovaPlaylist("");
    }
  };


  const deletarPlaylist = () =>{

  }

  const adicionarMusicaNaPlaylist = (idMusica) => {
    if (!playlistSelecionada) return;
    setMusicasNasPlaylists((prev) => {
      const atual = prev[playlistSelecionada] || [];
      if (!atual.includes(idMusica)) {
        return {
          ...prev,
          [playlistSelecionada]: [...atual, idMusica],
        };
      }
      return prev;
    });
  };

  const musicasFiltradas = generoSelecionado
    ? db.filter((m) => m.genero === generoSelecionado)
    : db;

  const handlePlay = (index) => {
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const atual = audioRefs.current[index];
    atual && (atual.paused ? atual.play() : atual.pause());
  };

  const handleTimeUpdate = (index) => {
    const audio = audioRefs.current[index];
    if (audio) {
      const progress = (audio.currentTime / audio.duration) * 100 || 0;
      setProgressList((prev) => {
        const updated = [...prev];
        updated[index] = progress;
        return updated;
      });
    }
  };

  const handleLoadedMetadata = (index) => {
    const audio = audioRefs.current[index];
    if (audio) {
      setDurationList((prev) => {
        const updated = [...prev];
        updated[index] = audio.duration;
        return updated;
      });
    }
  };

  const handleSeek = (index, e) => {
    const audio = audioRefs.current[index];
    const bounding = e.target.getBoundingClientRect();
    const clickX = e.clientX - bounding.left;
    const width = bounding.width;
    const seekTime = (clickX / width) * durationList[index];
    if (audio) audio.currentTime = seekTime;
  };


  return {
    audioRefs,
    progressList,
    durationList,
    fotoPerfil,
    nomeUsuario,
    editandoNome,
    generoSelecionado,
    novaPlaylist,
    playlists,
    musicasNasPlaylists,
    playlistSelecionada,
    musicasFiltradas,
    setProgressList,
    setDurationList,
    setFotoPerfil,
    setNomeUsuario,
    setEditandoNome,
    setGeneroSelecionado,
    setNovaPlaylist,
    setPlaylists,
    setMusicasNasPlaylists,
    setPlaylistSelecionada,
    trocarFoto,
    adicionarPlaylist,
    deletarPlaylist,
    adicionarMusicaNaPlaylist,
    handlePlay,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleSeek,
  }
}

export default useFuncoes;