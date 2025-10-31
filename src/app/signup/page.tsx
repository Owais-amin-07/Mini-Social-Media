import { SignUpForm } from "@/components/auth/SignUpForm";
import { Logo } from "@/components/Logo";

export default function SignUpPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4">
      <div className="mb-6">
        <Logo />
      </div>
      <SignUpForm />
    </div>
  );
}
