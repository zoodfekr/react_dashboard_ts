import { useState } from "react";
import Appbar from "../appbar/Appbar";


type uservalueType = { name: string, family: string, age: number }

const Container = () => {

    const [uservalue, setuservalue] = useState<uservalueType>({ name: '', family: '', age: 0 })

    const logerFunction = (props: string) => console.log('run loger', props)

    return (
        <>
            <div className="" style={{
                background: "",
                width: "100vw",
                height: "100vh"
            }}>
                <Appbar
                    uservalue={uservalue}
                    setuservalue={setuservalue}
                    name="ramin"
                    family="zoodfer"
                    age={28}
                    address={{ street: 'tehran', block: 2 }}
                    status={'offline'}
                    type={'manager'}
                    style={{ background: "green" }}
                    className={'border border-red-500 p-4 gap-4 flex flex-col'}
                    loger={logerFunction}
                >
                    <div className="border border-red-500 h-10 ">
                        this is children component
                    </div>
                </Appbar>

            </div>
        </>
    )
};
export default Container;