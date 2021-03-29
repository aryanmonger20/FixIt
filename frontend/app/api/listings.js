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
    temp = 'https://www.procore.com/jobsite/wp-content/uploads/2019/08/1d6285_8b2cacbb98364385ae5f10ec397a9bac_mv2.gif'
  }
  else if (listing.category.label === 'Carpenter') {
    temp = 'https://images.unsplash.com/photo-1561297331-a9c00b9c2c44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
  }
  else if (listing.category.label === 'Mechanic') {
    temp = 'https://cdn.dribbble.com/users/2221597/screenshots/11933222/media/c7bff7d4fa3f4befecb1cd1ae87c08ae.gif';
  }
  else if (listing.category.label === 'Cameraman') {
    temp = 'https://i.pinimg.com/originals/ca/db/6c/cadb6cb33aca65a9966824447b7ad940.gif'}
  else if (listing.category.label === 'Maid') {
    temp = 'https://www.w-p.co.uk/hubfs/services.gif'
  }
  else if (listing.category.label === 'Electrician') {
    temp = 'https://media.istockphoto.com/vectors/vector-electircian-repairing-socket-flat-design-vector-id959020120?k=6&m=959020120&s=612x612&w=0&h=JB5iAFFQpBaJUr9UqF8dlK1Bm_ISS2hPtmXt81zcpm0='
  }
  else if (listing.category.label === 'Musician') {
    temp = 'https://cdn.dribbble.com/users/1774872/screenshots/5506400/singer3-dr.gif'
  }
  else if (listing.category.label === 'Tutor') {
    temp = 'https://i.pinimg.com/originals/bb/0c/c7/bb0cc783196fa9b2119864ff90eb5702.gif'
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
  data.append("city",listing.city)
  console.log(User._W.email);
  console.log(data);
  

 

  if (listing.location)
    data.append("location", (listing.location));

  return client.post(endpoint, JSON.stringify(data), {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};
