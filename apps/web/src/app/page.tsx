"use client";
import { useEffect } from "react";
import { useUserDetails } from "./hook";

const Login = () => {
  const { loggedIn, setLoggedIn } = useUserDetails();

  useEffect(() => {
    // Assegura que o router está pronto antes de tentar redirecionar.
    if (loggedIn) {
      window.location.href = "/dashboard";
    }
  }, [loggedIn]); // Atualizado para remover a dependência redundante de `router`

  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Removido o Suspense para teste de inicialização do router
  return (
    <div>
      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
