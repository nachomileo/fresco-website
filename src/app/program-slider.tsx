"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { ProgramGroup } from "./program-data";

export function ProgramSlider({ groups }: { groups: ProgramGroup[] }) {
  const [active, setActive] = useState(0);
  const previewRef = useRef<HTMLElement>(null);
  const move = (direction: number) => setActive((active + direction + groups.length) % groups.length);
  const activeGroup = groups[active];
  const switchFromMenu = (index: number) => {
    setActive(index);
    requestAnimationFrame(() => previewRef.current?.scrollIntoView({ block: "start" }));
  };

  return (
    <div className="program-slider" data-reveal>
      <div className="slider-tabs" role="tablist" aria-label="Líneas del programa">
        {groups.map((group, index) => (
          <button className={index === active ? "is-active" : ""} onClick={() => setActive(index)} role="tab" aria-selected={index === active} key={group.slug}>
            <span>{group.number}</span>{group.kicker}
          </button>
        ))}
      </div>
      <div className="slider-viewport">
        <div className="slider-track" style={{ transform: `translate3d(-${active * 100}%,0,0)` }}>
          {groups.map((group, index) => (
            <article className={`program-slide${index === active ? " is-active" : ""}`} key={group.slug}>
              <Link className="slide-image" href={`/${group.slug}`} aria-label={`Ir a ${group.title}`}><Image src={group.image} alt="" fill sizes="(max-width: 760px) 100vw, 54vw" /></Link>
              <div className="slide-shade" />
              <div className="slide-content">
                <p className="eyebrow">{group.number} · {group.kicker}</p>
                <div><h3>{group.title}</h3><p>{group.statement}</p></div>
                <Link href={`/${group.slug}`}>Conocer el programa <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="slider-controls"><button onClick={() => move(-1)} aria-label="Programa anterior">←</button><span>{String(active + 1).padStart(2, "0")} / {String(groups.length).padStart(2, "0")}</span><button onClick={() => move(1)} aria-label="Programa siguiente">→</button></div>
      </div>
      <section className="program-preview" aria-live="polite" ref={previewRef}>
        <header className="program-preview-heading">
          <div><p className="eyebrow">{activeGroup.slug === "talleres" ? "Talleres de fin de semana" : activeGroup.kicker}</p><h3>{activeGroup.title}</h3></div>
          <div className="program-preview-intro"><p>{activeGroup.description}</p><span>{activeGroup.items.length} {activeGroup.items.length === 1 ? "propuesta" : "propuestas"}</span></div>
        </header>
        <div className="program-preview-grid">
          {activeGroup.items.map((item) => (
            <article className="program-preview-card" key={item.number}>
              <Link className="program-preview-image" href={item.href ?? `/${activeGroup.slug}`} aria-label={`Ir a ${item.title}`}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 31vw" /></Link>
              <div className="program-preview-body">
                <div className="program-preview-meta"><span>{item.number}</span><span>{item.type}</span></div>
                <div><p>{item.artist}</p><h4>{item.title}</h4>{item.subtitle && <p className="program-preview-subtitle">{item.subtitle}</p>}<p className="program-preview-description">{item.description}</p></div>
                <div className="program-preview-footer"><strong>{item.detail}</strong><Link href={item.href ?? `/${activeGroup.slug}`}>{activeGroup.slug === "talleres" || activeGroup.slug === "seminarios" ? "Me apunto" : "Ver ficha"} <span aria-hidden="true">↗</span></Link></div>
              </div>
            </article>
          ))}
        </div>
        <nav className="program-preview-switcher" aria-label="Ver otras líneas del programa">
          {groups.map((group, index) => index !== active && (
            <button type="button" onClick={() => switchFromMenu(index)} key={group.slug}>
              <span>{group.number}</span><strong>{group.title}</strong><span aria-hidden="true">↗</span>
            </button>
          ))}
        </nav>
      </section>
    </div>
  );
}
