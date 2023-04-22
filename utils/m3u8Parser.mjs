import m3u8 from "m3u8-parser";
export default function parseM3u8(url, Playlist, id) {
  let baseurl = url.split("?");
  baseurl = baseurl[0];
  // console.log(baseurl);
  baseurl = url.split("/");
    baseurl.pop();
    baseurl = baseurl.join("/");
    baseurl = baseurl.replace("https://jiotvmblive.cdn.jio.com", "/jiotvmblive.cdn.jio.com");
    const parser = new m3u8.Parser();
    parser.push(Playlist);
    parser.end();

    let m3u8Playlist = Playlist;
    // console.log(JSON.stringify(parser.manifest));
    // obj["dd"] != undefined;
    if (parser.manifest.mediaGroups !== undefined) {
      let audioGroupe = parser.manifest.mediaGroups.AUDIO;
      for (let AUDIO in audioGroupe) {
        for (let audiogroupe in audioGroupe[AUDIO]) {
          try {
            m3u8Playlist = m3u8Playlist.replace(
              audioGroupe[AUDIO][audiogroupe].uri,
              `/getm3u8?id=${id}&m3u8=${baseurl}/${audioGroupe[AUDIO][audiogroupe].uri}`
            );
          } catch (error) {
            
          }
        }
      }

      audioGroupe = parser.manifest.mediaGroups.SUBTITLES;
      for (let AUDIO in audioGroupe) {
        // console.log(audioGroupe[AUDIO]);
        for (let audiogroupe in audioGroupe[AUDIO]) {
          console.log(audioGroupe[AUDIO][audiogroupe]);
          try {
            m3u8Playlist = m3u8Playlist.replace(
              audioGroupe[AUDIO][audiogroupe].uri,
              `/getm3u8?id=${id}&m3u8=${baseurl}/${audioGroupe[AUDIO][audiogroupe].uri}`
            );
          } catch (error) { }
        }
      }
      parser.manifest.playlists.forEach((playlist) => {
        try {
          let temp_key = playlist.uri.replace(".m3u8", "");
          temp_key += "-iframes.m3u8";
          m3u8Playlist = m3u8Playlist.replace(
            playlist.uri,
            `/getm3u8?id=${id}&m3u8=${baseurl}/${playlist.uri}`
          );
          m3u8Playlist = m3u8Playlist.replace(
            temp_key,
            `/getm3u8?id=${id}&m3u8=${baseurl}/${temp_key}`
          );
        } catch (error) { }
      });
    }
  parser.manifest.segments.forEach((segment) => {
      try {
        m3u8Playlist = m3u8Playlist.replace(segment.uri, `/getts?id=${id}&ts=${baseurl}/${segment.uri}`);
      } catch (error) { }
      try {
        const tempKeyUrl = segment.key.uri.replace("https://tv.media.jio.com", "");
        m3u8Playlist = m3u8Playlist.replace(segment.key.uri, `/getkey?id=${id}&key=${tempKeyUrl}`);
      } catch (error) {
        
      }
    });

    
    return m3u8Playlist;
}


// class ParserM3u8 {
//     constructor(baseurl, Playlist) {
//         this.baseurl = baseurl;
//         this.playlist = Playlists;
//     }
    
//     name(params) {
        
//     }
// }