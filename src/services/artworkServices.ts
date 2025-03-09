import axios from "axios";
import API_BASE_URL from "../api/api";

export interface Artwork {
  _id?: string;
  title: string;
  artist: string;
  type: string;
  price: number;
  availability: boolean;
  image?: string;
}

export const getArtworks = async (): Promise<Artwork[]> => {
  const response = await axios.get(`${API_BASE_URL}/artworks`);
  return response.data;
};

export const getArtworkById = async (id: string): Promise<Artwork> => {
  const response = await axios.get(`${API_BASE_URL}/artworks/${id}`);
  return response.data;
};

export const createArtwork = async (artwork: Artwork): Promise<Artwork> => {
  const response = await axios.post(`${API_BASE_URL}/artworks`, artwork);
  return response.data;
};

export const deleteArtwork = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/artworks/${id}`);
};
