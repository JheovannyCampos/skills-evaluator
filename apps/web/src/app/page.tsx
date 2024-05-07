"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { useUserDetails } from "./hook";
import { z } from "zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { loggedIn, setLoggedIn } = useUserDetails();

  useEffect(() => {
    if (loggedIn) {
      window.location.href = "/dashboard";
    }
  }, [loggedIn]);

  const handleLogin = async (values: any) => {
    try {
      const data = schema.parse(values);

      const resp = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const json = await resp.json();

      console.log(json);

      // setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#D9ECFF]">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form
        className="w-[400px] h-[200px] bg-white p-4 rounded-lg flex flex-col gap-2"
        onSubmit={handleSubmit(handleLogin)}
      >
        <Label>Email</Label>
        <Input type="email" required {...register("email")} />
        {errors.email && <span>Email inválido</span>}

        <Label>Senha</Label>
        <Input type="password" required {...register("password")} />
        {errors.password && <span>Senha inválida</span>}

        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
};

export default Login;
