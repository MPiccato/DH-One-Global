import LoginForm from "../components/auth/LoginForm";


const LoginPage = () => {
  return (
    <>
      <div className="p-3 flex justify-center">
          <h2 className="mb-3 text-xl">Iniciar sesión en la Red Social</h2>
      </div>
      <div className="flex justify-center">
         <LoginForm />
      </div>
     
    
    </>
    
  )
}

export default LoginPage;