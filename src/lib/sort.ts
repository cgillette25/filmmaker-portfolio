/* How videos order themselves: episodes by number, then anything with an
   explicit `order`, then newest first. */

interface Sortable {
  data: { episode?: number; order?: number; date?: Date };
}

export function byRunningOrder(a: Sortable, b: Sortable) {
  if (a.data.episode != null && b.data.episode != null) return a.data.episode - b.data.episode;
  if (a.data.order != null || b.data.order != null) {
    return (a.data.order ?? Infinity) - (b.data.order ?? Infinity);
  }
  return (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0);
}
