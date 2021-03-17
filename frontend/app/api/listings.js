import client from "./client";
import authStorage from "../auth/storage"
const endpoint = "/listings";

const User =  authStorage.getUser();
const getListings = () => client.get(endpoint);
console.log(getListings);

export const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("id", User._W.userId);
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.label);
  data.append("description", listing.description);
  data.append("images", listing.image);
  //console.log(User._W.userId);
  console.log(data);
  

 

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post(endpoint, JSON.stringify(data), {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};
