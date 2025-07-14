import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {api}  from "../../services/api"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


import { 
    
    Container,
    ContainerLeft,
    ContainerRight,
    Form,
    InputContainerLogin,
    Link



 } from "./style";

 import Logo from "../../assets/Logo-Login.svg";
 import { Button } from "../../components/Button";

 
 

export function Register() {

  const navigate = useNavigate();
  
  const schema = yup
  .object({
    // name: foi alterado para nome
    nome: yup.string().required('nome é obrigatório'),
    email: yup.string().email('Email tem que ser válido').required('email é obrigatório'),
    password: yup.string().min(6,'a senha deve ser pelo 6 caracteres').required('digite a senha'),
    confirmPassword: yup.mixed().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required('confirme a senha'),
    //admin: yup.boolean().required('campo obrigatório')
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

    const {status} = await api.post('/users',{
      
      name: data.name,
      email: data.email,
      password: data.password,
      
    },
  
    {

      validateStatus: () => true,  

    },
    
  )

    if(status === 200 || status === 201){

      setTimeout(() => {
        navigate("/login")
      }, 2000);

      toast.success("Cadastro realizado com sucesso");

    } else if (status === 409){
  
      toast.error("Email já cadastrado");
    } else{
      throw new Error();
    }
   
  } catch (error) {
    toast.error("houve um erro ao fazer login.");
  }
  
  };
  

  return (


    <Container>
     
      <ContainerLeft>
      <img src={Logo} alt="Logo" />
      </ContainerLeft>

      <ContainerRight>
      
        <h2><span>Criar conta</span></h2>

        
              <Form onSubmit={handleSubmit(onSubmit)}>

              <InputContainerLogin>
                <label>Nome</label>
                {/* nome foi alterado para name */}
                <input type="text"  {...register("nome")} />
                <p>{errors?.nome?.message}</p>
              </InputContainerLogin>

              <InputContainerLogin>
                <label>Email</label>
                <input type="email" {...register("email")} />
                <p>{errors?.email?.message}</p>
              </InputContainerLogin>

              <InputContainerLogin>
                <label>Senha</label>
                <input type="password" {...register("password")} />
                <p>{errors?.password?.message}</p>
              </InputContainerLogin>

              <InputContainerLogin>
                <label>Confirmar senha</label>
                <input type="password" {...register("confirmPassword")} />
                <p>{errors?.confirmPassword?.message}</p>
              </InputContainerLogin>

                <Button type="submit" >Criar Conta</Button>

              </Form>

              <p>Já possui conta? <Link to='/login' >Clique aqui.</Link></p>
        

        </ContainerRight>

     
    </Container>


  );


}
