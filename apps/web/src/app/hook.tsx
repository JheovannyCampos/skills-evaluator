"use client";
import { useState } from "react";

export const useUserDetails = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return {
    name: "John Doe",
    company: "Acme Inc.",
    loggedIn,
    setLoggedIn,
  };
};
