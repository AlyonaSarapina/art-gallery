import React from "react";
import "../styles/components/ArtworkCard.scss";

interface ArtworkProps {
  _id?: string;
  title: string;
  artist: string;
  type: string;
  price: number;
  availability: boolean;
  image?: string;
  onDelete?: () => void;
}

const ArtworkCard: React.FC<ArtworkProps> = ({
  title,
  artist,
  type,
  price,
  availability,
  image,
  onDelete,
}) => {
  return (
    <div
      className={`artwork-card ${availability ? "available" : "exhibition"}`}
    >
      <div className="artwork-image">
        <img src={image || "/assets/placeholder.jpg"} alt={title} />
      </div>
      <div className="artwork-info">
        <div>
          <h3 className="artwork-info_title">{title}</h3>
          <p className="artwork-info_artist">By: {artist}</p>
          <p className="artwork-info_artist">{type.toUpperCase()}</p>
        </div>
        <p className="artwork-info_price">${price}</p>
      </div>
      {onDelete && (
        <div className="artwork-actions">
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ArtworkCard;
