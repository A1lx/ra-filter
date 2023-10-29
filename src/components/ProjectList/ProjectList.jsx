export const ProjectList = ({projects}) => {

  let projectsElems = projects.map(elem => {
    // eslint-disable-next-line
    return <img src={elem.img} className="projects__img"/>
  });

  return (
    <div className="projects">
      {projectsElems}
    </div>
  )
}