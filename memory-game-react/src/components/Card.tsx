type Card = {
  src: string;
  id: number;
};

const Card = ({
  card,
  handleChoice,
  flipped,
  disabled,
}: {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean;
  disabled: boolean;
}) => {
  const handleClick = () => {
    if (disabled) return;
    handleChoice(card);
  };

  return (
    <div key={card.id} className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
