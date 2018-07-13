class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = []
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }
}


class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  get overallRating() {
    let sumRating = 0;
    let overallRating = null;

    for (const track of this.tracks) {
      sumRating += track.rating;
    }
    overallRating = sumRating / this.tracks.length;
    return overallRating;
  }

  get totalDuration() {
    let totalDuration = 0;

    for (const track of this.tracks) {
      totalDuration += track.length;
    }
    return totalDuration;
  }
}


class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

let library1 = new Library('Tunes', 'Theresa');

let track1 = new Track('Como Te Quiero', 5, 180);
let track2 = new Track('Sunday', 5, 120);
let track3 = new Track('Papaoutai', 5, 150);

let playlist1 = new Playlist('Summer Jamz');

playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);

library1.addPlaylist(playlist1);

let track4 = new Track('River Takes the Town', 4, 180);
let track5 = new Track('Trophy V6', 3, 120);
let track6 = new Track('Manitouna', 2, 200);

let playlist2 = new Playlist('Throwbacks');

playlist2.addTrack(track4);
playlist2.addTrack(track5);
playlist2.addTrack(track6);

library1.addPlaylist(playlist2);

console.log(playlist1.totalDuration);
