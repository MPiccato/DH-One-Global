"use client";
import Message from "../../components/messages";
import type { MessageType } from "../../types/messages.types";
import { useState } from "react";
enum TypeView {
    Mensajes = "Mensajes",
    Respuestas = "Respuestas"
}

type UserTabsProps = {
    mensajes: MessageType[];
    respuestas: MessageType[];
}

const UserTabs = ({ mensajes,respuestas }: UserTabsProps) => {
    const [activeTab, setActiveTab] = useState<TypeView>(TypeView.Mensajes);
    return (
      <>
        <div className="flex justify-evenly mb-4">
            <div 
                className={`cursor-pointer  ${activeTab===TypeView.Mensajes ? 'border-b-4 border-blue-400' : ''}`} 
                onClick={() => setActiveTab(TypeView.Mensajes)}>Mensajes</div>
            <div 
                className={`cursor-pointer  ${activeTab===TypeView.Respuestas ? 'border-b-4 border-blue-400' : ''}`} 
                onClick={() => setActiveTab(TypeView.Respuestas)}>Respuestas</div>
        </div>
        <div>
            {activeTab === TypeView.Mensajes && mensajes.map((mensaje) => 
            <Message key={mensaje.id} mensaje={mensaje} />
            
            )}
            {activeTab === TypeView.Respuestas && respuestas.map((respuesta) => 
            <Message key={respuesta.id} mensaje={respuesta} />
            
            )}
        </div>
      </>
    );
}

export default UserTabs;