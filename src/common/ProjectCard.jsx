function ProjectCard({ link, h3, p1, p2 }) {
  return (
    <a href={link} target="_blank">
      <section>
        {/* <img className="hover" src={src} alt={`${h3} logo`} /> */}
        <h3>{h3}</h3>
        <p>{p1}</p>
        <p className="bold">{p2}</p>
      </section>
    </a>
  );
}

export default ProjectCard;
