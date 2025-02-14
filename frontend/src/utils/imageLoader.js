// Function to import all images from a specific folder
function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  
  // Dynamically import all images from '../assets/img' folder
const images = importAll(require.context("../assets/img", false, /\.(png|jpe?g|svg)$/));
  
export default images;
  