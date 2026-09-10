import Link from "next/link";import {CATEGORIES} from "../lib/site";
export default function Header(){return <header><div className="wrap"><Link className="logo" href="/">Einsatzreport.rbkrsk</Link><div className="tag">Die Blaulichtnews aus dem Bergischen</div><nav>{CATEGORIES.map(c=><Link key={c} href={c==="Aktuelles"?"/":`/kategorie/${encodeURIComponent(c)}`}>{c}</Link>)}</nav></div></header>}
