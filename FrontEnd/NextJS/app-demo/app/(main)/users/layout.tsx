export default function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
        <h1>Encabezado</h1>
        <main>
            {children}
        </main>
        </div>
    );
    }