import type { ReactNode } from "react"

interface ChildCompProps {
    children : ReactNode
}


function ChildComp1(props : ChildCompProps) {

    return (
        <>
        <div>
            <h3>
                Child 1 component.
            </h3>
            <div>
                {props.children}
            </div>
        </div>
        </>
    )
}

export default ChildComp1;