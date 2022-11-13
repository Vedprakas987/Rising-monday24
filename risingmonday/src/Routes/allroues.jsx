import {Routes,Route} from "react-router-dom"
import Product from "../components/Product"
import Usecases from "../components/Usecases";

function Allroutes(){
    return(
        <Routes>
            <Route path="/product" element={<Product/>}/>
            <Route path="/Usecase" element={<Usecases/>}/>
        </Routes>
    )
}
export default Allroutes;