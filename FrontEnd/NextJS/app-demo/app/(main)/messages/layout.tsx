"use client";

import { useState } from 'react';
export default function MessagesLayout({ children }: { children: React.ReactNode }) {
    
    const [isOpen, setIsOpen] = useState(false);
    return (

        <>


            <div>
                
                <main>
                    {children}
                </main>
            </div>
        
        </>





        
        
    );
    }