import { ReactNode } from "react"

interface InputButtonProps {
    children: ReactNode
    isOperator?: boolean
    className?: string
}

export const InputButton = ({ children, isOperator, className }: InputButtonProps) => {
    return (
        <button className={`bg-slate-100 p-5 py-4 text-3xl rounded flex justify-center align-middle ${className}`}>
            <p className={` flex align-middle  justify-center p-4 px-6 text-center ${isOperator ? 'text-orange-400 rounded-full shadow-lg' : 'text-zinc-500'}`}>
            {children}

            </p>
        </button>
    )
}