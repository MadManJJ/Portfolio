function ContactBlock({ icon, text, alt, claN }) {
  return (
    <div className={claN}>
      <span>
        <img src={icon} alt={alt} />
      </span>
      <p>{text}</p>
    </div>
  );
}

export default ContactBlock;
