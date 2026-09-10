import {get} from "@vercel/blob";
export const runtime="nodejs";
export async function GET(request){const path=new URL(request.url).searchParams.get("path");if(!path||!path.startsWith("images/"))return new Response("Not found",{status:404});try{const {stream,blob}=await get(path,{access:"private",useCache:false});return new Response(stream,{headers:{"Content-Type":blob.contentType||"application/octet-stream","Cache-Control":"public, max-age=31536000, immutable"}})}catch{return new Response("Not found",{status:404})}}
