import { List, ListPlus, Receipt, PlusSquare, BoxArrowUp, NotePencil } from "@phosphor-icons/react"


export const NavLinks = [
  
  {
    id: 1,
    label: "Pedidos",
    path: "/admin/pedidos",
    icon: <Receipt size={22} weight="fill" />,
  },

  

  {
    id: 1,
    label: "Cadastrar produto",
    path: "/admin/criar-produto",
    icon: <PlusSquare size={22} weight="fill" />,
  },

  {
    id: 1,
    label: "Listar produtos",
    path: "/admin/produtos",
    icon: <BoxArrowUp  size={22} weight="fill" />,
  },

  {
    id: 1,
    label: "editar-produtos",
    path: "/admin/editar-produto",
    icon: <NotePencil  size={22} weight="fill" />,
  },




]
