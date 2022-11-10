function images(){
return(
    <>
    {images.map((elem)=>(
  <Imagecard src={elem.src}/>
))
}
    </>
)
}
export default images;