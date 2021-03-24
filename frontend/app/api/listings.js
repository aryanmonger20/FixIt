import client from "./client";
import authStorage from "../auth/storage"
const endpoint = "/listings";

const User =  authStorage.getUser();
const getListings = () => client.get(endpoint);
//console.log(getListings);
//---//


//--//
export const addListing = (listing, onUploadProgress) => {
  var temp = 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1615&q=80';
  //console.log(listing.category.label);
  if (listing.category.label === 'Plumber') {
    temp = 'https://images.unsplash.com/photo-1538474705339-e87de81450e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
  }
  else if (listing.category.label === 'Carpenter') {
    temp = 'https://images.unsplash.com/photo-1561297331-a9c00b9c2c44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
  }
  else if (listing.category.label === 'Mechanic') {
    temp = 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2009&q=80';
  }
  else if (listing.category.label === 'Cameraman') {
    temp = 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80';
  }
  else if (listing.category.label === 'Maid') {
    temp = 'https://images.unsplash.com/photo-1559308078-88465deb35cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
  }
  else if (listing.category.label === 'Electrician') {
    temp = 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
  }
  else if (listing.category.label === 'Musician') {
    temp = 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
  }
  else if (listing.category.label === 'Tutor') {
    temp = 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80';
  }
  else if (listing.category.label === 'Painter') {
    temp = 'https://images.unsplash.com/photo-1563898058033-94d26a68166f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80';
  }
  else if (listing.category.label === 'Other') {
    temp = 'https://images.unsplash.com/photo-1602843080016-7872abf0ea68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
  }
//console.log(temp)
  
  const data = new FormData();
  data.append("emailuser", User._W.email);
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.label);
  data.append("description", listing.description);
  data.append("contact", listing.contact);
  data.append("image",temp)
  console.log(User._W.email);
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
