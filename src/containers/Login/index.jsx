import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo-Login.svg";
import { Button } from "../../components/Button";
import { useUser } from "../../hooks/UserContext";


import {

  Container,
  ContainerLeft,
  ContainerRight,
  Form,
  InputContainerLogin,
  Link

} from "./style";
import { use } from "react";


export function Login() {

  const navigate = useNavigate();
  const { putUserData } = useUser();


  const schema = yup
    .object({
      email: yup.string().email('Email tem que ser válido').required('email é obrigatório'),
      password: yup.string().min(6, 'a senha deve ser pelo 6 caracteres').required('digite a senha'),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })


  const onSubmit = async (data) => {

    try {
      const { data: userData } = await toast.promise(
        api.post('/session', {
          email: data.email,
          password: data.password,
        }),

        // Status de sucesso, erro ou pendente de login

        {
          pending: "Fazendo login...",

          success: {
            render() {

              setTimeout(() => {
                if (userData?.admin) {
                  navigate('/admin/pedidos')
                } else {
                  navigate('/home')
                }
              }, 2000)
              return 'Login realizado com sucesso!'
            },
          },

          error: "Erro ao fazer login. Verifique suas credenciais.",
        },

      );

      // setTimeout(() => {
      //   navigate('/home')
      // }, 2000)

      // setTimeout(() => {

      //   if(userData?.admin){           
      //       navigate('/admin/pedidos')
      //     }else{
      //     navigate('/home')               
      //   }
      // }, 2000)


      putUserData(userData);
      console.log("userData:", userData)



      //console.log(putUserData);
      //localStorage.setItem("Token", Token);

      // Redirecionar ou salvar token, etc.


    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }

  };


  return (


    <Container>

      <ContainerLeft>
        <img src={Logo} alt="Logo" />
      </ContainerLeft>

      <ContainerRight>

        <h2>Olá, seja bem vindo ao <span> Dev Burguer! </span>
          Acesse com seu <span> Login e senha.</span></h2>


        <Form onSubmit={handleSubmit(onSubmit)}>

          <InputContainerLogin>
            <label>Email</label>
            <input {...register("email")} type="email" placeholder="Email" />
            <p>{errors?.email?.message}</p>
          </InputContainerLogin>

          <InputContainerLogin>
            <label>Senha</label>
            <input {...register("password")} type="password" placeholder="Senha" />
            <p>{errors?.password?.message}</p>
          </InputContainerLogin>

          <Button type="submit" color='yellow' >Entrar</Button>

        </Form>

        <p>Não possui conta? <Link to='/cadastro'>Clique aqui.</Link></p>


      </ContainerRight>


    </Container>


  );


}
