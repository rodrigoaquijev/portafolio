import React from 'react';

export default function SiteFooter({ text, className = '' }) {
  return <footer className={`ref-footer site-footer ${className}`.trim()}><span>© 2026 Rodrigo Aquije</span><span>{text}</span><nav><a href="mailto:rodrigoaq996@gmail.com">Email</a><a href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer">LinkedIn</a></nav></footer>;
}
