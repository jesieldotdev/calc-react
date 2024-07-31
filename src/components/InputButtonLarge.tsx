import { ReactNode } from "react"

interface InputButtonLargeProps {
    children: ReactNode
    isOperator?: boolean
    className?:string
}

export const InputButtonLarge = ({ children, isOperator, className }: InputButtonProps) => {
    return (
        <button className={`bg-orange-600 p-6 py-4 text-3xl rounded flex justify-center align-middle w-full ${className}`}>
            <p className={` flex align-middle  justify-center p-4 px-6 text-center ${isOperator ? 'text-slate-100 rounded-full shadow-lg' : 'text-zinc-500'}`}>
                {children}

            </p>
        </button>
    )
}

export const ShiftButton = ({ children, isOperator }: InputButtonProps) => {
    return (
        <button className={`bg-zinc-100 p-6 py-4 text-lg rounded flex justify-center align-middle w-full `}>
            <p className={` flex align-middle  justify-center p-4 px-6 text-center text-zinc-500 rounded-full shadow-lg border-red-500`}>
                {children}

            </p>
        </button>
    )
}