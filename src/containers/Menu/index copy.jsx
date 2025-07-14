import { use, useEffect, useState } from "react";
import { CategoryCarousel } from "../../components/CategoryCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";
import { BannerMenu, CategoryMenu, ContainerMenuMain, TitleMenu,ProductsContainer, CategoryButton, ButtonBack } from "./style";
import { api } from "../../services/api";
import { CardProduct } from "../../components/CardProduct";
import { formatPrice } from "../../utils/formatPrice";
import { useLocation, useNavigate } from "react-router-dom";






export function Menu() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProduct, setfilteredProduct] = useState([]);
    const navigate = useNavigate()
    const {search} = useLocation();
    const queryParams = new URLSearchParams(search);

    const [activeCategory, setactiveCategory] = useState(()=>{

        const categoryID = queryParams.get('category');
        return categoryID ? +categoryID : 0;

    },[search]);


   
      useEffect(() => {
    
      async function loadCategories() {
    
        const {data} = await api.get('/categories');

        const NewCategories = [{id: 0, name: 'Todos' }, ...data];

        
        
        setCategories(NewCategories);
       
      }

      async function loadProducts() {

        const {data} = await api.get('/products');
        
        const NewProducts = data.map((product) => ({
            currencyValue: formatPrice(product.price),
            ...product
        }));
        
        setProducts(NewProducts);
      }
      
      loadCategories();
      loadProducts();
    
    }, []);
    
    useEffect(() => {
      

        if(activeCategory === 0){
            setfilteredProduct(products);
        }else{
            const Newfiltered = products.filter(product => product.category_id === activeCategory);
            setfilteredProduct(Newfiltered);
        }
    },[products, activeCategory]);




    
    

    return (


        <ContainerMenuMain>



            <BannerMenu>
                <h1>O MELHOR HAMNURGER ESTÁ AQUI
                <br></br><span>Esse cardápio está irresistível!</span>
                </h1>
               
            </BannerMenu>

            <TitleMenu>HAMBÚRGUERES - CARDÁPIO</TitleMenu>
            

            <CategoryMenu>
           
              {categories.map(category => (
                
                <CategoryButton 
                
                key={category.id} 

                $isactive={category.id === activeCategory}

            onClick={() => {
                navigate({
                    pathname: '/cardapio',
                    search: `?category=${category.id}`,
                }, { replace: true });
            
                setactiveCategory(category.id);
            }}

                     
               category={category} >{category.name}
               
               </CategoryButton> 

              ))}
              
            </CategoryMenu>

            <ProductsContainer>

            {filteredProduct.map(products =>  (
               <CardProduct key={products.id} product={products} />
            ))}

            </ProductsContainer>

    

        </ContainerMenuMain>


    )

}