const Card = ({ reverse, order, img, cardText, buttonText, href }) => {
  return (
    <div
      className={reverse ? "card closing transparent" : "card opening opaque"}
      style={{ "--order": order }}
    >
      <img src={img} className="cardImage" alt="img not found" />
      <div className="cardText">{cardText}</div>
      {buttonText !== null ? (
        <a href={href} target="_blank" rel="noreferrer">
          <div className="cardButton">{buttonText}</div>
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
