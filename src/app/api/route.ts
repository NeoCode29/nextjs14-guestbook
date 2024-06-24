import { NextRequest, NextResponse } from 'next/server';

type guestMassage = {
  username: string;
  message: string;
  date : String;
} 

let listMassage : Array<guestMassage> = [];

export const GET = (req : NextRequest ) => {
  
  return new NextResponse(JSON.stringify(listMassage));
}

export const POST = async (req : NextRequest) => {
  const body = await req.json();
  listMassage.push(body);
  return new NextResponse(JSON.stringify({massage : "succes"}))
}