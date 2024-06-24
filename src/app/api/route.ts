import { NextRequest, NextResponse } from 'next/server';
import { addGuestMassage, getGuestMassage } from '@/lib/models/guestBook';

type guestMassage = {
  username: string;
  message: string;
  date : String;
} 

let listMassage : Array<guestMassage> = [];

export const GET = async (req : NextRequest ) => {
  let responseDB = await getGuestMassage();
  return new NextResponse(JSON.stringify(responseDB));
}

export const POST = async (req : NextRequest) => {
  const body = await req.json();
  let responseDB = await addGuestMassage({...body,id: Date.now()});
  return new NextResponse(JSON.stringify({massage : responseDB}));
}