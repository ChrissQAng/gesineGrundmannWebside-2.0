import "./Tile.css";
import { Link } from "react-router-dom";

const Tile = ({ object }) => {
  console.log("Tile-object param", object);

  const imageUrl = import.meta.env.VITE_SERVER_IP + object.images[0].image.url;
  const mimeType = object.images[0].image.mimeType;
  console.log("mimeType", mimeType);
  const isVideo = mimeType?.startsWith("video/");

  return (
    <div className="tile-wrapper">
      <Link to={`/details/${object.id}`} state={object}>
        {isVideo ? (
          <video className="tile-image" src={imageUrl} controls={false} muted />
        ) : (
          <img
            className="tile-image"
            src={imageUrl}
            // backend connection
            //  src={object.images[0].image.url} // SERVER-CODE
          />
        )}
      </Link>
    </div>
  );
};

export default Tile;
