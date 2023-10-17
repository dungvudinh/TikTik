import { useContext } from "react";
import Context from "./context";


//hook A 
export const useStore = ()=>
{
    const [state, dispatch]= useContext(Context);
    return [state, dispatch];
}