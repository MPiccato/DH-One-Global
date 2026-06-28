export default function MessagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
        <h1>Encabezado Messages</h1>
        <main>
            {children}
        </main>
        </div>
    );
    }