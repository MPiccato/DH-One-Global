import Link from "next/link";

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between p-5 bg-gray-400 text-white">
        <div>LOGO</div>
        <div className="flex gap-4">
          <div>
            <Link href="/users">Usuarios</Link>
          </div>
          <div>
            <Link href="/messages">Mensajes</Link>
          </div>
        </div>
      </header>

      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-600 p-5 text-center text-white">
        <p>© 2026 MP - Data. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}