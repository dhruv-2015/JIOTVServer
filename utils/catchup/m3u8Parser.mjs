import m3u8 from "m3u8-parser";
function parseM3u8(url, Playlist, id, start, end) {
  let baseurl = url.split("?");
  baseurl = baseurl[0];
  // console.log(baseurl);
  baseurl = url.split("/");
  baseurl.pop();
  baseurl = baseurl.join("/");
  // baseurl = baseurl.replace("https://jiotvmblive.cdn.jio.com", "/jiotvmblive.cdn.jio.com");
  const parser = new m3u8.Parser();
  parser.push(Playlist);
  parser.end();

  let m3u8Playlist = Playlist;

  if (parser.manifest.mediaGroups !== undefined) {
    let audioGroupe = parser.manifest.mediaGroups.AUDIO;
    for (let AUDIO in audioGroupe) {
      for (let audiogroupe in audioGroupe[AUDIO]) {
        m3u8Playlist = m3u8Playlist.replace(
          audioGroupe[AUDIO][audiogroupe].uri,
          `/catchup/getm3u8?id=${id}&m3u8=${baseurl}/${audioGroupe[AUDIO][audiogroupe].uri}`
        );
      }
    }
    parser.manifest.playlists.forEach((playlist) => {
      let playlisturl = playlist.uri.replace("?", "&");
      m3u8Playlist = m3u8Playlist.replace(
        playlist.uri,
        `/catchup/getm3u8/${start}/${end}/${id}?m3u8=${baseurl}/${playlisturl}`
      );
    });
  }
  parser.manifest.segments.forEach((segment) => {
    // console.log(segment.uri);
    m3u8Playlist = m3u8Playlist.replace(
      segment.uri,
      `/catchup/getts/${start}/${end}/${id}?ts=${baseurl}/${segment.uri}`
    );
    const tempKeyUrl = segment.key.uri.replace("https://tv.media.jio.com", "");
    m3u8Playlist = m3u8Playlist.replace(
      segment.key.uri,
      `/catchup/getkey/${start}/${end}/${id}?key=${tempKeyUrl}`
    );
    //  m3u8Playlist = m3u8Playlist.replace(
    //    segment.key.uri,
    //    `/getkey?id=${id}&key=${tempKeyUrl}`
    //  );
  });

  return m3u8Playlist;
}

export default parseM3u8; 