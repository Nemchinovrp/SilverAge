import { useState } from 'react';
import type { Poet } from '../data/poets';

export default function PoemReader({ poets, base }: { poets: Poet[]; base: string }) {
  const entries = poets.flatMap(poet => poet.poems.map(poem => ({ poet, poem })));
  const [index, setIndex] = useState(0);
  const entry = entries[index];
  if (!entry) return null;
  const { poet, poem } = entry;

  return (
    <div className="reader">
      <div className="reader-intro">
        <span className="eyebrow">НАЕДИНЕ СО СТРОКОЙ</span>
        <h2>Пусть поэзия<br /><i>случится.</i></h2>
        <p>Выберите автора и стихотворение<br />или продолжите знакомство с коллекцией.</p>
        <div className="reader-controls">
          <label>Поэт
            <select value={poet.slug} onChange={event => setIndex(entries.findIndex(item => item.poet.slug === event.target.value))}>
              {poets.filter(item => item.poems.length).map(item => <option key={item.slug} value={item.slug}>{item.first} {item.last}</option>)}
            </select>
          </label>
          <label>Стихотворение
            <select value={poem.id} onChange={event => setIndex(entries.findIndex(item => item.poet.slug === poet.slug && item.poem.id === event.target.value))}>
              {poet.poems.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
          </label>
        </div>
        <button className="text-button" onClick={() => setIndex((index + 1) % entries.length)}>Следующее стихотворение <span aria-hidden="true">↻</span></button>
        <p className="reader-count" aria-live="polite">{index + 1} / {entries.length} стихотворений</p>
      </div>
      <div className="poem" aria-live="polite" aria-atomic="true">
        <span className="poem-quote" aria-hidden="true">“</span>
        <span className="eyebrow">{poem.year} · {poet.era}</span>
        <h3>{poem.title}</h3>
        <p className="verse">{poem.text}</p>
        <a href={`${base}poets/${poet.slug}/#${poem.id}`}><span>{poet.first} {poet.last}</span><span aria-hidden="true">↗</span></a>
      </div>
    </div>
  );
}
