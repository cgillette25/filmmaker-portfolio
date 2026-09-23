/* Pull the 11-character video id out of whatever someone pasted.
   Handles a bare id plus every share format YouTube hands out. */

const ID = /^[A-Za-z0-9_-]{11}$/;

export function youtubeId(input: string): string {
  const raw = (input ?? '').trim();
  if (ID.test(raw)) return raw;

  // watch?v=ID, and also &v=ID
  const v = raw.match(/[?&]v=([A-Za-z0-9_-]{11})/);
  if (v) return v[1];

  // youtu.be/ID, /shorts/ID, /embed/ID, /live/ID
  const path = raw.match(/(?:youtu\.be\/|\/shorts\/|\/embed\/|\/live\/)([A-Za-z0-9_-]{11})/);
  if (path) return path[1];

  // last resort: the final path segment before any query string
  const tail = raw.split('?')[0].split('/').pop() ?? '';
  return ID.test(tail) ? tail : raw;
}
