"use client";
import { useUserDetails } from "./../../hook";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  IconAdjustmentsHorizontal,
  IconBalloon,
  IconBriefcase2,
  IconChecklist,
  IconHome,
  IconMenu2,
  IconNotebook,
  IconUser,
} from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@radix-ui/react-separator";

export const Header = () => {
  const { name, company } = useUserDetails();

  const getSaudations = () => {
    const date = new Date();
    const hours = date.getHours();
    let saudation = "Bom dia";

    if (hours >= 12 && hours < 18) {
      saudation = "Boa tarde";
    } else if (hours >= 18) {
      saudation = "Boa noite";
    }

    return saudation;
  };

  return (
    <header className="w-full bg-[#409EFF] h-[72px] flex justify-between items-center text-white">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="default"
              className="bg-transparent hover:bg-transparent"
            >
              <IconMenu2 />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="max-w-[250px]">
            <Button
              variant="link"
              className="w-full flex gap-2 justify-start"
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              <IconHome /> Página inicial
            </Button>
            <Button
              variant="link"
              className="w-full flex gap-2 justify-start "
              onClick={() => {
                window.location.href = "/newEvaluation";
              }}
            >
              <IconChecklist /> Nova avaliação
            </Button>
            <Button
              variant="link"
              className="w-full flex gap-2 justify-start"
              onClick={() => {
                window.location.href = "/users";
              }}
            >
              <IconUser /> Usuários
            </Button>
            <Button
              variant="link"
              className="w-full flex gap-2 justify-start"
              onClick={() => {
                window.location.href = "/departments";
              }}
            >
              <IconBriefcase2 /> Departamentos
            </Button>
            <Button
              variant="link"
              className="w-full flex gap-2 justify-start"
              onClick={() => {
                window.location.href = "/skills";
              }}
            >
              <IconBalloon /> Competências
            </Button>
            <Button
              variant="link"
              className="w-full flex gap-2 justify-start"
              onClick={() => {
                window.location.href = "/typeOfEvaluation";
              }}
            >
              <IconNotebook /> Tipo de avaliação
            </Button>
            <Button
              variant="link"
              className="w-full flex gap-2 justify-start"
              onClick={() => {
                window.location.href = "/permissions";
              }}
            >
              <IconAdjustmentsHorizontal /> Permissões
            </Button>
          </SheetContent>
        </Sheet>
        <h1>{company}</h1>
      </div>
      <div className="flex gap-4 items-center mr-3">
        {getSaudations()}, {name}
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
