import React, { useEffect, useRef, useState } from 'react';
import { Disc3, Music2, Pause, Play, Volume2 } from 'lucide-react';

const WAVEFORM = [34, 58, 42, 76, 48, 86, 63, 38, 72, 92, 54, 68, 40, 80, 62, 96, 48, 70, 36, 64, 88, 52, 74, 44, 82, 60, 90, 46, 66, 38, 78, 56, 84, 50, 72, 42];

const EMPTY_TRACK = {
  src: '',
  title: 'Tu canción irá aquí',
  artist: 'Rodrigo Aquije · selección personal'
};

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) return '00:00';
  const minutes = Math.floor(seconds / 60);
  return `${String(minutes).padStart(2, '0')}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
};

export default function MusicPlayer({ lang = 'es', track = EMPTY_TRACK }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(.72);
  const [notice, setNotice] = useState('');
  const hasTrack = Boolean(track.src);

  const messages = lang === 'es'
    ? { label: 'Banda sonora personal', empty: 'Añade un MP3 para activar este reproductor.', ready: 'Pista lista', play: 'Reproducir', pause: 'Pausar', volume: 'Volumen' }
    : { label: 'Personal soundtrack', empty: 'Add an MP3 to activate this player.', ready: 'Track ready', play: 'Play', pause: 'Pause', volume: 'Volume' };
  const displayTitle = hasTrack ? track.title : (lang === 'es' ? 'Tu canción irá aquí' : 'Your song will live here');
  const displayArtist = hasTrack ? track.artist : (lang === 'es' ? 'Rodrigo Aquije · selección personal' : 'Rodrigo Aquije · personal selection');

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    const update = () => setCurrentTime(audio.currentTime);
    const metadata = () => setDuration(audio.duration || 0);
    const ended = () => setPlaying(false);
    audio.addEventListener('timeupdate', update);
    audio.addEventListener('loadedmetadata', metadata);
    audio.addEventListener('ended', ended);
    return () => {
      audio.removeEventListener('timeupdate', update);
      audio.removeEventListener('loadedmetadata', metadata);
      audio.removeEventListener('ended', ended);
    };
  }, [track.src]);

  useEffect(() => { if (audioRef.current) audioRef.current.volume = volume; }, [volume]);

  const missingTrack = () => {
    setNotice(messages.empty);
    window.setTimeout(() => setNotice(''), 2600);
  };

  const togglePlayback = async () => {
    if (!hasTrack) return missingTrack();
    if (playing) audioRef.current.pause();
    else await audioRef.current.play();
    setPlaying(!playing);
  };

  const seek = (value) => {
    if (!hasTrack) return missingTrack();
    const nextTime = Number(value);
    audioRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return <article className={`personal-player ${playing ? 'is-playing' : ''} ${hasTrack ? 'has-track' : 'is-empty'}`}>
    <audio ref={audioRef} src={hasTrack ? track.src : undefined} preload="metadata" />
    <span className="player-corner player-corner--one" aria-hidden="true" />
    <span className="player-corner player-corner--two" aria-hidden="true" />

    <header className="player-statusbar">
      <span><i aria-hidden="true" /> {hasTrack ? messages.ready : messages.empty}</span>
      <span>MP3 · {lang === 'es' ? 'ARCHIVO LOCAL' : 'LOCAL FILE'}</span>
    </header>

    <div className="player-main-grid">
      <div className="player-orbit" aria-hidden="true"><span><Disc3 /></span><i /><i /><i /></div>
      <div className="player-track-copy">
        <span><Music2 /> {messages.label}</span>
        <h3>{displayTitle}</h3>
        <p>{displayArtist}</p>
      </div>
      <div className="player-time"><strong>{formatTime(currentTime)}</strong><span>{formatTime(duration)}</span></div>
    </div>

    <div className="player-waveform" aria-hidden="true">
      {WAVEFORM.map((height, index) => <i key={`${height}-${index}`} style={{ '--bar-height': `${height}%`, '--bar-delay': `${index * -34}ms` }} />)}
      <span style={{ width: `${progress}%` }} />
    </div>

    <input className="player-scrubber" type="range" min="0" max={duration || 100} step=".1" value={hasTrack ? currentTime : 0} onChange={(event) => seek(event.target.value)} aria-label={lang === 'es' ? 'Posición de reproducción' : 'Playback position'} />

    <footer className="player-controls">
      <div className="player-buttons">
        <button className="player-play" onClick={togglePlayback} aria-label={playing ? messages.pause : messages.play}>{playing ? <Pause /> : <Play />}</button>
      </div>
      <label className="player-volume"><Volume2 /><span>{messages.volume}</span><input type="range" min="0" max="1" step=".01" value={volume} onChange={(event) => setVolume(Number(event.target.value))} /></label>
      <span className={`player-notice ${notice ? 'is-visible' : ''}`} role="status">{notice || (hasTrack ? messages.ready : messages.empty)}</span>
    </footer>
  </article>;
}
