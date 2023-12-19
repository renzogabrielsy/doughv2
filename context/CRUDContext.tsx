import React, { createContext, useState, useContext } from 'react';

type CRUDContextType = {
    isEditing: boolean;
    isCreating: boolean;
    isDeleting: boolean;
    setEditing: (value: boolean) => void;
    setCreating: (value: boolean) => void;
    setDeleting: (value: boolean) => void;
    viewDate: string;
    viewName: string;
    viewTransaction: string;
    viewCategory: string;
    viewAccountFrom: string;
    viewAccountTo: string;
    viewAmount: string;
    editDate: string;
    editName: string;
    editTransaction: string;
    editCategory: string;
    editAccountFrom: string;
    editAccountTo: string;
    editAmount: string;
    setViewDate: (value: string) => void;
    setViewName: (value: string) => void;
    setViewTransaction: (value: string) => void;
    setViewCategory: (value: string) => void;
    setViewAccountFrom: (value: string) => void;
    setViewAccountTo: (value: string) => void;
    setViewAmount: (value: string) => void;
    setEditDate: (value: string) => void;
    setEditName: (value: string) => void;
    setEditTransaction: (value: string) => void;
    setEditCategory: (value: string) => void;
    setEditAccountFrom: (value: string) => void;
    setEditAccountTo: (value: string) => void;
    setEditAmount: (value: string) => void;

};

export const useCRUDContext = () => useContext(CRUDContext);

export const CRUDContext = createContext<CRUDContextType>({
    isEditing: false,
    isCreating: false,
    isDeleting: false,
    setEditing: () => {},
    setCreating: () => {},
    setDeleting: () => {},
    viewDate: '',
    viewName: '',
    viewTransaction: '',
    viewCategory: '',
    viewAccountFrom: '',
    viewAccountTo: '',
    viewAmount: '',
    editDate: '',
    editName: '',
    editTransaction: '',
    editCategory: '',
    editAccountFrom: '',
    editAccountTo: '',
    editAmount: '',
    setViewDate: () => {},
    setViewName: () => {},
    setViewTransaction: () => {},
    setViewCategory: () => {},
    setViewAccountFrom: () => {},
    setViewAccountTo: () => {},
    setViewAmount: () => {},
    setEditDate: () => {},
    setEditName: () => {},
    setEditTransaction: () => {},
    setEditCategory: () => {},
    setEditAccountFrom: () => {},
    setEditAccountTo: () => {},
    setEditAmount: () => {},

});

export const CRUDProvider = ({ children } : {children: React.ReactNode}) => {
    const [isEditing, setEditing] = useState(false);
    const [isCreating, setCreating] = useState(false);
    const [isDeleting, setDeleting] = useState(false);

    const [viewDate, setViewDate] = useState('');
    const [viewName, setViewName] = useState('');
    const [viewTransaction, setViewTransaction] = useState('');
    const [viewCategory, setViewCategory] = useState('');
    const [viewAccountFrom, setViewAccountFrom] = useState('');
    const [viewAccountTo, setViewAccountTo] = useState('');
    const [viewAmount, setViewAmount] = useState('');

    const [editDate, setEditDate] = useState('');
    const [editName, setEditName] = useState('');
    const [editTransaction, setEditTransaction] = useState('');
    const [editCategory, setEditCategory] = useState('');
    const [editAccountFrom, setEditAccountFrom] = useState('');
    const [editAccountTo, setEditAccountTo] = useState('');
    const [editAmount, setEditAmount] = useState('');

    return (
        <CRUDContext.Provider
            value={{
                isEditing,
                isCreating,
                isDeleting,
                setEditing,
                setCreating,
                setDeleting,
                viewDate,
                viewName,
                viewTransaction,
                viewCategory,
                viewAccountFrom,
                viewAccountTo,
                viewAmount,
                editDate,
                editName,
                editTransaction,
                editCategory,
                editAccountFrom,
                editAccountTo,
                editAmount,
                setViewDate,
                setViewName,
                setViewTransaction,
                setViewCategory,
                setViewAccountFrom,
                setViewAccountTo,
                setViewAmount,
                setEditDate,
                setEditName,
                setEditTransaction,
                setEditCategory,
                setEditAccountFrom,
                setEditAccountTo,
                setEditAmount,
                
            }}
        >
            {children}
        </CRUDContext.Provider>
    );
};
