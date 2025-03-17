import { ReactNode, useEffect, useRef, useState } from "react";



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
    loger: (status: "online" | "offline") => void
}


type stateType = {
    count: number
    status: boolean
}

const Appbar: React.FC<AppbarProps> = ({ name, family, status, children, className, style, loger }) => {


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

                {children}
            </div >

        </>
    )
};

export default Appbar