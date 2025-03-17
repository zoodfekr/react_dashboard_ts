import React, { ReactNode, useEffect, useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";


type uservalueType = { name: string, family: string, age: number }

type AppbarProps = {
    name: string
    family: string
    age: number
    status: "online" | "offline"
    type: "user" | "manager"
    address: {
        street: string
        block: number
    },
    children?: ReactNode
    style: React.CSSProperties
    className: string
    loger: (status: "online" | "offline") => void,
    setuservalue: React.Dispatch<React.SetStateAction<uservalueType>>
    uservalue: uservalueType
}


type stateType = {
    count: number
    status: boolean
}


const Appbar: React.FC<AppbarProps> = ({
    name,
    family,
    status,
    children,
    className,
    style,
    loger,
    uservalue,
    setuservalue

}) => {


    const [state, setstate] = useState<stateType>({ count: 0, status: false })


    const inputref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputref.current) {
            inputref.current.value = "ramin ref test";
        }



    }, []);



    return (
        <>
            <div className={`border bg-stone-900 ${className}`} style={style}>

                <div className="border flex relative p-2 bg-red-200 min-h-20">
                    <button onClick={() => setuservalue({ name: 'reza', family: 'ahmadi', age: 0 })}>add state</button>


                    <div>
                        {uservalue.family} {uservalue.name}
                    </div>
                </div>




                <p>
                    welcome
                </p>

                <p>
                    {name} {family}
                </p>

                <button onClick={() => loger(status)}>
                    log
                </button>

                <p>state is : {state.count}</p>

                <button
                    onClick={() => setstate(prev => ({ ...prev, count: prev.count + 1 }))}
                >
                    add +
                </button>

                <div className="border rounded-full p-2">
                    <input placeholder="test in put ref" className="w-full"
                        ref={inputref}
                    >
                    </input>
                </div>


                <ButtonComponent variant={'a'} ></ButtonComponent>
                <ButtonComponent variant={'button'} onClick={() => console.log('run')} ></ButtonComponent>
                <ButtonComponent variant={Link} to={'/home'}></ButtonComponent>

                {children}
            </div >

        </>
    )
};

export default Appbar