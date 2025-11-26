# Suno-Style AI Music Playground 🎵🤖

A web application that allows users to **generate AI-driven music loops**, play them directly in the browser, and download them as MIDI files. Inspired by **Suno Studio**, this project demonstrates the integration of **music technology, AI, and web development** into an interactive platform.

---

## Features

- 🎹 **AI Music Generation**: Generate melodies in Lo-Fi, Jazz, or Classical styles.
- ▶️ **Real-Time Playback**: Play generated music in the browser using Tone.js.
- 💾 **Download MIDI**: Save generated loops as MIDI files.
- 🎨 **Interactive Web Interface**: Select a style, generate music, and play it instantly.
- 🔧 **Expandable**: Add new music styles, instruments, or AI models easily.

---

## Tech Stack

- **Backend**: Python, FastAPI, pretty_midi, numpy
- **Frontend**: React, Tone.js, @tonejs/midi
- **Data**: MIDI sequences for AI-style generation
- **Deployment**: Can be hosted using Vercel, Netlify, or Heroku

---

## Installation

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
