
import {api}  from "../../services/api"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
//import BarRectangleCategory from '../../assets/Rectangle_category_home.png';
import BarRectangleOffer from '../../assets/Rectangle_offer_home.png';
import { useState, useEffect } from 'react';
import { Container, TitleOffertoday } from "./style";
import {CardProduct} from "../../components/CardProduct";


export function OffersCarousel() {

  const [offers, setOffers] = useState([]);

  useEffect(() => {

  async function loadProducts() {

    const {data} = await api.get('/products');
    
    const Onlyoffers = data.filter(product => product.offer)
    
    setOffers(Onlyoffers);
    
  }

  loadProducts();

  }, [])

  const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 3000},
        items: 4,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1280},
        items: 4,
    },
    tablet: {
        breakpoint: {max: 1280, min: 690},
        items: 3,
    },
    mobile: {
        breakpoint: {max: 690, min: 0},
        items: 2,
    },
};


  return (

    <Container>
    <TitleOffertoday>OFERTA DO DIA
    <img src={BarRectangleOffer} alt="" />
    </TitleOffertoday>
    
 
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-offer"
    >

      {offers.map((products) => (
        
        <CardProduct key={products.id} product={products} />
        
      ))}
          
    </Carousel>

    
    
    </Container>
  )
}


