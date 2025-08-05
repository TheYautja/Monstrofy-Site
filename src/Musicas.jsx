
import React, { useRef, useState,  } from "react";
import "./Musicas.css";






//{ id: , titulo: " ", artista: " ", capa: " ", genero: " ", audio: " " },



const musicas = [
  { id: 1, titulo: "Valores", artista: "Cenair Maicá", capa: "./capas/meu canto.jpeg", genero: "Gaucha", audio: "./audio/Cenair Maicá - Valores.mp3" },
  { id: 2, titulo: "Ambition", artista: "Subway Sect", capa: "./capas/ambition.jpg", genero: "pp", audio: "./audio/Subway Sect - Ambition.mp3" },
  { id: 3, titulo: "Apes of God", artista: "Sepultura", capa: "./capas/apesofgod.jpeg", genero: "metal", audio: "./audio/Apes of God(MP3_160K).mp3"},
  { id: 4, titulo: " Blood and Thunder", artista: " Mastodon", capa: "./capas/bt.jpeg", genero: "metal", audio: "./audio/Blood and Thunder(MP3_160K).mp3 " },
  { id: 5, titulo: " Transmission", artista: "Joy Division ", capa: "./capas/transmission.jpeg", genero: " outros", audio: " ./audio/Joy Division - Transmission.mp3" },
  { id: 6, titulo: "Desert Flowers", artista: "Burn the sun ", capa: "./capas/burn the sun.jpeg", genero: "metal ", audio: "./audio/Burn The Sun - Desert Flowers(MP3_160K).mp3 " },
  { id: 7, titulo: "Wreck ", artista: "Gentle giant ", capa: "./capas/wreck.jpeg", genero: "outros ", audio: "//audio/Wreck(MP3_160K).mp3 " },
  { id: 8, titulo: "The Vvitch ", artista: " Desert Druid an the Acid Caravan", capa: "./capas/vvitch.jpeg", genero: "metal ", audio: "./audio/The Vvitch(MP3_160K).mp3 " },
  { id: 9, titulo: "The Highwayman ", artista: "Johnny Cash ", capa: "./capas/highwayman.jpg", genero: "rock", audio: " ./audio/The Highwayman(MP3_160K).mp3" },
  { id: 10, titulo: "Darling ", artista: "Alone in my Room ", capa: "./capas/darling.jpg", genero: "pp", audio: " ./audio/Alone in My Room - Darling.mp3" },
  { id: 11, titulo: "Angelus Thread ", artista: "Beggar's Opera ", capa: "./capas/angelus thread.jpeg", genero: "rock", audio: "./audio/Angelus Thread(MP3_160K).mp3 " },
  { id: 12, titulo: "Architets of Doom ", artista: "Blind Guardian ", capa: "./capas/blind guardian.jpeg", genero: "rock", audio: "./audio/Architects Of Doom(MP3_160K).mp3 " },
  { id: 13, titulo: " You're the Stranger", artista: "Asia ", capa: "./capas/asia.jpeg", genero: "rock", audio: " ./audio/Asia - You_re the Stranger(MP3_160K).mp3" },
  { id: 14, titulo: "Babilonia em Chamas ", artista: "Tribo de Jah ", capa: "./capas/jah.jpeg", genero: "reggae", audio: "./audio/Babilônia em Chamas(MP3_160K).mp3 " },
  { id: 15, titulo: "Bastille Day ", artista: "Rush ", capa: "./capas/rush.jpeg", genero: "rock", audio: "./audio/Bastille Day(MP3_160K).mp3 " },
  { id: 16, titulo: "Man of Iron ", artista: "Bathory ", capa: "./capas/bathory.jpeg", genero: "metal", audio: "./audio/Bathory - Man of Iron(MP3_320K).mp3 " },
  { id: 17, titulo: "Black Blade ", artista: "Blue Oyster Cult ", capa: "./capas/lips.jpeg", genero: "metal", audio: "./audio/Black Blade(MP3_160K).mp3 " },
  { id: 18, titulo: "Into the Void ", artista: " Black Sabbath", capa: "./capas/sabbath.jpeg", genero: "metal", audio: " ./audio/Black Sabbath - Into The Void(MP3_160K).mp3" },
  { id: 19, titulo: "Behind the Walls of Sleep ", artista: "Black Sabbath ", capa: "./capas/sabbath walls.jpeg", genero: "metal", audio: "./audio/Black Sabbath - Behind The Wall Of Sleep(MP3_160K).mp3 " },
  { id: 20, titulo: "Boureé ", artista: "Jethro Tull ", capa: "./capas/tull.jpeg", genero: "prog", audio: " ./audio/Bourée(MP3_160K).mp3" },
  { id: 21, titulo: "Brotherhood ", artista: "Anacrusis ", capa: "./capas/anacrusis.jpeg", genero: "rock", audio: "./audio/Brotherhood_(MP3_160K).mp3" },
  { id: 22, titulo: "Budapest ", artista: "Jethro Tull ", capa: "./capas/budapest.jpeg", genero: "prog", audio: "./audio/Budapest (2005 Remaster)(MP3_128K).mp3 " },
  { id: 23, titulo: "Eu não Matei Joana D'Arc ", artista: " Camisa de Vênus", capa: "./capas/venus.jpeg", genero: "pp", audio: "./audio/Camisa de Vênus - Eu não matei Joana d'Arc (Playback Version).mp3 " },
  { id: 24, titulo: "Seven Silver Keys ", artista: " Candlemass", capa: "./capas/keys.png", genero: "metal", audio: "./audio/Candlemass - Seven Silver Keys (HQ)(M4A_128K).m4a" },
  { id: 25, titulo: "Golf Girl ", artista: " Caravan", capa: "./capas/caravan.jpeg", genero: "prog", audio: " ./audio/Caravan - Golf Girl (1971)(MP3_160K).mp3" },
  { id: 26, titulo: "Ты не верь слезам ", artista: "Chernikovskaya Hata ", capa: "./capas/hata.jpeg", genero: "pp", audio: " ./audio/Chernikovskaya Hata - Ты не верь слезам.mp3" },
  { id: 27, titulo: "Coming Down From Outer Space ", artista: "Acid King ", capa: "./capas/acid.jpeg", genero: "metal", audio: " ./audio/Coming Down from Outer Space(MP3_160K).mp3" },
  { id: 28, titulo: " Contraponto", artista: "Cristiano Quevedo ", capa: "./capas/contraponto.jpeg", genero: "Gaucha", audio: " ./audio/Cristiano Quevedo - Contraponto.mp3" },
  { id: 29, titulo: "Death's Door ", artista: "Uncle Acid and the Deadbeats ", capa: "./capas/uncle acid.jpeg", genero: "metal", audio: "./audio/Death_s Door(MP3_160K).mp3 " },
  { id: 30, titulo: " Electric Funeral", artista: "Black Sabbath ", capa: "./capas/funeral.jpeg", genero: "metal", audio: "./audio/Electric Funeral (2012 Remaster)(MP3_160K).mp3 " },
  { id: 31, titulo: "Fire on the Mountain ", artista: "Grateful Dead ", capa: "./capas/grateful.jpeg", genero: "rock", audio: "./audio/Fire on the Mountain (2013 Remaster)(MP3_160K).mp3" },
    { id: 32, titulo: " The House, The Street and The Room", artista: "Gentle Giant ", capa: "./capas/house.jpeg", genero: "prog", audio: " ./audio/Gentle Giant - The House_ The Street_ The Room (Official Video)(MP3_160K).mp3" },
  { id: 33, titulo: "Godzilla ", artista: "Blue Oyster Cult ", capa: "./capas/zilla.jpeg", genero: "rock", audio: "./audio/Godzilla(MP3_160K).mp3" },
  { id: 34, titulo: "Graablick Blev Hun Vaer", artista: "Ulver ", capa: "./capas/ulver.jpeg", genero: "metal", audio: " ./audio/Graablick Blev Hun Vaer(MP3_160K).mp3" },
  { id: 35, titulo: "Heart Full of Soul ", artista: "The Yardbirds ", capa: "./capas/yard.jpeg", genero: "rock", audio: "./audio/Heart Full Of Soul - Original(MP3_160K).mp3 " },
  { id: 36, titulo: "I Want You ", artista: "The Beatles ", capa: "./capas/beatles.jpeg", genero: "rock", audio: "./audio/I Want You (She_s So Heavy) (Remastered 2009)(MP3_160K).mp3 " },
  { id: 37, titulo: "In the Land of Grey and Pink ", artista: "Caravan ", capa: "./capas/greya.jpeg", genero: "prog", audio: "./audio/In The Land Of Grey _ Pink(MP3_160K).mp3 " },
  { id: 38, titulo: "Can i Play With Madness ", artista: "Iron Maiden ", capa: "./capas/maiden.jpeg", genero: "metal", audio: "./audio/Iron Maiden - Can I Play With Madness (Official Video)(MP3_160K).mp3 " },
  { id: 39, titulo: " Jabba The Hut", artista: "Sodom ", capa: "./capas/jabba.jpeg", genero: "metal", audio: "./audio/Jabba the Hut(MP3_160K).mp3 " },
  { id: 40, titulo: "Jaguar God ", artista: "Mastodon ", capa: "./capas/jaguar.jpeg", genero: "rock", audio: "./audio/Jaguar God(MP3_160K).mp3 " },
    { id:41, titulo: "No Rastro da Gadaria ", artista: "Jairo Fernandes ", capa: "./capas/jairo.jpeg", genero: "Gaucha", audio: "./audio/Jairo Lambari Fernandes - No Rastro da Gadaria.mp3 " },
  { id: 42, titulo: " Recuerdos da 28", artista: "Joca Martins ", capa: "./capas/82.jpeg", genero: "Gaucha", audio: "./audio/Joca Martins - RECUERDOS DA 28.mp3 " },
  { id: 43, titulo: " Última Lembranca", artista: "Joca Martins ", capa: "./capas/82.jpeg", genero: "Gaucha", audio: "./audio/Joca Martins - ÚLTIMA LEMBRANÇA.mp3 " },
  { id: 44, titulo: " Lástima", artista: "Jose Claudio Machado ", capa: "./capas/lastima.jpeg", genero: "Gaucha", audio: "./audio/José Cláudio Machado - LÁSTIMA.mp3 " },
  { id: 45, titulo: " Disorder", artista: "Joy Division ", capa: "./capas/joy.jpeg", genero: "pp", audio: "./audio/Joy Division - Disorder (2007 Remaster).mp3 " },
  { id: 46, titulo: "Kodama ", artista: " Alcest", capa: "./capas/kodama.jpeg", genero: "metal", audio: " ./audio/Kodama(MP3_160K).mp3" },
  { id: 47, titulo: "Lamento de Ur ", artista: "Riffcoven ", capa: "./capas/riffcoven.jpeg", genero: "metal", audio: "./audio/Lamento de Ur(MP3_160K).mp3 " },
  { id: 48, titulo: "Layla ", artista: " Derek and the Dominoes", capa: "./capas/layla.jpeg", genero: "rock", audio: "./audio/Layla(MP3_160K).mp3 " },
  { id: 49, titulo: " Veterano", artista: "Leopoldo Rassier ", capa: "./capas/veterano.jpeg", genero: "Gaucha", audio: " ./audio/Leopoldo Rassier - VETERANO.mp3" },
    { id: 50, titulo: " NÃO PODEMO SE ENTREGÁ PROS HOME  ", artista: "Leopoldo Rassier ", capa: "./capas/home.jpeg", genero: "Gaucha", audio: "./audio/Leopoldo Rassier - NÃO PODEMO SE ENTREGÁ PROS HOME.mp3 " },
  { id: 51, titulo: "Liege of Inveracity ", artista: "Suffocation ", capa: "./capas/inveracity.jpeg", genero: "metal", audio: "./audio/Liege of Inveracity(MP3_160K).mp3 " },
  { id: 52, titulo: " Lips in the Hills", artista: "Blue Oyster Cult ", capa: "./capas/lips.jpeg", genero: "metal", audio: "./audio/Lips in the Hills(MP3_160K).mp3 " },
  { id: 53, titulo: "Live is Life ", artista: "Opus ", capa: "./capas/opus.jpeg", genero: "rock", audio: "./audio/Live Is Life (Digitally Remastered) (Live)(MP3_160K).mp3 " },
  { id: 54, titulo: " Batendo Agua", artista: "Luiz Marenco ", capa: "./capas/marenco.jpeg", genero: "Gaucha", audio: "./audio/Luiz Marenco - Batendo Água.mp3 " },
  { id: 55, titulo: "Enchendo os Olhos de Campo ", artista: "Luiz Marenco  ", capa: "./capas/marenco.jpeg", genero: "Gaucha", audio: "./audio/Luiz Marenco - Enchendo os Olhos de Campo.mp3 " },
  { id: 56, titulo: " Os Silencios Nas Janelas do Povoadp", artista: " Luiz Marenco ", capa: "./capas/marenco.jpeg", genero: "Gaucha", audio: "./audio/Luiz Marenco - OS SILÊNCIOS DAS JANELAS DO POVOADO (AO VIVO).mp3 " },
  { id: 57, titulo: "Quando o Verso vem pra Casa ", artista: "Luiz Marenco  ", capa: "./capas/marenco.jpeg", genero: "Gaucha", audio: "./audio/Luiz Marenco - Quando o Verso Vem pra Casa.mp3 " },
  { id: 58, titulo: " Клетка", artista: "Molchat Doma ", capa: "./capas/doma.jpeg", genero: "pp", audio: "./audio/Molchat Doma - Клетка.mp3 " },
    { id: 59, titulo: "Mr. Lucky ", artista: "Henry Mancini ", capa: "./capas/lucky.jpeg", genero: "rock ", audio: " ./audio/Mr. Lucky(MP3_160K).mp3" },
  { id: 60, titulo: "My Journey to the Stars ", artista: " Burzum", capa: "./capas/burzum.jpeg", genero: "metal ", audio: "./audio/My Journey to the Stars(MP3_160K).mp3 " },
  { id: 61, titulo: "O Pescador ", artista: "Vlad V ", capa: "./capas/vlad.png", genero: "rock", audio: "./audio/O Pescador(MP3_320K).mp3 " },
  { id: 62, titulo: "Of Stars And Smoke ", artista: "Candlemass ", capa: "./capas/smoke.jpeg", genero: "metal ", audio: "./audio/Of Stars and Smoke(MP3_128K).mp3" },
  { id: 63, titulo: "Gineteando o Temporal ", artista: "Os Monarcas ", capa: "./capas/monarcas.jpeg", genero: "Gaucha", audio: "./audio/Os Monarcas - Gineteando o Temporal.mp3" },
  { id: 64, titulo: "Passacaglia ", artista: "Beggar's Opera ", capa: "./capas/opera.jpeg", genero: "rock", audio: "./audio/Passacaglia(MP3_160K).mp3" },
  { id: 65, titulo: " People Are Strange", artista: "The Doors ", capa: "./capas/doors.jpeg", genero: "rock", audio: "./audio/Passacaglia(MP3_160K).mp3 " },
  { id: 66, titulo: " Time In a Bottle", artista: "Jim Croce ", capa: "./capas/jim.jpeg", genero: "rock", audio: "./audio/Time in a Bottle(MP3_160K).mp3" },
  { id: 67, titulo: "The Ghoul ", artista: " Pentagram", capa: "./capas/ghoul.jpeg", genero: "metal", audio: "./audio/The Ghoul(MP3_160K).mp3 " },
]

const Musicas = () => {
  const audioRefs = useRef([]);
  const [progressList, setProgressList] = useState(musicas.map(() => 0));
  const [durationList, setDurationList] = useState(musicas.map(() => 0));

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
    ? musicas.filter((m) => m.genero === generoSelecionado)
    : musicas;

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
        {musicasFiltradas.map((musica, index) => (
          <div key={musica.id} className="musicaItem">
            <img src={musica.capa} alt={musica.titulo} className="musicaCapa" />
            <div className="musicaInfo">
              <h3>{musica.titulo}</h3>
              <p>{musica.artista}</p>
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
                  <button onClick={() => adicionarMusicaNaPlaylist(musica.id)}>Adicionar à Playlist</button>
                </div>
              )}
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                src={musica.audio}
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
                    const musica = musicas.find((m) => m.id === id);
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