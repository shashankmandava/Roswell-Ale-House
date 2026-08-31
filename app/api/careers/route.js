import { NextResponse } from 'next/server';
import { getFirestore } from '@/lib/firebaseAdmin';

export async function POST(request){
  try{
    const data=await request.json();
    if(!data.name || !data.email || !data.phone || !data.position){
      return NextResponse.json({error:'Please complete all required fields.'},{status:400});
    }
    const db=getFirestore();
    if(!db){
      return NextResponse.json({error:'Firestore is not configured yet. Copy .env.example to .env.local and add your Google Cloud credentials.'},{status:503});
    }
    await db.collection('careerApplications').add({
      ...data,
      createdAt:new Date().toISOString(),
      source:'roswell-ale-house-website'
    });
    return NextResponse.json({ok:true});
  }catch(error){
    console.error(error);
    return NextResponse.json({error:'Unable to save the application.'},{status:500});
  }
}
