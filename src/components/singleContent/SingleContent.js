import { Badge } from '@material-ui/core'
import {img_300, unavilable} from '../../apis/Api'
import "./SingleContent.css"



function SingleContent({id, poster, title, date, media_type, vote_average}){
    return(
        <div className="media" key={id}>
            <Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'} />
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavilable} alt={title} />
            <b className="title">{title}</b>
            <span className="subTitle">
                {media_type === "tv" ? "Tv Series" : "Movie"}
                <span className="subTitle">{date}</span>
            </span>
        </div>
    )
}

export default SingleContent


