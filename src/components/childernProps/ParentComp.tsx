import ChildComp1 from "./ChildComp1";
import ChildComp2 from "./ChildComp2";

function ParentComp(){
    return(
    <>
        <h1>Parent comp.</h1> 
        <div>
            <ChildComp1>
             <p>
                {'<>'} These is written inside of child 1  of parent. And not passed as props to child1.{'</>'} 
             </p>
            </ChildComp1>
            <ChildComp2>
                <p>
                    {'<>'} These is written inside of child 2 of parent. And not passed as props to child1. {'</>'} 
                </p>
         </ChildComp2>
        </div>
    </>  
    )
}

export default ParentComp;