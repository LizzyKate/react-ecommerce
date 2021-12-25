import Banner from "./Banner"
import Slider from "./Slider"
import menOne from './images/men-01.jpg'
import menTwo from './images/men-02.jpg'
import menThree from './images/men-03.jpg'
import womenOne from './images/women-01.jpg'
import womenTwo from './images/women-02.jpg'
import womenThree from './images/women-03.jpg'
import kidOne from './images/kid-01.jpg'
import kidTwo from './images/kid-02.jpg'
import kidThree from './images/kid-03.jpg'
import Explore from "./Explore"
import Social from "./Social"
import { useState, useEffect } from "react"
import axios from "axios"


const menText = "Men's Latest"
const womenText = "Women's Latest"
const kidText = "Kids's Latest"
const maleId = 'men'
const femaleId ='women'
const kidId = 'kids'
function Landing(){
  const[men, setMen] = useState([])
  const[women, setWomen] = useState([])
  const[kids, setKids] = useState([])
    const allProducts =  async () => {
        const response = await axios.get('http://localhost:1337/api/cloths')
        setMen(filterProduct('Male', response.data.data)) 
        setWomen(filterProduct('Female', response.data.data))
        setKids(filterProduct('Kids', response.data.data))

    }
    useEffect(() => {
        allProducts()
       }, [])
    
    const filterProduct = (type, allProduct) => {
        const filteredItems = allProduct.filter((e) => {
            return e.attributes.Category === type
        })
        return filteredItems
    }
   
  
    return (
        <div className="">
            <Banner/>
            <Slider men={men} latest={menText} identity={maleId}/>
            <Slider men={women} latest={womenText} identity={femaleId}/>
            <Slider men={kids} latest={kidText} identity={kidId}/>
            <Explore/>
            <Social/>
        </div>
    )
}

export default Landing