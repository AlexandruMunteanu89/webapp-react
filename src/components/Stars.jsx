function Stars({ vote = 0 }) {
  const numVote = Number(vote) || 0; // se vote è undefined metti 0 come default
  const stars = [];

  // 1. Stelle piene
  for (let i = 0; i < numVote; i++) {
    stars.push(<i key={'full'+i} className="bi bi-star-fill text-warning"></i>);
  }

  // 2. Stelle vuote
  for (let i = 0; i < 5 - numVote; i++) {
    stars.push(<i key={'empty'+i} className="bi bi-star text-warning"></i>);
  }

  return <span>{stars} <span className="text-muted">({numVote}/5)</span></span>
}

export default Stars