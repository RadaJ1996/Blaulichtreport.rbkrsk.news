import {authenticate} from "../../../lib/auth";
export async function POST(request){try{const {email,password}=await request.json();return (await authenticate(String(email||""),String(password||"")))?Response.json({ok:true}):Response.json({ok:false},{status:401})}catch{return Response.json({ok:false},{status:400})}}
