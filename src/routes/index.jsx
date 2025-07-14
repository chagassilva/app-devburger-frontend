import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
import { Cart, Login, Register, Home, Menu, Checkout, CompletPayment, Category, Category4, Category2, Category3, ThankYouPage } from "../containers";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import { Orders } from "../containers/Admin/Orders";
import { EditProduct } from "../containers/Admin/EditProduct";
import { NewProduct } from "../containers/Admin/NewProduct";
import { Product } from "../containers/Admin/Product";

export function Router() {
  return (
    <Routes>

      {/* Rotas protegidas do usuário */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      <Route path="/" element={<UserLayout />}>
        <Route path="home" element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />
        <Route path="cardapio" element={
          <ProtectedRoute><Menu /></ProtectedRoute>
        } />
        <Route path="carrinho" element={
          <ProtectedRoute><Cart /></ProtectedRoute>
        } />
        <Route path="bebidas" element={
          <ProtectedRoute><Category /></ProtectedRoute>
        } />
        <Route path="entradas" element={
          <ProtectedRoute><Category2 /></ProtectedRoute>
        } />
        <Route path="sobremesas" element={
          <ProtectedRoute><Category3 /></ProtectedRoute>
        } />
        <Route path="hamburgueres" element={
          <ProtectedRoute><Category4 /></ProtectedRoute>
        } />
        <Route path="finalizar-pedido" element={
          <ProtectedRoute><Checkout /></ProtectedRoute>
        } />
        <Route path="pedido-realizado" element={
          <ProtectedRoute><CompletPayment /></ProtectedRoute>
        } />
        <Route path="obrigado" element={
          <ProtectedRoute><ThankYouPage /></ProtectedRoute>
        } />
      </Route>

      {/* Rotas protegidas do admin */}
      <Route path="/admin" element={
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      }>
        <Route path="pedidos" element={<Orders />} />
        <Route path="criar-produto" element={<NewProduct />} />
        <Route path="editar-produto" element={<EditProduct />} />
        <Route path="produtos" element={<Product />} />
      </Route>

      {/* Rotas públicas de login e cadastro */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />

      {/* Redirecionamento padrão para rotas desconhecidas */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
