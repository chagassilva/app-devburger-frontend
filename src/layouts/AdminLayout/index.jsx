
import { Outlet, Navigate } from "react-router-dom"
import SideNavAdmin from "../../components/SideNavAdmin";

import { Container } from "./style";

export function AdminLayout() {


  const { admin: IsAdmin } = JSON.parse(localStorage.getItem('devburger:userdata'))


  return IsAdmin ? (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (

    <Navigate to="/login" />

  )

}