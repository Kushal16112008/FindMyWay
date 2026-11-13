(() => {
 const d=window.DEMO, map=L.map('map').setView(d.center,12);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'© OpenStreetMap contributors'}).addTo(map);
 const icon=(color)=>L.divIcon({className:'',html:`<div style="width:13px;height:13px;border:2px solid white;border-radius:50%;background:${color};box-shadow:0 1px 5px #3338"></div>`,iconSize:[13,13]});
 d.villages.forEach(v=>L.marker([v.lat,v.lng],{icon:icon('#268a67')}).addTo(map).bindPopup(`<b>${v.name}</b><br>${v.demand} students · sample demand`));
 d.schools.forEach(s=>L.marker([s.lat,s.lng],{icon:icon('#283c90')}).addTo(map).bindPopup(`<b>${s.name}</b><br>Sample school location`));
 d.buses.forEach((b,i)=>{const v=d.villages[i];L.marker([v.lat+.006,v.lng+.006],{icon:icon('#d38b24')}).addTo(map).bindPopup(`<b>${b.id}</b><br>${b.name}<br>${b.assigned}/${b.capacity} seats · simulated`);});
 L.polyline(d.floodedRoad,{color:'#bd4439',weight:7,dashArray:'8 9',opacity:.9}).addTo(map).bindPopup('<b>Flooded connecting road</b><br>Closed in this demo scenario. Do not route students through it.');
 const plans=[
  ["BUS-01 · North Shuttle","Kerehalli → North pickup → Examination Centre",30,32],
  ["BUS-02 · East Connector","Mavinakere → East pickup → Examination Centre",28,28],
  ["BUS-03 · South Link","Doddamudigere → South pickup → Examination Centre",24,26],
  ["BUS-04 · Central Mini","Honnaghatta → Central pickup → Examination Centre",24,24],
  ["BUS-05 · Community Van","Kallur → West-side pickup → Examination Centre",22,22]
 ];
 const plansEl=document.getElementById('plans');
 plans.forEach(p=>{const el=document.createElement('div');el.className='plan';el.innerHTML=`<div class="plan-top"><span>${p[0]}</span><span class="seats">${p[2]}/${p[3]} seats</span></div><p>${p[1]}</p>`;plansEl.append(el);});
 const rows=document.getElementById('allocationRows');
 plans.forEach((p,i)=>{const tr=document.createElement('tr');tr.innerHTML=`<td><b>${p[0].split(' · ')[0]}</b></td><td>${d.villages[i].name}</td><td>${p[3]}</td><td>${p[2]}</td><td class="state">Proposed · review</td>`;rows.append(tr);});
 const msg=document.getElementById('actionMessage');
 document.getElementById('confirmBtn').onclick=()=>{msg.textContent='Review mode only: no dispatch has been sent. Verify road access, timing, and named pickup points with the local coordinator.';};
 document.getElementById('undoBtn').onclick=()=>{msg.textContent='Demo scenario reset. Sample allocation remains unchanged.';};
 document.getElementById('escalateBtn').onclick=()=>{msg.textContent='Escalation summary: 36 students remain unassigned in this sample. Share only minimum necessary student details through an approved, access-controlled channel.';};
 document.getElementById('notifyBtn').onclick=()=>{msg.textContent='Notification preview only. No SMS, WhatsApp, or voice message has been sent.';};
 let hindi=false;
 document.getElementById('langBtn').onclick=()=>{hindi=!hindi;document.getElementById('langBtn').textContent=hindi?'English':'हिन्दी';document.getElementById('pageTitle').textContent=hindi?'हर विद्यार्थी को सुरक्षित पहुँचाएँ।':'Keep every student moving.';document.getElementById('pageSub').textContent=hindi?'नमूना डेटा के साथ परिवहन संचालन दृश्य।':'A live-style operational view built with clearly labelled sample data.';};
})();
