import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);
console.log(getListings)

export const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
 
  data.append("title", listing.title);
  data.append("price",listing.price);
  data.append("categoryId", listing.category.label);
  data.append("description", listing.description);
  data.append("images", listing.image);
  console.log(data)
  
  
  // listing.images.forEach((image, index) =>
  //   data.append("images", {
  //     name: "image" + index,
  //     type: "image/jpeg",
  //     uri: image,
  //   })
  // );

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
