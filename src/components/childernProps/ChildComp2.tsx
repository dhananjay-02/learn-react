import type { ReactNode } from "react";

interface ChildComp2Props{
    children: ReactNode
}

function ChildComp2(props : ChildComp2Props){
    return(
        <>
        <h3>Child 2 component.</h3> 
            <div>
                {props.children}
            </div>
        </>  
    )
}

export default ChildComp2;