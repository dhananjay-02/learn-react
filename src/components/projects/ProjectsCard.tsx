import { Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";
import type { Project } from "../../model/Project";

function ProjectsCard({project}:{project:Project}) {
    
    return(
          <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={project.imageUrl}
        alt={project.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} mb={1}>
          <Chip label={`Contract ID: ${project.contractTypeId}`} size="small" />
          <Chip label={`Budget: $${project.budget.toLocaleString()}`} size="small" />
        </Stack>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Signed On: {new Date(project.contractSignedOn).toLocaleDateString()}
        </Typography>
        <Chip
          label={project.isActive ? 'Active' : 'Inactive'}
          color={project.isActive ? 'success' : 'error'}
          size="small"
        />
      </CardContent>
    </Card>
    )
}

export default ProjectsCard;
