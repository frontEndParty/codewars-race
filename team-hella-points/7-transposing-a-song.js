const notesValues = {
  A: 0,
  "A#": 1,
  Bb: 1,
  B: 2,
  C: 3,
  "C#": 4,
  Db: 4,
  D: 5,
  "D#": 6,
  Eb: 6,
  E: 7,
  F: 8,
  "F#": 9,
  Gb: 9,
  G: 10,
  "G#": 11,
  Ab: 11,
};

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

function transpose(song, interval) {
  return song.map((note) => {
    let newValue = notesValues[note] + interval;
    if (newValue > 11) newValue -= 12;
    if (newValue < 0) newValue += 12;
    return notes[newValue];
  });
}
