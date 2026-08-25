import React from 'react';

export default function EditorialKicker({ children, className = '' }) {
  const terms = String(children)
    .split('·')
    .map((term) => term.trim())
    .filter(Boolean);

  return <p className={`editorial-kicker ${className}`.trim()} aria-label={terms.join(', ')}>
    {terms.map((term) => <span key={term}>{term}</span>)}
  </p>;
}
