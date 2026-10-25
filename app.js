async function load(){const [pr,fr]=await Promise.all([fetch('publications.json').then(r=>r.json()),fetch('featured.json').then(r=>r.json())]);window.PUBS=pr;window.FEATURES=fr;renderFeatured();renderIcons()}
const imgsrc=p=>p;const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ICONS={"users": "<circle cx=\"9\" cy=\"8\" r=\"3\"/><path d=\"M3.5 19v-1.2A4.8 4.8 0 0 1 8.3 13h1.4a4.8 4.8 0 0 1 4.8 4.8V19\"/><path d=\"M16 5.5a3 3 0 0 1 0 5.8M17 13.5a4.7 4.7 0 0 1 3.5 4.5V19\"/>", "scan-eye": "<path d=\"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M3 4v2M21 4v2M3 18v2M21 18v2\"/>", "accessibility": "<circle cx=\"12\" cy=\"4\" r=\"1.5\"/><path d=\"m5 8 7-2 7 2M12 6v7l-4 7M12 13l5 6M6 11l6 2\"/>", "drafting-compass": "<path d=\"m4 20 8-16 8 16M7 14h10M9 10h6\"/><circle cx=\"12\" cy=\"4\" r=\"1.5\"/>", "graduation-cap": "<path d=\"m2 9 10-5 10 5-10 5L2 9Z\"/><path d=\"M6 11v5c4 3 8 3 12 0v-5M22 9v6\"/>", "id-card": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><circle cx=\"8.5\" cy=\"10\" r=\"2\"/><path d=\"M5.5 15a3 3 0 0 1 6 0M14 9h4M14 13h4\"/>", "mail": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"m3 7 9 6 9-6\"/>", "linkedin": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3\"/><path d=\"M7 10v7M7 7v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4\"/>", "orbit": "<circle cx=\"12\" cy=\"12\" r=\"3\"/><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\" transform=\"rotate(-35 12 12)\"/><circle cx=\"19.5\" cy=\"5.5\" r=\"1\"/>", "sparkles": "<path d=\"m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z\"/><path d=\"m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z\"/>", "calendar-days": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M16 3v4M8 3v4M3 10h18\"/>", "book-open": "<path d=\"M3 5.5A2.5 2.5 0 0 1 5.5 3H12v17H5.5A2.5 2.5 0 0 0 3 22V5.5ZM21 5.5A2.5 2.5 0 0 0 18.5 3H12v17h6.5A2.5 2.5 0 0 1 21 22V5.5Z\"/>", "presentation": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"13\" rx=\"1\"/><path d=\"M12 16v5M8 21h8M7 12l3-3 2 2 4-4\"/>", "newspaper": "<path d=\"M4 5h16v15H4z\"/><path d=\"M8 9h8M8 12h8M8 15h4M2 8v11a2 2 0 0 0 2 2\"/>", "plane": "<path d=\"m22 2-7 20-4-9-9-4 20-7ZM11 13l5-5\"/>", "landmark": "<path d=\"m3 9 9-6 9 6M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 20h18M2 22h20\"/>","layers": "<path d=\"m12 3 9 5-9 5-9-5 9-5Z\"/><path d=\"m3 12 9 5 9-5M3 16l9 5 9-5\"/>", "search": "<circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m16 16 4.5 4.5\"/>", "message-circle": "<path d=\"M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z\"/>", "send": "<path d=\"m22 2-7 20-4-9-9-4 20-7ZM11 13l5-5\"/>"};function renderIcons(){document.querySelectorAll('[data-icon]').forEach(el=>{const n=el.getAttribute('data-icon');if(ICONS[n]&&!el.querySelector('svg'))el.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">'+ICONS[n]+'</svg>'})}function author(s){return esc(s).replace(/L\. Wang/g,'<strong class="me">L. Wang</strong>').replace(/王璐瑶/g,'<strong class="me">王璐瑶</strong>')}
function badges(p){let a=[];if(p.jcr_quartile)a.push('<span class="metric">JCR '+esc(p.jcr_quartile)+'</span>');if(p.impact_factor_2025)a.push('<span class="metric gold">IF '+esc(p.impact_factor_2025)+'</span>');if(p.ccf)a.push('<span class="metric blue">CCF-'+esc(p.ccf)+'</span>');if(p.core_badges)p.core_badges.forEach(x=>a.push('<span class="metric core">'+esc(x)+'</span>'));if(p.top_label)a.push('<span class="metric top">'+esc(p.top_label)+'</span>');return a.join('')}function roleBadge(p){return p.role_label?'<span class="metric role">'+esc(p.role_label)+'</span>':''}
function paperCard(p){const href=p.url||('https://scholar.google.com/scholar?q='+encodeURIComponent(p.title));const kind=p.type==='Conference'?'Conference':'Journal';const rail=p.type==='Conference'?'rail-conference':'rail-journal';return '<article class="pub '+rail+'"><div class="pub-media"><img src="'+esc(imgsrc(p.image))+'" alt="Publication thumbnail for '+esc(p.title)+'"></div><div class="pub-main"><div class="pub-title"><a href="'+esc(href)+'" target="_blank" rel="noopener">'+esc(p.title)+' ↗</a></div><div class="authors">'+author(p.authors)+'</div><div class="meta"><span class="pub-kind">'+kind+'</span><span class="meta-dot">·</span><span class="pub-year"><span data-icon="calendar-days"></span>'+esc(p.year)+'</span><span class="meta-dot">·</span><i>'+esc(p.venue)+'</i> · <b>'+esc(p.status)+'</b> '+roleBadge(p)+badges(p)+'</div></div></article>'}function renderFeatured(){document.getElementById('featured').innerHTML=FEATURES.map(p=>{const href=p.url||('https://scholar.google.com/scholar?q='+encodeURIComponent(p.title));return '<article class="card"><a class="feature-image-link" href="'+esc(href)+'" target="_blank" rel="noopener" aria-label="Open paper: '+esc(p.title)+'"><img class="thumb" src="'+esc(imgsrc(p.image))+'" alt="Research figure for '+esc(p.title)+'"></a><div class="pad"><h3><a class="feature-title-link" href="'+esc(href)+'" target="_blank" rel="noopener">'+esc(p.title)+' <span class="external-mark">↗</span></a></h3><p>'+author(p.authors)+'</p><div class="feature-meta">'+roleBadge(p)+badges(p)+'</div><div class="feature-venue"><i>'+esc(p.venue)+'</i><span>'+esc(p.year)+'</span></div>'+(p.title.startsWith('AutoGen-Insight')?'<a class="sub-link" href="https://www.ntu.edu.sg/mae/news-events/news/detail/tracing-how-an-ai-designs-a-car" target="_blank" rel="noopener">NTU Research Feature ↗</a>':'')+'</div></article>'}).join('')}let activePubType='All';
function initPublicationFilters(){
 const type=document.getElementById('pubType'),year=document.getElementById('pubYear'),role=document.getElementById('pubRole'),domain=document.getElementById('pubDomain');
 const all=PUBS.filter(p=>p.status!=='Under review'&&p.status!=='With editor');
 [...new Set(all.map(p=>String(p.year)).filter(Boolean))].sort((a,b)=>Number(b)-Number(a)).forEach(y=>year.add(new Option(y,y)));
 const roles=[...new Set(all.map(p=>p.role_label||p.role).filter(Boolean))];
 roles.forEach(r=>{if(![...role.options].some(o=>o.value===r))role.add(new Option(r,r))});
 [type,year,role,domain].forEach(el=>el.addEventListener('change',renderPublications));
 document.getElementById('pubReset').addEventListener('click',()=>{type.value='all';year.value='all';role.value='all';domain.value='all';renderPublications()});
 renderPublications();
}
function renderPublications(){
 const type=document.getElementById('pubType').value;
 const year=document.getElementById('pubYear').value;
 const role=document.getElementById('pubRole').value;
 const domain=document.getElementById('pubDomain').value;
 const rows=PUBS.filter(p=>p.status!=='Under review'&&p.status!=='With editor')
  .filter(p=>type==='all'||p.type===type)
  .filter(p=>year==='all'||String(p.year)===year)
  .filter(p=>role==='all'||(p.role_label||p.role)===role)
  .filter(p=>domain==='all'||p.research_domain===domain);
 document.getElementById('pubCount').textContent=rows.length+' publication'+(rows.length===1?'':'s');
 const target=document.getElementById('publicationList');
 target.innerHTML=rows.length?rows.map(paperCard).join(''):'<div class="pub-empty"><span data-icon="search"></span><strong>No publications found</strong><p>Try another combination or reset the filters.</p></div>';
 renderIcons();
}
function initGuestbook() {
  const form = document.getElementById('guestbookForm');
  if (!form) return;
  const nameEl = document.getElementById('guestName');
  const msgEl = document.getElementById('guestMessage');
  const status = document.getElementById('guestMessages');
  const button = form.querySelector('button[type="submit"]');
  const endpoint = form.getAttribute('action') || '';
  let submitting = false;
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');

  function showStatus(message, error = false) {
    const note = document.createElement('p');
    note.className = 'guest-sent-note' + (error ? ' error' : '');
    note.textContent = message;
    status.replaceChildren(note);
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submitting) return;
    const message = msgEl.value.trim();
    if (!message) {
      showStatus('Please enter a message.', true);
      msgEl.focus();
      return;
    }
    if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) {
      showStatus('Messaging is temporarily unavailable. Please email wly0903@sjtu.edu.cn. Your message has not been sent.', true);
      return;
    }
    submitting = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    showStatus('Sending your message…');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: nameEl.value.trim() || 'Website visitor',
          message,
          _subject: 'Academic homepage guestbook message'
        }),
        signal: controller.signal
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok === false || result?.errors?.length) {
        throw new Error('Submission rejected');
      }
      showStatus('Thank you — your message has been submitted.');
      form.reset();
    } catch (error) {
      showStatus('We could not confirm your submission. Your message is still here. Please try again or email wly0903@sjtu.edu.cn.', true);
    } finally {
      clearTimeout(timeout);
      submitting = false;
      button.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
}

document.addEventListener('DOMContentLoaded',()=>{load().then(()=>initPublicationFilters()).catch(e=>console.error(e));initGuestbook()});
