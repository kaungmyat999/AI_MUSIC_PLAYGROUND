import pretty_midi
import numpy as np
import os
from datetime import datetime

def generate_midi(style: str, output_dir: str) -> str:
    """
    Generate a simple MIDI clip. Styles: 'lofi', 'jazz', 'classical'
    """
    style_params = {
        "lofi": {"notes": range(60, 72), "length": 32, "velocity": 60},
        "jazz": {"notes": range(55, 79), "length": 32, "velocity": 80},
        "classical": {"notes": range(60, 84), "length": 32, "velocity": 100},
    }
    params = style_params.get(style.lower(), style_params["lofi"])

    midi = pretty_midi.PrettyMIDI()
    piano = pretty_midi.Instrument(program=0)

    start_time = 0
    duration = 0.5  # seconds per note
    for i in range(params["length"]):
        note_number = np.random.choice(params["notes"])
        note = pretty_midi.Note(
            velocity=params["velocity"],
            pitch=note_number,
            start=start_time,
            end=start_time + duration
        )
        piano.notes.append(note)
        start_time += duration

    midi.instruments.append(piano)
    filename = os.path.join(output_dir, f"{style}_{datetime.now().strftime('%Y%m%d%H%M%S')}.midi")
    midi.write(filename)
    return filename
