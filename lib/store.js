import {get,put,del} from "@vercel/blob";
const PATH="content/site.json";
const EMPTY={posts:[],gallery:[],partners:[],pages:{about:"",contact:""}};
export async function readSite(){
  try{
    const {stream}=await get(PATH,{access:"private",useCache:false});
    const text=await new Response(stream).text();
    return {...EMPTY,...JSON.parse(text)};
  }catch{return structuredClone(EMPTY)}
}
export async function writeSite(site){
  await put(PATH,JSON.stringify(site),{access:"private",allowOverwrite:true,contentType:"application/json"});
}
export async function saveImage(file,base){
  const safe=file.name.replace(/[^a-zA-Z0-9._-]/g,"-").slice(-90)||"image";
  const pathname=`images/${base}-${Date.now()}-${safe}`;
  const result=await put(pathname,file,{access:"private",addRandomSuffix:false,contentType:file.type||"application/octet-stream"});
  return result.pathname;
}
export async function removeImage(pathname){if(pathname)try{await del(pathname)}catch{}}
