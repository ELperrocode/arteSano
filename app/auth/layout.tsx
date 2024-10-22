import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Login or create an account",
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container relative min-h-screen flex flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-4">
    <div className="lg:p-4">
      <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px]">
        {children}
        <p className="px-4 text-center text-sm text-muted-foreground">
          Al hacer clic en Continuar, acepta nuestra{" "}
          <a href="/terms" className="underline underline-offset-4 hover:text-primary">
            Terminos y condiciones
          </a>{" "}
          y{" "}
          <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
            Politicas de privacidad
          </a>
          .
        </p>
      </div>
    </div>
  </div>
  )
}