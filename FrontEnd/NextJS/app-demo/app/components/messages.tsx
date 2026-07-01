import Link from "next/link";
import type { MessageProps } from "../types/messages.types";



const Message = ({ mensaje }: MessageProps) => {
    return (
        <div className="flex p-4 border-b border-gray-200 dark:border-gray-800">
            {/* Columna del Avatar */}
            <div className="flex-shrink-0 mr-4">
                <div className="rounded-full bg-red-500 text-white w-12 h-12 flex items-center justify-center">
                    <span className="font-bold text-lg">
                        {mensaje.name.substring(0, 2).toUpperCase()}
                    </span>
                </div>
            </div>

            {/* Columna del Contenido */}
            <div className="flex-grow">
                <div className="flex items-baseline space-x-2">
                    <span className="font-bold text-md">{mensaje.name}</span>
                    <Link href={`https://www.x.com/${mensaje.username}`} passHref>
                        <span className="text-sm text-gray-500 hover:underline">@{mensaje.username}</span>
                    </Link>
                </div>
                <p className="text-md my-2">{mensaje.content}</p>
                <div className="text-sm text-gray-500">Respuestas: {mensaje.repliesCount}</div>
            </div>
        </div>
    );
};

export default Message;