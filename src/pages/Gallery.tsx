import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getArtworks,
  deleteArtwork,
  Artwork,
} from "../services/artworkServices";
import ArtworkCard from "../components/ArtworkCard";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/pages/Gallery.scss";

const Gallery = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  const filteredArtworks = artworks
    .filter((artwork) =>
      artwork.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const data = await getArtworks();
      setArtworks(data);
    } catch (error) {
      console.error("Error fetching artworks:", error);
    }
  };

  const handleDelete = async (id?: string) => {
    if (!id) {
      console.error("Error: Artwork ID is undefined");
      return;
    }
    try {
      await deleteArtwork(id);
      setArtworks(artworks.filter((artwork) => artwork._id !== id));
    } catch (error) {
      console.error("Error deleting artwork:", error);
    }
  };

  return (
    <>
      <div className="gallery-container">
        {filteredArtworks.length === 0 && (
          <div className="empty-page">
            <div>Our gallery is empty now</div>
            <div>It's a time to add a new artwork</div>
          </div>
        )}
        {filteredArtworks.length > 0 && (
          <>
            <div className="gallery-header">
              <h2>Explore Our Collection</h2>
              <div className="header-actions">
                <div className="input-group">
                  <SearchIcon className="input-icon" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="filter-group">
                  <select onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="asc">Sort by Price (Low to High)</option>
                    <option value="desc">Sort by Price (High to Low)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="artwork-grid">
              {filteredArtworks.map((artwork) => (
                <ArtworkCard
                  key={artwork._id}
                  {...artwork}
                  onDelete={() => handleDelete(artwork._id)}
                />
              ))}
            </div>
          </>
        )}
        <div className="action-buttons">
          <button onClick={() => navigate("/add")}>Add New Artwork</button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
