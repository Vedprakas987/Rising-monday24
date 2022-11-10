import Imagecard from "./imagecard1";
const images = [
    {src:"https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png"},
    {src:"https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png"},
    {src:"https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png"},
   ]
function images(){
return(
    <>
    {images.map(elem)=>{
        <Imagecard/>
    }
    </>
)
}
export default images;