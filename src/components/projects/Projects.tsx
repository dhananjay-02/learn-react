import { MOCK_PROJECTS } from "../../data/MockProjects";
import RenderProjects from "./RenderProjects";

function Project() {
    
    return (
        <>
            <h1>Projects</h1>
            <div>
                <RenderProjects projects={MOCK_PROJECTS} />
            </div>
        </>
    )
}

export default Project;