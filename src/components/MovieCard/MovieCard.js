import React from "react"
import  "./MovieCard.scss"
import { FiX, FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const MovieCard = ({
  id,
  title,
  category,
  likes,
  dislikes,
  userRating,
  deleteMovie,
  updateRatings
}) => {

  let totalLikes = userRating === 'thumbUp' ? likes + 1 : likes
  let totalDislikes = userRating === 'thumbDown' ? dislikes + 1 : dislikes
  let lineWidth = (totalLikes / (totalLikes + totalDislikes)) * 100

  return(
    <div className="movieCard">
      <div className="movieCard--header">
        <span className="movieCard--header-category">{category}</span>
        <FiX className="movieCard--header-cross" onClick={() => deleteMovie(id, category)} />
      </div>
      <h4 className="movieCard--title">{title}</h4>
      <div className="movieCard--likeSection">
        <div className="movieCard--likeWrapper">
          <FiThumbsUp className="movieCard--likeWrapper-icon" onClick={() => updateRatings(id, 'thumbUp')} color={userRating === 'thumbUp' ? "green" : ""}/>
          <span className="movieCard--likeWrapper-text">{totalLikes} like</span>
        </div>
        <div className="movieCard--likeWrapper">
          <FiThumbsDown className="movieCard--likeWrapper-icon" onClick={() => updateRatings(id, 'thumbDown')} color={userRating === 'thumbDown' ? "red" : ""} />
          <span className="movieCard--likeWrapper-text">{totalDislikes} dislike</span>
        </div>
      </div>
      <div className="movieCard--likeRatio">
        <div className="movieCard--likeLine" style={{width: `${lineWidth}%` }}></div>
      </div>
    </div>
  )
}
 
export default MovieCard;

