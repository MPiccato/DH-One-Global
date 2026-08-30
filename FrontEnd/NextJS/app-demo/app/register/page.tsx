"use client"
import RegisterForm from "../components/auth/RegisterForm";


const RegisterPage = () => {
  return (
    <>
        <div className="flex justify-center">
                <h2 className="mb-3 text-3xl">Registro a la Red Social</h2>
        </div>   
        <div className="flex justify-center">
            <RegisterForm />
        </div>
     
     
     
    </>
    
  )
}

export default RegisterPage;