
import { api } from "../../services/api"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import BarRectangleCategory from '../../assets/Rectangle_category_home.png';
//import BarRectangleOffer from '../../assets/Rectangle_offer_home.png';
import { useState, useEffect } from 'react';
import { CategoryHomeButton, Container, ContainerItens, TitleCategories } from "./style";
import { Navigate, useNavigate } from "react-router-dom";


export function CategoryCarousel() {

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    async function loadCategories() {

      const { data } = await api.get('/categories');

      setCategories(data);


    }

    loadCategories();

  }, [])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };


  return (

    <Container>

      <TitleCategories>CATEGORIAS
        <img src={BarRectangleCategory} alt="" />
      </TitleCategories>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item"
      >



        {categories.map((category) => (
          <ContainerItens key={category.id} ImageURL={category.url}>

            {/* <img src={category.url} alt={category.name} /> */}
            <CategoryHomeButton


              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                if(category.id === "bebidas") {
                  navigate(`/bebidas?category=${category.id}`);
                }
                else if(category.id === "entradas") {
                  navigate(`/entradas?category=${category.id}`);
                }
                else if(category.id === "hamburgueres") {
                  navigate(`/hamburgueres?category=${category.id}`);
                }
                else if(category.id === "sobremesas") {
                  navigate(`/sobremesas?category=${category.id}`);
                }
                            
              }}



            >{category.name}</CategoryHomeButton>
          </ContainerItens>
        ))}



      </Carousel>

    </Container>
  )
}


