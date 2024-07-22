type CardMarkProps = {
  text?: 'Premium';
  className?: 'offer' | 'place-card';
}

function Badge({text = 'Premium', className = 'place-card'}: CardMarkProps) {

  return (
    <div className={`${className}__mark`}>
      <span>{text}</span>
    </div>
  );
}

export default Badge;
