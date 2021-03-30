import client from "./client";
import authStorage from "../auth/storage"
const endpoint = "/listings";

const User =  authStorage.getUser();
const getListings = () => client.get(endpoint);

export const addListing = (listing, onUploadProgress) => {
  var temp = 'https://cdn.dribbble.com/users/3008811/screenshots/7090670/media/5a61f4778d6a527572a773c1f69001b8.gif';
  //console.log(listing.category.label);
  if (listing.category.label === 'Plumber') {
    temp = 'https://www.procore.com/jobsite/wp-content/uploads/2019/08/1d6285_8b2cacbb98364385ae5f10ec397a9bac_mv2.gif'
  }
  else if (listing.category.label === 'Carpenter') {
    temp = 'https://www.customerservicecenterjaipur.com/images/carpentry-medium_1.gif';
  
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
    temp = 'https://www.solutionspick.com/wp-content/uploads/2017/04/Electrician.gif'
  }
  else if (listing.category.label === 'Musician') {
    temp = 'https://cdn.dribbble.com/users/1774872/screenshots/5506400/singer3-dr.gif'
  }
  else if (listing.category.label === 'Tutor') {
    temp = 'https://i.pinimg.com/originals/bb/0c/c7/bb0cc783196fa9b2119864ff90eb5702.gif'
  }
  else if (listing.category.label === 'Painter') {
    temp = 'https://cdn.dribbble.com/users/2124038/screenshots/4216556/boyaci_800_600.gif';
  }
  else if (listing.category.label === 'Other') {
    temp = 'https://cdn.dribbble.com/users/3008811/screenshots/7090670/media/5a61f4778d6a527572a773c1f69001b8.gif'
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
