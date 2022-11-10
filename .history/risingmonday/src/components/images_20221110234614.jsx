import Imagecard from "./imagecard1";
function Images(){
    
return(
    <>
    <div id="container">

      {
       images.map((elem)=>{
            <Imagecard src={elem.src}/>
        })
}

    </div>
    </>
)
}
export default Images;