import React, { createContext, useState, useContext } from 'react';

type CRUDContextType = {
    isEditing: boolean;
    isCreating: boolean;
    isDeleting: boolean;
    setEditing: (value: boolean) => void;
    setCreating: (value: boolean) => void;
    setDeleting: (value: boolean) => void;
};

export const useCRUDContext = () => useContext(CRUDContext);

export const CRUDContext = createContext<CRUDContextType>({
    isEditing: false,
    isCreating: false,
    isDeleting: false,
    setEditing: () => {},
    setCreating: () => {},
    setDeleting: () => {},
});

export const CRUDProvider = ({ children } : {children: React.ReactNode}) => {
    const [isEditing, setEditing] = useState(false);
    const [isCreating, setCreating] = useState(false);
    const [isDeleting, setDeleting] = useState(false);

    return (
        <CRUDContext.Provider
            value={{
                isEditing,
                isCreating,
                isDeleting,
                setEditing,
                setCreating,
                setDeleting,
            }}
        >
            {children}
        </CRUDContext.Provider>
    );
};
