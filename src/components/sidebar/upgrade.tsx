"use client";

import { authClient } from "~/lib/auth-client";
import { Button } from "../ui/button";

export default function Upgrade() {

   const upgrade = async () => {
    await authClient.checkout({
      products: [
        "d72d829a-4021-4f14-acb7-c3e677f2b300",
        "0acb582e-d10b-46d6-a9b0-5426ce45efdf",
        "5a189f8b-47b5-483f-983f-3c4622b99d88",
      ],
    });
  };
  return (
    <Button
      variant="outline"
      size="sm"
      className="ml-2 cursor-pointer text-orange-400"
      onClick={upgrade}
    >
      Upgarde
    </Button>
  );
}
