import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, Plus, Check, ChevronRight, House, Layers3, Wallet, SlidersHorizontal } from 'lucide-react';
import { money, derive, changeAllocation, SCENARIOS } from './model';
import logo from '../../../assets/allpa/brand/v1/lockup-forest.svg';
import alpaca from '../../../assets/allpa/brand/v1/symbol-forest.svg';

export default function ThreeScreens() {
  const [step,setStep]=useState(0), [scenario,setScenario]=useState('comfortable');
  const [draft,setDraft]=useState({...SCENARIOS.comfortable});
  const [amount,setAmount]=useState('1200'), [source,setSource]=useState('Yape');
  const [saved,setSaved]=useState(null), [notice,setNotice]=useState(''), [error,setError]=useState('');
  const [editing,setEditing]=useState(null), [busy,setBusy]=useState(false);
  const reduced=useReducedMotion(), timer=useRef(), heading=useRef();
  useEffect(()=>()=>clearTimeout(timer.current),[]);
  useEffect(()=>{heading.current?.focus({preventScroll:true});},[step]);
  const result=derive(draft), current=saved?derive(saved):{available:0};
  function go(n){setStep(n);setNotice('');}
  function pick(key){clearTimeout(timer.current);setBusy(false);setScenario(key);setDraft({...SCENARIOS[key]});setAmount(String(SCENARIOS[key].income/100));setSaved(null);setNotice('');setError('');setStep(1);}
  function review(e){e.preventDefault();const raw=amount.trim().replace(',','.'); if(!/^\d{1,7}(\.\d{1,2})?$/.test(raw)||Number(raw)<=0){setError('Escribe un monto mayor a cero, con hasta dos decimales.');return;}
    const income=Math.round(Number(raw)*100), payments=Math.min(income,50000), buffer=scenario==='adjustment'?0:Math.min(Math.round(income*.1),income-payments);
    setDraft({income,payments,buffer,rent:50000});setError('');setEditing(null);setStep(2);
  }
  function save(){if(busy)return;setBusy(true);timer.current=setTimeout(()=>{setSaved({...draft,source});setBusy(false);setStep(0);setNotice('Reparto guardado.');},reduced?0:550);}
  const Brand=()=> <div className="brand-row"><img src={logo} alt="allpa"/></div>;
  const Layer=({kind,label,value,note,icon:Icon})=><div className={'land '+kind}><div><span className="land-label"><Icon size={15}/>{label}</span><strong>{money(value)}</strong><small>{note}</small></div></div>;
  return <main className="allpa-studio"><header className="studio-head"><div><span className="eyebrow">ALLPA · PROTOTIPO DE PRODUCTO</span><h1>Allpa · Registro y reparto</h1></div><p>Prototipo de tres pantallas</p></header>
    <div className="studio-controls"><nav aria-label="Pantallas del prototipo">{['Inicio','Registrar cobro','Reparto'].map((x,i)=><button key={x} onClick={()=>go(i)} aria-current={step===i?'step':undefined}><span>0{i+1}</span>{x}</button>)}</nav><label><SlidersHorizontal size={14}/>Escenario<select value={scenario} onChange={e=>pick(e.target.value)} disabled={busy}><option value="comfortable">Cobro holgado · S/ 1,200</option><option value="shortfall">Faltante · S/ 350</option><option value="adjustment">Colchón a cero</option></select></label></div>
    <div className="screen-grid">
      <section className={'phone home-screen '+(step===0?'active':'')} aria-label="Inicio"><Brand/><div className="screen-content"><div className="greeting"><img src={alpaca} alt=""/></div><h2 ref={step===0?heading:null} tabIndex={-1}>Así estás<br/><em>hoy.</em></h2><div className="home-amount"><span>Disponible</span><strong>{money(current.available)}</strong><small>Según tus registros</small></div>
      <div className="mini-landscape" aria-label="Resumen del dinero organizado"><div className="mini-buffer"><span>Colchón</span><b>{money(saved?.buffer||0)}</b></div><div className="mini-payments"><span>Para tus pagos</span><b>{money(saved?.payments||0)}</b></div></div>
      <div className="next-payment"><div className="line-icon"><House size={19}/></div><div><b>Alquiler</b><small>{saved?derive(saved).shortfall?`Faltan ${money(derive(saved).shortfall)}`:'Monto completo en tu plan':'Aún sin asignar · S/ 500'}</small></div><span>Próximo<br/>pago</span></div>
      {notice&&<div className="confirmation" role="status"><Check size={18}/><span>{notice}</span></div>}
      <button className="primary" onClick={()=>go(1)}><Plus size={18}/>{saved?'Revisar este cobro':'Registrar cobro'}<ArrowUpRight size={20}/></button>
      <p className="footnote">{saved?`${source} · Cobro de ${money(saved.income)} organizado`:'Empieza con un cobro. Lo ordenamos contigo.'}</p></div></section>
      <section className={'phone capture-screen '+(step===1?'active':'')} aria-label="Registrar cobro"><Brand/><div className="screen-content"><button className="back" onClick={()=>go(0)}><ArrowLeft size={17}/>Inicio</button><span className="eyebrow">01 / TU COBRO</span><h2 ref={step===1?heading:null} tabIndex={-1}>Entró<br/><em>plata.</em></h2><p className="intro">Registra el monto que recibiste.</p><form onSubmit={review}><label className="amount-label" htmlFor="income">¿Cuánto recibiste?</label><div className="money-field"><span>S/</span><input id="income" inputMode="decimal" autoComplete="off" value={amount} onChange={e=>{setAmount(e.target.value);setError('');}} aria-invalid={!!error} aria-describedby={error?'amount-error':undefined}/></div>{error&&<p id="amount-error" className="error" role="alert">{error}</p>}
      <button type="button" className="suggestion" onClick={()=>setAmount('1200')}>Usar cobro habitual <b>S/ 1,200</b><Plus size={14}/></button><fieldset><legend>¿Por dónde te pagaron?</legend><div className="sources">{['Yape','Plin','Transferencia','Efectivo'].map(s=><label key={s} className={source===s?'selected':''}><input type="radio" name="source" checked={source===s} onChange={()=>setSource(s)}/>{s}</label>)}</div></fieldset>
      <div className="capture-note"><Layers3 size={22}/><p>En el siguiente paso decides cuánto va a pagos, colchón y disponible.</p></div><button className="primary" type="submit">Ver reparto<ArrowUpRight size={20}/></button><p className="footnote">Todavía puedes ajustar antes de guardar.</p></form></div></section>
      <section className={'phone allocation-screen '+(step===2?'active':'')} aria-label="Reparto"><Brand/><div className="screen-content"><button className="back" disabled={busy} onClick={()=>go(1)}><ArrowLeft size={17}/>Tu cobro</button><span className="eyebrow">02 / REPARTO</span><h2 ref={step===2?heading:null} tabIndex={-1}>Reparte<br/><em>este cobro.</em></h2><div className="income-summary"><span>Este cobro · {source}</span><b>{money(draft.income)}</b></div>
      <motion.div className="landscape" animate={busy&&!reduced?{y:[0,-7,0]}:{y:0}} transition={{duration:.5}}><Layer kind="available" label="Disponible" value={result.available} note="Lo que queda de este cobro" icon={Wallet}/><Layer kind="buffer" label="Colchón" value={draft.buffer} note={draft.buffer?'Aporte de este cobro':'Esta vez, sin aporte'} icon={Layers3}/><Layer kind="payments" label="Pagos" value={draft.payments} note={result.shortfall?`Al alquiler le faltan ${money(result.shortfall)}`:'Alquiler contemplado en tu plan'} icon={House}/></motion.div>
      <div className="adjustments">{[['payments','Pagos'],['buffer','Colchón']].map(([key,label])=><div key={key}><button className="adjust-row" disabled={busy} aria-expanded={editing===key} onClick={()=>setEditing(editing===key?null:key)}><span>Ajustar {label.toLowerCase()}</span><b>{money(draft[key])}<ChevronRight size={15}/></b></button>{editing===key&&<div className="slider-wrap"><label htmlFor={key}>{label} · {money(draft[key])}</label><input id={key} type="range" min="0" max={key==='payments'?Math.min(draft.rent,draft.income-draft.buffer):draft.income-draft.payments} step="1" value={draft[key]} disabled={busy} onChange={e=>setDraft(changeAllocation(draft,key,Number(e.target.value)))} aria-valuetext={money(draft[key])}/><small>El disponible se recalcula al ajustar.</small></div>}</div>)}</div>
      <button className="primary" onClick={save} disabled={busy} aria-busy={busy}>{busy?'Guardando…':'Guardar reparto'}<Check size={19}/></button><p className="footnote">Organizas tus registros. No mueves dinero.</p></div></section>
    </div><p className="studio-disclaimer">Demostración con datos ficticios · Un cobro editable por escenario · Guardado en memoria durante esta sesión</p><div className="sr-only" aria-live="polite">{busy?'Guardando reparto':notice}</div>
  </main>;
}
