
const Songs = () => {

    return (
    <div className="songs-container">
        <div className="song-header">
            <a href="https://soundcloud.com/understable" title="understable" target="_blank">understable</a> · <a href="https://soundcloud.com/understable/daft-punk-one-more-time-understable-remix" title="Daft Punk - One More Time (Understable Remix)" target="_blank">Daft Punk - One More Time (Understable Remix)</a>
        </div>
        <iframe width="100%" height="200" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1455826942&color=%234e164f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div className="song-header">
            <a href="https://soundcloud.com/understable" title="understable" target="_blank">understable</a> · <a href="https://soundcloud.com/understable/foreign-worlds" title="Foreign Worlds" target="_blank">Foreign Worlds</a>
        </div>
        <iframe width="100%" height="200" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1124603158&color=%2344195f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div className="song-header">
            <a href="https://soundcloud.com/understable" title="understable" target="_blank">understable</a> · <a href="https://soundcloud.com/understable/echoes" title="Echoes" target="_blank">Echoes</a>
        </div>
        <iframe width="100%" height="200" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/933574090&color=%231b1322&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div className="song-header">
            <a href="https://soundcloud.com/understable" title="understable" target="_blank">understable</a> · <a href="https://soundcloud.com/understable/soaring" title="Soaring" target="_blank">Soaring</a>
        </div>
        <iframe width="100%" height="200" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/844842478&color=%231b1322&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div className="song-header">
            <a href="https://soundcloud.com/understable" title="understable" target="_blank">understable</a> · <a href="https://soundcloud.com/understable/clo-sur-while-you-think-it-over-pofinho-x-understable-remix" title="Clo Sur - While You Think It Over (Pofinho X Understable Remix)" target="_blank">Clo Sur - While You Think It Over (Pofinho X Understable Remix)</a>
        </div>
        <iframe width="100%" height="200" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/810404731&color=%231b1322&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div className="song-header">
            <a href="https://soundcloud.com/understable" title="understable" target="_blank">understable</a> · <a href="https://soundcloud.com/understable/clo-sur-while-you-think-it-over-pofinho-x-understable-remix" title="Clo Sur - While You Think It Over (Pofinho X Understable Remix)" target="_blank">Clo Sur - While You Think It Over (Pofinho X Understable Remix)</a>
        </div>        
        <iframe width="100%" height="200" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/810401269&color=%231b1322&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        {/*songs.map((song) => 
        {
            index++;
            return (
            <div className="song" key={index}>
                <p>{songNames[index -1]}</p>
                <audio className="audio" controls="controls">
                    <source src={song} type="audio/wav"></source>
                    Hello
                </audio>
            </div>)
        })*/}
    </div>
  )
}

export default Songs
