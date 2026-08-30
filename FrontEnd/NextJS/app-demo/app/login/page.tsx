import LoginForm from "../components/auth/LoginForm";


const LoginPage = () => {
  return (
    <div className="flex justify-center w-full">
        <h2 className="mb-2">Iniciar sesión en la Red Social</h2>
        <LoginForm />

    </div>
  )
}

export default LoginPage;