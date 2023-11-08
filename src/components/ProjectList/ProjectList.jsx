export const ProjectList = ({projects}) => {

  const projectsElems = projects.map((elem, index) => (
    // eslint-disable-next-line
    <img key={index} src={elem.img} className="projects__img" alt={`project-${index}`}/>
  ));

  return (
    <div className="projects">
      {projectsElems}
    </div>
  )
}