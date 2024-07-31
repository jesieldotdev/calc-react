import { InputButton } from "./InputButton"
import { InputButtonLarge, ShiftButton } from "./InputButtonLarge"

interface ControllsProps {

}

export const Controlls = () => {
    return (
        <>
            <div className='flex space-x-1'>
                <InputButton isOperator className="w-1/4">
                    C
                </InputButton>
                <InputButton isOperator className="w-1/4">
                    &larr;
                </InputButton>
                <ShiftButton className="w-2/4">
                    SHIFT
                </ShiftButton>
            </div>

            <div className='flex space-x-1 mt-1'>
                <InputButton className="w-1/4">

                    7
                </InputButton>
                <InputButton className="w-1/4">
                    8
                </InputButton >
                <InputButton className="w-1/4">
                    9
                </InputButton>
                <InputButton isOperator className="w-1/4">
                    x
                </InputButton>

            </div>

            <div className='flex space-x-1 mt-1'>
                <InputButton className="w-1/4">
                    4
                </InputButton>
                <InputButton className="w-1/4">
                    5
                </InputButton>
                <InputButton className="w-1/4">
                    6
                </InputButton>
                <InputButton isOperator className="w-1/4">
                    -
                </InputButton>

            </div>

            <div className='flex space-x-1 mt-1'>
                <InputButton className="w-1/4">
                    1
                </InputButton >
                <InputButton className="w-1/4">
                    2
                </InputButton>
                <InputButton className="w-1/4">
                    3
                </InputButton>
                <InputButton isOperator className="w-1/4">
                    +
                </InputButton>
            </div>

            <div className='flex space-x-1 mt-1'>
                <InputButton className="w-1/4">
                    0
                </InputButton>
                <InputButton className="w-1/4">
                    ,
                </InputButton>
                <InputButtonLarge isOperator className='w-2/4'>
                    =
                </InputButtonLarge>
            </div>

        </>
    )
}