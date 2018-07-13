class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = []
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

  // get overallRating() {

  // }
}


class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

let track1 = new Track('Como Te Quiero', 5, 180);
let track2 = new Track('Sunday', 5, 120);
let track3 = new Track('Papaoutai', 5, 150);

let playlist1 = new Playlist('Summer Jamz');

playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
console.log(playlist1);

let track4 = new Track('River Takes the Town', 4, 180);
let track5 = new Track('Trophy V6', 3, 120);
let track6 = new Track('Manitouna', 2, 200);

let playlist2 = new Playlist('Throwbacks');

playlist2.addTrack(track4);
playlist2.addTrack(track5);
playlist2.addTrack(track6);

console.log(playlist2);
