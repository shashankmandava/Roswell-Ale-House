'use client';
import { useState } from 'react';

export default function CareersForm(){
  const [status,setStatus]=useState('');
  const [busy,setBusy]=useState(false);
  async function submit(e){
    e.preventDefault(); setBusy(true); setStatus('');
    const form=new FormData(e.currentTarget);
    const data=Object.fromEntries(form.entries());
    try{
      const res=await fetch('/api/careers',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
      const json=await res.json();
      if(!res.ok) throw new Error(json.error||'Unable to submit application.');
      e.currentTarget.reset(); setStatus('Application saved successfully.');
    }catch(err){ setStatus(err.message); }
    finally{ setBusy(false); }
  }
  return <form onSubmit={submit}>
    <div className="form-grid">
      <div className="field"><label>Full Name</label><input name="name" required /></div>
      <div className="field"><label>Email</label><input name="email" type="email" required /></div>
      <div className="field"><label>Phone</label><input name="phone" type="tel" required /></div>
      <div className="field"><label>Position Interested In</label><select name="position" required><option value="">Select one</option><option>Server</option><option>Bartender</option><option>Host</option><option>Kitchen</option><option>Manager</option><option>Other</option></select></div>
      <div className="field"><label>Availability</label><input name="availability" placeholder="e.g. Evenings and weekends" /></div>
      <div className="field"><label>Years of Experience</label><input name="experience" placeholder="e.g. 2 years" /></div>
      <div className="field full"><label>Tell Us About Yourself</label><textarea name="message" placeholder="Experience, interests, and anything else you would like us to know." /></div>
    </div>
    <button className="btn btn-primary" disabled={busy} style={{marginTop:18}}>{busy?'Submitting...':'Submit Application'}</button>
    {status&&<div className="status">{status}</div>}
  </form>
}
