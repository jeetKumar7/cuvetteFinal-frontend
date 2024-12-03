import React, { useEffect, useState } from 'react'
import styles from './Restaurant.module.css'
import TopLabel from '../components/TopLabel'
import Navbar from '../components/Navbar'
import Restaurant_Banner from '../components/Restaurant_Banner'
import SearchContainer from '../components/SearchContainer'
import MenuNavbar from '../components/MenuNavbar'
import ImgCard from '../components/ImgCard'
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import Category from '../components/Category'
import { burgerData1, coldDrinkData, frisData } from '../data/menuData'
import Timing from '../components/Timing'
import Map from '../components/Map'
import restaurant from "../data/Restaurant";
import FoodCategory from "../components/FoodCategory";
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Cart from '../components/Cart'
import { FetchFoodData } from '../services/restaurant'
import { useNavigate } from 'react-router-dom'
import { AddToCart, getCartItems } from '../services/cart'
import { notify } from './../utils/notify';
import { ToastContainer } from 'react-toastify'


export default function Restaurant() {
  const navigate = useNavigate()
  const [isCartClicked , setIsCartClicked] =useState(false)
  const [isLoading,setIsLoading] =useState(false)
  const [cartItems,setCartItems] = useState([])
  

  const [burgerData,setBurgerData] =useState([])
  const [friesData,setFriesData] =useState([])
  const [colddrinksData,setColdDrinksData] =useState([])

  const handleCartClick = async (foodName,price,unitPrice)=>{
    
    console.log(foodName,price,unitPrice)
    const res= await AddToCart({foodName,price,unitPrice})
    console.log(res)

    if(res.status ==200){
      notify("Item Added To Cart")

      setTimeout(()=>{
        setIsCartClicked(true)
        fetchCartItems()
      },2000)
      
    }
    else if(res.status===201){
      notify("Item Already Added To Cart")
    }
    else{
      notify("Failed To Add Item")
    }
  }
  const fetchBurger= async ()=>{
    
    try {
      setIsLoading(true)
      const res = await FetchFoodData("Burgers")
     if (res.status === 201){
      setBurgerData(res.data.data)
     }
    } 
    catch (error) {
      console.log(error)
      return error
    }
    
  }

   const fetchFriesData = async () =>{
    try {
      const res = await FetchFoodData("Fries")
      setFriesData(res.data.data)
    } catch (error) {
      return error
    }
   }


   const fetchcolddrinks = async()=>{
    try {
      const res = await FetchFoodData("ColdDrinks")
      setColdDrinksData(res.data.data)
    } catch (error) {
      return error
    }
   }

  useEffect(()=>{
    fetchBurger()
    fetchFriesData()
    fetchcolddrinks()
  },[])


  const handleClick =()=>{
    navigate('/restaurant')
  }

  const fetchCartItems = async ()=>{
    try {
      const res = await getCartItems()
      console.log(res)
      setCartItems(res.data.cartItems)
    } catch (error) {
      return error
    }
  }

  
  const menuNavbarData =[
    {
      name:'Offers'
    },
    {
      name:'Burgers'
    },
    {
      name:'Fries'
    },
    {
      name:'Snacks'
    },
    {
      name:'Salads'
    },
    {
      name:'Cold drinks'
    },
    {
      name:'Happy Meal® '
    },
    {
      name:'Desserts'
    },
    {
      name:'Hot drinks'
    },
    {
      name:'Sauces'
    },
    {
      name:'Orbit®'
    },
  ]

  console.log(burgerData)
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <TopLabel setIsCartClicked={setIsCartClicked} isCartClicked={isCartClicked}/>
      </div>

      <div className={styles.navbar}>
       <Navbar/>
      </div>

      <div className={styles.restaurant_banner}>
         <Restaurant_Banner/>
      </div>

      <div className={styles.search_container_withText}>
        <SearchContainer/>
      </div>

      <div className={styles.menu_navbar}>
         <MenuNavbar data={menuNavbarData}/>
      </div>
      
      <div className={styles.mini_container}>

        <div className={styles.mini_left} style={{width:isCartClicked ? '70%':'100%'}}>
        <div className={styles.food_card_div} style={{gridTemplateColumns : isCartClicked ? 'repeat(2,1fr)':'repeat(3,1fr)'}}>
        <ImgCard
          text={"Chef Burgers London"}
          orangetext={"Restaurant"}
          image={banner1}
          isBlackvisible={true}
          isCart={true}
        />
        <ImgCard
          text={"Grand Ai Cafe London"}
          orangetext={"Restaurant"}
          image={banner2}
          isBlackvisible={true}
          isCart={true}
        />
        <ImgCard
          text={"Butterbrot Caf’e London"}
          orangetext={"Restaurant"}
          image={banner3}
          isBlackvisible={true}
          isCart={true}
        />
        
      </div>
      <div className={styles.categories_data} style={{marginTop:isCartClicked && '2%'}}>
         <Category menuName={"Burgers"} menuData={burgerData} isCartClicked={isCartClicked}  handleCartClick={handleCartClick} />

      </div>
      <div className={styles.fries_data} style={{marginTop:isCartClicked && '2%'}}>
      <Category menuName={"Fries"} menuData={friesData} isOrange={true} isCartClicked={isCartClicked}  handleCartClick={handleCartClick} />

      </div>
      <div className={styles.fries_data} style={{marginTop:isCartClicked && '2%'}}>
      <Category menuName={"Cold Drinks"} menuData={colddrinksData} isOrange={true} isCartClicked={isCartClicked} handleCartClick={handleCartClick} />

      </div>

        </div>


        <div className={styles.mini_right} style={{display:!isCartClicked && 'none'}}>
          <Cart setIsCartClicked={setIsCartClicked} fetchCartItems={fetchCartItems}  cartItems={cartItems}/>
        </div>
      </div>

      

      

      

      

      <div className={styles.timing_div}>
         <Timing/>
      </div>

      <div className={styles.map}> 
         <Map/>
         <div className={styles.map_subpart}>
          <h4>McDonald’s</h4>
          <p style={{color:'#FC8A06'}}>South London</p>
          <p style={{marginTop:'3%'}}>Tooley St, London Bridge, London SE1 2TF,United Kingdom</p>
          <h5 style={{marginTop:'4%'}}>Phone number</h5>
          <p style={{color:'#FC8A06'}}>+934443-43</p>
          <h5 style={{marginTop:'3%'}}>Website</h5>
          <p style={{color:'#FC8A06'}}>http://mcdonalds.uk/</p>

         </div>
      </div>

      <div className={styles.testimonials}>
         <Testimonials/>
      </div>

      <div className={styles.similar_rest}>
      <FoodCategory
          text={"Similar Restaurants"}
          data={restaurant}
          color={"#FC8A06"}
          textcolor={"white"}
          textalign={"center"}
          handleClick={handleClick}

        />
      </div>

      


      <div className={styles.footer}>
        <Footer/>

      </div>
      <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

     

    </div>
  )
}
