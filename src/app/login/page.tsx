import { LoginForm } from "@/components/auth/LoginForm";
import { Logo } from "@/components/Logo";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4">
      <div className="mb-6">
        <Logo />
      </div>
      <LoginForm />
    </div>
  );
}
