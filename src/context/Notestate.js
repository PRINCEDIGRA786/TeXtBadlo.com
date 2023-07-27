import { useState } from "react"
import Notecontext from "./Notecontext"
const Notestate = (props) => {
    // const s1 = {
    //     name: "prince",
    //     dost: "noone"
    // }
    // const [state, setstate] = useState(s1)
    // const update = () => {
    //     setTimeout(() => {
    //         setstate({
    //             "name": "Larry",
    //             "dost": "33"
    //         })
    //     }, 1000);
    // }
    const val = [];
    // const [state, setstate] = useState(val)
    const update = (v) => {
        // setstate(v);
        val.push(v);
    }
    return (
        <Notecontext.Provider value={{ val, update }}>
            {props.children}
        </Notecontext.Provider>
    )
}
export default Notestate;