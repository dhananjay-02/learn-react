import type { Project } from "../../model/Project";
import ProjectsCard from "./ProjectsCard";

function RenderProjects({projects}:{projects : Project[]}) {
    return(
         <>
            {projects.map(
                p =>(
                    <ProjectsCard key={p.id} project={p}/>
                )
            )}
         </>
    )
}

export default RenderProjects;