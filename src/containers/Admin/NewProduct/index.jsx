

import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Image } from "@phosphor-icons/react"
import {Form, Input, InputGroup, Label, LabelUpload, SubmitButton,ContainerUpload, Select } from "./style"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { ErrorMessage } from "./style"
import { toast } from "react-toastify"
import { formatPrice } from "../../../utils/formatPrice"


const schema = yup
  .object({
    name: yup.string().required("Digite o nome do produto"),
    price: yup.number().required("Digite o preço do produto").typeError("Digite um preço válido"),
    category: yup.object().required("Digite a categoria do produto"),
    file: yup.mixed()
    .test("required", "Carregue uma imagem", value => value && value.length > 0)
    .test("filesize", "carregue uma imagem ate 5mb", value => value && value.length > 0 && value[0].size <= 5 * 1024 * 1024)
    .test("filetype", "Selecione uma imagem no formato png ou jpg", value => value && value.length > 0 && (value[0].type === "image/png" || value[0].type === "image/jpeg"))


  })
  

export function NewProduct() {

  const [filename, setFilename] = useState(null)
  const [ categories, setCategories ] = useState(null)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories")
      setCategories(data)
    }
    loadCategories()
  }, [])

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data) => {
    
  const productFormData = new FormData();
  productFormData.append("name", data.name)
  productFormData.append("price", data.price * 100)
  productFormData.append("category_id", data.category.id)
  productFormData.append("file", data.file[0])

  // try {
  //   const response = await api.post("/products", productFormData)
  //   toast.success("Produto enviado com sucesso!")
  //   console.log("Resposta da API:", response)
  // } catch (error) {
  //   console.error("Erro ao enviar produto:", error)
  //   toast.error("Erro ao enviar produto")
  
  //   // Se quiser ver a mensagem real do backend:
  //   if (error.response) {
  //     console.error("Mensagem do backend:", error.response.data)
  //   }
  // }
  

  
   await toast.promise(api.post("/products", productFormData),
    {
      pending: "Enviando produto...",
      success: "Produto enviado com sucesso!",
      error: "Erro ao enviar produto",
    }
  )

  }


  return (
    <ContainerUpload>

      <Form onSubmit={handleSubmit(onSubmit)}>

      <InputGroup>

        <Label>Nome</Label>
        <Input type="text" {...register("name")} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <Label>Preço</Label>
        <Input type="number" {...register("price")} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <LabelUpload>
          <Image size={22} color="#fff" />
          
          <input type="file" {...register("file")} 
          accept="image/png, image/jpeg"
          onChange={(e) => {
            setFilename(e.target.files[0]?.name);
            register("file").onChange(e);
          }}        
           />
           {filename || <span>Carregar imagem do produto</span>}

        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <Label>Categoria</Label>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>

        <Controller 
        
          name="category"
          control={control}
          render={({field}) => (
            

        <Select
        {...field}
        options={categories}            
        getOptionLabel={(category) => category.name}
        getOptionValue={(category) => category.id}
        menuPortalTarget={document.body}
        
        />
        )}/>
      </InputGroup>
      <SubmitButton>Adcionar produto</SubmitButton>
      </Form>

    

    </ContainerUpload>
  )
}