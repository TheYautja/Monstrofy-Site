import React, { useRef, useState,  } from "react";
import "./Musicas.css";

//{ id: , titulo: " ", artista: " ", capa: " ", genero: " ", audio: " " },

function Musicas(props) {
  const {x} = props;
  const audioRefs = useRef([]);
  const [progressList, setProgressList] = useState(x.map(() => 0));
  const [durationList, setDurationList] = useState(x.map(() => 0));
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

//const deletarPlaylist = () =>{}

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
    ? x.filter((m) => m.genero === generoSelecionado)
    : x;

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

  return (
    <div className="musicasContainer">
      <div className="musicasLista">
        {musicasFiltradas.map((x, index) => (
          <div key={x.id} className="musicaItem">
            <img src={x.capa} alt={x.titulo} className="musicaCapa" />
            <div className="musicaInfo">
              <h3>{x.titulo}</h3>
              <p>{x.artista}</p>
              <button className="musicaPlay" onClick={() => handlePlay(index)}>
                {audioRefs.current[index]?.paused ? 'TOCAR' : 'PAUSAR'}
              </button>
              <div className="barraProgresso" onClick={(e) => handleSeek(index, e)}>
                <div
                  className="progressoPreenchido"
                  style={{ width: `${progressList[index]}%` }}
                ></div>
              </div>
              {playlists.length > 0 && (
                <div>
                  <select value={playlistSelecionada} onChange={(e) => setPlaylistSelecionada(e.target.value)}>
                    <option value="">Escolha a playlist</option>
                    {playlists.map((nome, i) => (
                      <option key={i} value={nome}>{nome}</option>
                    ))}
                  </select>
                  <button onClick={() => adicionarMusicaNaPlaylist(x.id)}>Adicionar à Playlist</button>
                </div>
              )}
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                src={x.audio}
                onTimeUpdate={() => handleTimeUpdate(index)}
                onLoadedMetadata={() => handleLoadedMetadata(index)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="musicasSidebar">
        <div className="perfilUsuario">
          <label htmlFor="fotoInput">
            <img src={fotoPerfil || "./default.png"} alt="Perfil" className="fotoUsuario" />
          </label>
          <input
            id="fotoInput"
            type="file"
            accept="image/*"
            onChange={trocarFoto}
            style={{ display: "none" }}
          />
          {editandoNome ? (
            <input
              value={nomeUsuario}
              onChange={(e) => setNomeUsuario(e.target.value)}
              onBlur={() => setEditandoNome(false)}
              onKeyDown={(e) => e.key === "Enter" && setEditandoNome(false)}
              autoFocus
            />
          ) : (
            <h3 onClick={() => setEditandoNome(true)}>{nomeUsuario}</h3>
          )}
        </div>

        <div className="filtroGenero">
          <h4>Filtrar por Gênero</h4>
          <select value={generoSelecionado} onChange={(e) => setGeneroSelecionado(e.target.value)}>
            <option value="">Todos</option>
            <option value="Gaucha">Nativista</option>
            <option value="metal">Metal</option>
            <option value="rock">Rock</option>
            <option value="reggae">Reggae</option>
            <option value="pp">Post-Punk</option>
            <option value="prog">Rock Progressivo</option>
          </select>
        </div>
        <div className="criarPlaylist">
          <h4>Criar Playlist</h4>
          <input
            value={novaPlaylist}
            onChange={(e) => setNovaPlaylist(e.target.value)}
            placeholder="Nome da playlist"
          />
          <button onClick={adicionarPlaylist}>Criar</button>
          <button onClick={deletarPlaylist}>Apagar</button>
          <ul>
            {playlists.map((nome) => (
              <li key={nome}>
                <strong>{nome}</strong>
                <ul>
                  {(musicasNasPlaylists[nome] || []).map((id) => {
                    const musica = x.find((m) => m.id === id);
                    return <li key={id}>{musica?.titulo}</li>;
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Musicas;
