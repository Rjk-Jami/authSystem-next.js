import Authentication from "@/components/authentication/Authentication";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome Back!</h1>
        <Authentication />
      </div>
    </main>
  );
}
