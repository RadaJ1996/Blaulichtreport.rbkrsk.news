export const CATEGORIES=["Aktuelles","Overath","Rösrath","Lohmar","Sonstige","Übungen","Galerie","Über uns","Kontakt","Partner"];
export function slugify(value){return value.toString().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
