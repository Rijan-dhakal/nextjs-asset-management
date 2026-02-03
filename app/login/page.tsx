import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Package } from "lucide-react";
import Link from "next/link";
import LoginButton from "./login-button";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <Card className="w-md shadow">
        <CardHeader className="text-center my-5">
          <div className="mx-auto p-2 rounded-full bg-teal-500 w-fit">
            <Package className="h-6 w-6 text-white" />
          </div>

          <CardTitle className="text-2xl font-bold text-teal-600">
            Welcome back
          </CardTitle>

          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>

        <CardContent>
          <LoginButton />
        </CardContent>

        <CardFooter className="flex justify-center mb-5">
          <Link
            href={"/"}
            className="text-sm text-slate-500 hover:text-teal-700"
          >
            Back to home
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
export default LoginPage;
