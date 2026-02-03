"use client";

import { Button } from "@/components/ui/button";

const LoginButton = () => {
  return (
    <Button className="w-full bg-teal-700 hover:bg-teal-600 text-white py-6 text-base font-medium cursor-pointer">
      <span>Sign in with google</span>
    </Button>
  );
};
export default LoginButton;
