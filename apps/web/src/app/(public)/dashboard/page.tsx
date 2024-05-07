// import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Dashboard = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleLogin = () => {
    // call login api
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full flex justify-end pr-8 pt-5">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Nova avaliação</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Nova avaliação</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-start justify-start gap-4 w-full">
              <div className="items-start justify-start flex flex-col gap-2 w-full">
                <Label htmlFor="name" className="text-right">
                  Qual competência será avaliada?
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Programação">Programação</SelectItem>
                      <SelectItem value="Banco de dados">
                        Banco de dados
                      </SelectItem>
                      <SelectItem value="Arquitetura de software">
                        Arquitetura de software
                      </SelectItem>
                      <SelectItem value="Análise de requisitos">
                        Análise de requisitos
                      </SelectItem>
                      <SelectItem value="Gestão de projetos">
                        Gestão de projetos
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="items-start justify-start flex flex-col  gap-2 w-full">
                <Label htmlFor="name" className="text-right">
                  Tipo de avaliação
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Objetiva">Objetiva</SelectItem>
                      <SelectItem value="Argumentativa">
                        Argumentativa
                      </SelectItem>
                      <SelectItem value="Dissertativa">Dissertativa</SelectItem>
                      <SelectItem value="Mista">Mista</SelectItem>
                      <SelectItem value="Prova prática">
                        Prova prática
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="items-start justify-start  flex flex-col  gap-2 w-full">
                <Label htmlFor="name" className="text-right">
                  Departamento
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Suporte">Suporte</SelectItem>
                      <SelectItem value="Desenvolvimento">
                        Desenvolvimento
                      </SelectItem>
                      <SelectItem value="Financeiro">Financeiro</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="items-start justify-start flex flex-col  gap-2 w-full">
                <Label htmlFor="name" className="text-right">
                  Usuário
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="João">João</SelectItem>
                      <SelectItem value="Maria">Maria</SelectItem>
                      <SelectItem value="Mario">Mario</SelectItem>
                      <SelectItem value="Fabio">Fabio</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="items-start justify-start flex flex-col gap-2 w-full">
                <Label htmlFor="name" className="text-right">
                  Objetivos e metas
                </Label>
                <Textarea placeholder="" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Avançar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Dashboard;
