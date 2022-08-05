

import { Header } from "./Header";

export const App = (props) => {
return (
    <>
    <input placeholder={props.placeholder}></input>
    <Header title={props.placeholder}/>
    </>
)

}