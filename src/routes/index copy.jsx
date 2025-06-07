import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
import { func } from "prop-types";
import { Cart, Login, Register, Home, Menu, Checkout, CompletPayment } from "../containers";
import { createBrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import {Orders} from "../containers/Admin/Orders";
import {EditProduct} from "../containers/Admin/EditProduct";
import {NewProduct} from "../containers/Admin/NewProduct";
import {Product} from "../containers/Admin/Product";
import { RedirectPages } from "../layouts/RedirectPages";



export function Router() {

    return (

        <Routes>

            <Route path="/" element={<UserLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/cardapio" element={<Menu />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/finalizar-pedido" element={<Checkout />} />
                <Route path="/pedido-realizado" element={<CompletPayment />} />
            </Route>

            {/* Pagina de login do admin */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/pedidos" element={<Orders />} />
                <Route path="/admin/criar-produto" element={<NewProduct />} />
                <Route path="/admin/editar-produto" element={<EditProduct />} />
                <Route path="/admin/produtos" element={<Product />} />
            </Route>

            <Route path="/" element={<RedirectPages />} />
            <Route path="/login" element={<Login /> } />       
            <Route path="/cadastro" element={<Register />} />

            

        </Routes>



    )
}





// export const router = createBrowserRouter([


//     {
//         path: "/",
//         element: < Navigate to="/login" replace />,
//     },

//     {
//         path: "/cadastro",
//         element:
//         <>
//         <Register />
//         </>
//     },


//     {
//         path: "/login",
//         element:
//                 <>
//                    <Login />
//                 </>
//     },


//     {
//         path: "/home",
//         element:
//             <ProtectedRoute>
//                 <>
//                     <Header />
//                     <Home />
//                     <Footer />
//                 </>
//             </ProtectedRoute>
//     },

//     {
//         path: "/cardapio",
//         element:

//             <ProtectedRoute>
//                 <>
//                     <Header />
//                     <Menu />
//                     <Footer />
//                 </>
//             </ProtectedRoute>
//     },

//     {
//         path: "/Carrinho",
//         element:

//             <ProtectedRoute>
//                 <>
//                     <Header />
//                     <Cart />
//                     <Footer />
//                 </>
//             </ProtectedRoute>
//     },

//     {
//         path: "/finalizar-pedido",
//         element:

//             <ProtectedRoute>
//                 <>
//                     <Checkout />

//                     <Footer />
//                 </>
//             </ProtectedRoute>
//     },

//     {
//         path: "/pedido-realizado",
//         element:

//             <ProtectedRoute>
//                 <>
//                     <CompletPayment />

//                     <Footer />
//                 </>
//             </ProtectedRoute>
//     },

//     {
//         path: "/admin",
//         element:

//             <ProtectedRoute>
//                 <>
//                     <Header />
//                     <Admin />
//                     <Footer />
//                 </>
//             </ProtectedRoute>
//     },



// ]
// )