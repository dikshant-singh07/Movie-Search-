function Moviecard({movie}) {
    function onFavouriteClick() {
        alert("clicked")
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={onFavouriteClick}>
                        ♡
                    </button>

                </div>
        </div>
        <div className="movie-info">
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-release-date">{movie.release_date}</p>
        </div>
    </div>
}