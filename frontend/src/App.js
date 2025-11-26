import React, { useState } from "react";
import { Midi } from "@tonejs/midi";
import Tone from "tone";

function App() {
  const [style, setStyle] = useState("lofi");
  const [midiUrl, setMidiUrl] = useState(null);

  const generateMusic = async () => {
    const response = await fetch(`http://localhost:8000/generate/?style=${style}`);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setMidiUrl(url);
  };

  const playMidi = async () => {
    if (!midiUrl) return;

    const midiData = await fetch(midiUrl).then((res) => res.arrayBuffer());
    const midi = new Midi(midiData);

    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    midi.tracks[0].notes.forEach((note) => {
      synth.triggerAttackRelease(note.name, note.duration, note.time);
    });

    Tone.Transport.start();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Suno-Style AI Music Playground</h1>
      <select value={style} onChange={(e) => setStyle(e.target.value)}>
        <option value="lofi">Lo-Fi</option>
        <option value="jazz">Jazz</option>
        <option value="classical">Classical</option>
      </select>
      <br /><br />
      <button onClick={generateMusic}>Generate Music</button>
      <button onClick={playMidi} disabled={!midiUrl}>Play Music</button>
    </div>
  );
}

export default App;
