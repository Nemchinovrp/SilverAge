import { useState } from 'react';
import type { Poet } from '../data/poets';
export default function PoemReader({poets, base}: {poets: Poet[]; base:string}) {
 const [index, setIndex] = useState(0);
 const poem = poets[index];
 return <div className="reader"><div className="reader-intro"><span className="eyebrow">НАЕДИНЕ СО СТРОКОЙ</span><h2>Пусть поэзия<br/><i>случится.</i></h2><p>Иногда для встречи с целой эпохой<br/>достаточно одного стихотворения.</p><button className="text-button" onClick={() => setIndex((index+1)%poets.length)}>Другое стихотворение <span>↻</span></button></div><div className="poem" aria-live="polite"><span className="poem-quote" aria-hidden="true">“</span><span className="eyebrow">{poem.poemYear} · {poem.movement}</span><h3>{poem.poemTitle}</h3><p className="verse">{poem.poem}</p><a href={`${base}poets/${poem.slug}/`}><span>{poem.first} {poem.last}</span><span>↗</span></a></div></div>;
}
