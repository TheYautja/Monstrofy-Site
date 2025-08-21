import React from "react";
import "./Musicas.css";
import { useFuncoes } from "./Funcoes";

function Musicas({ db }) {
  const {
    audioRefs,
    progressList,
    //eslint-disable-next-line no-unused-vars
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
    setNomeUsuario,
    setEditandoNome,
    setGeneroSelecionado,
    setNovaPlaylist,
    setPlaylistSelecionada,
    trocarFoto,
    adicionarPlaylist,
    deletarPlaylist,
    adicionarMusicaNaPlaylist,
    handlePlay,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleSeek,
  } = useFuncoes(db);

  return (
    <div className="musicasContainer">
      <div className="musicasLista">
        {musicasFiltradas.map((m, index) => (
          <div key={m.id} className="musicaItem">
            <img src={m.capa} alt={m.titulo} className="musicaCapa" />
            <div className="musicaInfo">
              <h3>{m.titulo}</h3>
              <p>{m.artista}</p>
              <button className="musicaPlay" onClick={() => handlePlay(index)}>
                {audioRefs.current[index]?.paused ? "TOCAR" : "PAUSAR"}
              </button>
              <div className="barraProgresso" onClick={(e) => handleSeek(index, e)}>
                <div
                  className="progressoPreenchido"
                  style={{ width: `${progressList[index]}%` }}
                />
              </div>
              {playlists.length > 0 && (
                <div>
                  <select
                    value={playlistSelecionada}
                    onChange={(e) => setPlaylistSelecionada(e.target.value)}
                  >
                    <option value="">Escolha a playlist</option>
                    {playlists.map((nome, i) => (
                      <option key={i} value={nome}>
                        {nome}
                      </option>
                    ))}
                  </select>
                  <button onClick={() => adicionarMusicaNaPlaylist(m.id)}>
                    Adicionar à Playlist
                  </button>
                </div>
              )}
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                src={m.audio}
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
            <img
              src={fotoPerfil || "./default.png"}
              alt="Perfil"
              className="fotoUsuario"
            />
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
          <select
            value={generoSelecionado}
            onChange={(e) => setGeneroSelecionado(e.target.value)}
          >
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
          <ul>
            {playlists.map((nome) => (
              <li key={nome}>
                <strong>{nome}</strong>
                <button onClick={() => deletarPlaylist(nome)}>Apagar</button>
                <ul>
                  {(musicasNasPlaylists[nome] || []).map((id) => {
                    const musica = db.find((m) => m.id === id);
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
}

export default Musicas;
