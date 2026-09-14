/* =========================================================
   MACBETH — SCROLLYTELLING STUDY GUIDE
   All content lives in the data blocks below. Edit freely.
   ========================================================= */

/* ---------- CHARACTERS ---------- */
const characters = [
  { name:"Macbeth", img:"img/macbeth.jpg", role:"Thane of Glamis & Cawdor → King", pos:"center top",
    desc:"A brave, honoured general whose ambition — lit by prophecy and fanned by his wife — turns him into a murderer and tyrant, then a hollow, doomed man." },
  { name:"Lady Macbeth", img:"img/lady-macbeth.jpg", role:"Macbeth's wife",
    desc:"The play's most ruthless will. She shames Macbeth into murder, calls on spirits to 'unsex' her — then is unravelled by the guilt she thought she could wash away." },
  { name:"King Duncan", img:"img/duncan.jpg", role:"King of Scotland",
    desc:"Gentle, generous and trusting. His murder is a wound to nature itself and plunges Scotland into darkness." },
  { name:"Banquo", img:"img/banquo.jpg", role:"General & Macbeth's friend",
    desc:"Hears the same prophecy but resists temptation. Noble and watchful — and murdered for the crime of fathering future kings." },
  { name:"Macduff", img:"img/macduff.jpg", role:"Thane of Fife", pos:"center 30%",
    desc:"The play's moral avenger. He suspects Macbeth early, loses his family to him, and — 'not of woman born' — finally kills him." },  
  { name:"Malcolm", img:"img/malcolm.jpg", role:"Duncan's heir → King",
    desc:"Flees to England, tests loyalty carefully, and returns as the lawful king who restores order to a broken Scotland." },
  { name:"The Weird Sisters", img:"img/witches.jpg", role:"The Three Witches",
    desc:"Agents of chaos who predict but never command. Their riddling prophecies bait Macbeth's ambition — the choices are always his own." },
  { name:"Lady Macduff", img:"img/lady-macduff.jpg", role:"Macduff's wife",
    desc:"Abandoned when her husband flees. Her murder, with her children, exposes the full horror of Macbeth's tyranny." }
];

/* ---------- ALLEGIANCE ---------- */
const factions = [
  { side:"loyal", title:"⚔ Loyal to Duncan / Malcolm",
    people:[
      {name:"King Duncan",note:"dead",label:"Murdered · A2"},
      {name:"Malcolm — heir & future king"},
      {name:"Donalbain — Duncan's younger son"},
      {name:"Macduff, Thane of Fife"},
      {name:"Banquo",note:"dead",label:"Murdered · A3"},
      {name:"Lennox",note:"turn",label:"Turns"},
      {name:"Ross"},
      {name:"Siward — English general"}
    ]},
  { side:"macbeth", title:"🗡 Macbeth's Faction",
    people:[
      {name:"Macbeth",note:"dead",label:"Killed · A5"},
      {name:"Lady Macbeth",note:"dead",label:"Dies · A5"},
      {name:"Seyton — his officer"},
      {name:"The Weird Sisters — manipulate him"},
      {name:"Hired Murderers"}
    ]}
];

/* ---------- TIMELINE ---------- */
const timeline = [
  { when:"Act I", text:"Victory in battle. The witches hail Macbeth as king-to-be; he is made Thane of Cawdor. Duncan names Malcolm heir and comes to stay the night." },
  { when:"Act II", text:"Macbeth murders the sleeping Duncan. The princes flee, so suspicion falls on them — and Macbeth takes the crown." },
  { when:"Act III", text:"Banquo is murdered, but Fleance escapes. Banquo's ghost shatters the royal banquet. Nobles grow uneasy; Macduff slips away to England." },
  { when:"Act IV", text:"New prophecies breed false confidence. Macbeth slaughters Macduff's family. Malcolm and Macduff raise an army." },
  { when:"Act V", text:"Lady Macbeth sleepwalks and dies. Birnam Wood 'moves.' Macduff — 'not of woman born' — kills Macbeth. Malcolm is crowned." }
];

/* ---------- ACTS (scenes, themes, quotes, images, audio) ---------- */
/* NOTE: the "audio" field is the path to YOUR recorded voice note.
   Put your files in an "audio" folder. Change .mp3 to .webm if needed. */
const acts = [
  {
    num:"Act One", title:"Prophecy & Temptation", audio:"audio/act1.m4a",
    scenes:[
      ["1.1","Three witches meet in thunder and plan to find Macbeth — <strong>'fair is foul, and foul is fair.'</strong>"],
      ["1.2","A bleeding captain reports Macbeth's heroism. Duncan gives him the traitor's title: <strong>Thane of Cawdor</strong>."],
      ["1.3","The witches prophesy Macbeth as king and Banquo as <strong>father of kings</strong>. When part comes true at once, Macbeth's mind turns to murder."],
      ["1.4","Duncan thanks Macbeth — then names <strong>Malcolm</strong> heir, placing an obstacle between Macbeth and the throne."],
      ["1.5","Lady Macbeth reads the letter and hardens herself, begging spirits to <strong>'unsex me here'</strong> and fill her with cruelty."],
      ["1.6","Duncan arrives at Inverness, greeted with warm hospitality — a mask over murder."],
      ["1.7","Macbeth hesitates, owning that only <strong>'vaulting ambition'</strong> drives him. Lady Macbeth attacks his manhood until he agrees."]
    ],
    themes:[
      ["Ambition","The spark of the whole tragedy. Macbeth admits he has <strong>no honest reason</strong> to kill Duncan — only ambition that <strong>'o'erleaps itself.'</strong>"],
      ["Fate vs. Free Will","The witches <strong>predict</strong>, they never <strong>command</strong>. Banquo hears the same words and does no wrong — proving the choice is Macbeth's alone."],
      ["Appearance vs. Reality","From the very first scene, foul and fair are tangled. Lady Macbeth teaches the art of the <strong>'innocent flower'</strong> hiding <strong>'the serpent under 't.'</strong>"]
    ],
    quotes:[
      ["Fair is foul, and foul is fair.","The Witches · 1.1",true],
      ["Look like th' innocent flower, but be the serpent under 't.","Lady Macbeth · 1.5",false],
      ["I have no spur to prick the sides of my intent, but only vaulting ambition.","Macbeth · 1.7",true]
    ],
    images:"A storm-lashed heath · three cowled silhouettes in mist · a golden crown on dark velvet · candlelit Inverness castle at dusk."
  },
  {
    num:"Act Two", title:"The Murder of Duncan", audio:"audio/act2.m4a",
    scenes:[
      ["2.1","A <strong>floating dagger</strong> leads Macbeth to Duncan's chamber — a vision of his own guilt and desire."],
      ["2.2","The deed is done offstage. A voice cries <strong>'Macbeth does murder sleep.'</strong> Lady Macbeth, steadier, returns the bloody daggers."],
      ["2.3","A drunken porter jokes about hell's gate; then Macduff finds the body. Macbeth kills the grooms; the princes flee for their lives."],
      ["2.4","Unnatural omens darken Scotland. Macbeth heads to be crowned — while <strong>Macduff stays wary and away</strong>."]
    ],
    themes:[
      ["Guilt & the Mind","Guilt strikes before and after the act — the phantom dagger, then Macbeth's certainty that <strong>all the ocean</strong> could not wash his hands clean."],
      ["Blood","Shakespeare's central image begins here. For Macbeth blood is <strong>indelible</strong>; for Lady Macbeth, naively, <strong>'a little water clears us.'</strong> The play will reverse them."],
      ["Nature Overturned","Killing an anointed king is a crime against the natural order — answered by storms, darkness at noon, and horses that eat each other."]
    ],
    quotes:[
      ["Is this a dagger which I see before me, the handle toward my hand?","Macbeth · 2.1",true],
      ["Will all great Neptune's ocean wash this blood clean from my hand?","Macbeth · 2.2",true],
      ["A little water clears us of this deed.","Lady Macbeth · 2.2",false]
    ],
    images:"A glowing dagger in shadow · blood-dark hands · a stone corridor by candle · a screeching owl against a stormy moon."
  },
  {
    num:"Act Three", title:"Paranoia & Banquo's Ghost", audio:"audio/act3.m4a",
    scenes:[
      ["3.1","Crowned but fearful, Macbeth broods on Banquo's prophecy and hires murderers to kill <strong>Banquo and Fleance</strong>."],
      ["3.2","Both Macbeths are gnawed by anxiety. Macbeth hints at <strong>'a deed of dreadful note,'</strong> keeping his wife 'innocent of the knowledge.'"],
      ["3.3","The murderers strike — but <strong>Fleance escapes</strong>, so Banquo's royal line lives on."],
      ["3.4","At the state banquet, <strong>Banquo's ghost</strong> appears to Macbeth alone. His terror nearly exposes him before the court."],
      ["3.5","Hecate rebukes the witches and plots to lure Macbeth to his ruin with false security. (Often cut.)"],
      ["3.6","Lennox and a lord speak in guarded suspicion; word comes that <strong>Macduff has gone to England</strong> to seek aid."]
    ],
    themes:[
      ["Paranoia & Tyranny","One murder demands the next. Macbeth confesses he is <strong>'in blood stepped in so far'</strong> that turning back is as hard as going on."],
      ["Guilt Made Visible","The ghost is guilt given a body — the one thing Macbeth cannot command or kill, unseen by everyone but him."],
      ["Fate's Defiance","Fleance's escape shows prophecy will <strong>not bend</strong> to Macbeth's will: he has murdered, yet secured nothing."]
    ],
    quotes:[
      ["Naught's had, all's spent, where our desire is got without content.","Lady Macbeth · 3.2",false],
      ["I am in blood stepped in so far that, should I wade no more, returning were as tedious as go o'er.","Macbeth · 3.4",true],
      ["Thou canst not say I did it; never shake thy gory locks at me.","Macbeth · 3.4",false]
    ],
    images:"A pale, bloodied ghost at a feast · an untouched throne · a boy running into darkness · a hooded assassin's blade."
  },
  {
    num:"Act Four", title:"Prophecies & Atrocity", audio:"audio/act4.m4a",
    scenes:[
      ["4.1","The witches conjure apparitions: <strong>beware Macduff</strong>; <strong>none of woman born</strong> can harm you; safe till <strong>Birnam Wood</strong> marches. Macbeth feels untouchable."],
      ["4.2","In cold blood, Macbeth's men murder <strong>Lady Macduff and her children</strong> — tyranny at its most monstrous."],
      ["4.3","In England, Malcolm tests Macduff, then allies with him. Macduff learns his family is slaughtered and vows revenge."]
    ],
    themes:[
      ["Equivocation","The prophecies are riddles that <strong>lie by telling the truth</strong>. Their comfort is a trap, and Macbeth reads only what he wants to hear."],
      ["Tyranny vs. Kingship","Against Macbeth's butchery, Malcolm lists the <strong>'king-becoming graces'</strong> — the play measures a true king against a tyrant."],
      ["Manhood, Redefined","Macduff answers grief not with cold 'manly' resolve but by vowing to <strong>'feel it as a man'</strong> — a rebuke to Lady Macbeth's earlier logic."]
    ],
    quotes:[
      ["By the pricking of my thumbs, something wicked this way comes.","Second Witch · 4.1",false],
      ["None of woman born shall harm Macbeth.","The Apparition · 4.1",true],
      ["I shall do so; but I must also feel it as a man.","Macduff · 4.3",false]
    ],
    images:"A bubbling cauldron ringed by apparitions · a marching, leaf-clad forest · a father crumpling in grief · a castle at Fife in flames."
  },
  {
    num:"Act Five", title:"Downfall & Restoration", audio:"audio/act5.m4a",
    scenes:[
      ["5.1","Lady Macbeth sleepwalks, scrubbing invisible blood — <strong>'Out, damned spot!'</strong> Her guilt has surfaced at last."],
      ["5.2–5.4","Scottish and English armies converge. Malcolm's soldiers hew <strong>branches from Birnam Wood</strong> for cover — the prophecy begins to bite."],
      ["5.5","News of the queen's death draws Macbeth's bleak <strong>'Tomorrow, and tomorrow'</strong> — life as <strong>'a tale told by an idiot… signifying nothing.'</strong> Then: the wood moves."],
      ["5.6–5.8","In battle Macbeth learns Macduff was <strong>'untimely ripped'</strong> from his mother — not truly 'of woman born.' Macduff slays him."],
      ["5.9","Malcolm is proclaimed <strong>King of Scotland</strong>; the natural order is restored."]
    ],
    themes:[
      ["The Return of Guilt","Lady Macbeth, once the ruthless one, is destroyed by the very guilt she dismissed — the water she trusted can no longer cleanse her."],
      ["The Emptiness of Power","At the summit of his ambition Macbeth finds only <strong>nihilism</strong>: a life that is 'sound and fury, signifying nothing.'"],
      ["Order Restored","Equivocation fulfilled, the tyrant falls and a <strong>lawful king</strong> rises — the disturbed natural order is mended."]
    ],
    quotes:[
      ["Out, damned spot! Out, I say!","Lady Macbeth · 5.1",false],
      ["Life's but a walking shadow… a tale told by an idiot, full of sound and fury, signifying nothing.","Macbeth · 5.5",true],
      ["Lay on, Macduff, and damned be him that first cries 'Hold, enough!'","Macbeth · 5.8",false]
    ],
    images:"A single candle and a sleepwalker washing her hands · soldiers behind leafy branches · two knights clashing at dawn · a new crown raised to the sky."
  }
];

/* ---------- FAQ ---------- */
const faqs = [
  ["Is Macbeth responsible for his actions, or is it fate?",
   "Both forces are present, but the play tilts toward <strong>free will</strong>. The witches only <em>predict</em>; they never force him to act. Crucially, <strong>Banquo</strong> hears an equally tempting prophecy and does nothing evil — showing the choice, and the guilt, are Macbeth's own."],
  ["What is the significance of blood imagery?",
   "Blood tracks the couple's <strong>guilt</strong>. After the murder Macbeth feels no ocean could wash his hands clean, while Lady Macbeth insists 'a little water clears us.' By Act 5 the roles <em>reverse</em>: she is the one unable to scrub the imagined stain away."],
  ["How does Lady Macbeth change over the play?",
   "She begins as the <strong>stronger will</strong>, goading Macbeth and suppressing her conscience. But she is gradually sidelined as Macbeth acts alone, and is finally consumed by the guilt she denied — sleepwalking, confessing, and dying (likely by suicide) offstage."],
  ["What does 'unsex me here' mean?",
   "In Act 1.5 Lady Macbeth asks spirits to strip her of <strong>femininity and pity</strong> so she can commit murder. It reflects the play's link between <em>violence and 'masculinity'</em> — and foreshadows how unnatural cruelty ultimately destroys her."],
  ["What role do the witches / the supernatural play?",
   "They are <strong>catalysts, not puppeteers</strong>. Their prophecies and apparitions ignite ambition and false confidence, blurring the line between real evil spirits and the characters' guilty imaginations (the dagger, the ghost)."],
  ["How does the play explore kingship vs. tyranny?",
   "Duncan and Malcolm embody <strong>legitimate, virtuous kingship</strong> (Malcolm's 'king-becoming graces'), while Macbeth rules through fear and murder. Restoring the rightful king restores order — reflecting the era's belief in a natural, God-given hierarchy."],
  ["What is dramatic irony in Macbeth?",
   "The audience often knows more than the characters. We know Duncan praises the castle where he'll be killed, and we understand the witches' promises are <strong>equivocations</strong> — riddles that come true in ways Macbeth never expects (Birnam Wood; 'not of woman born')."],
  ["Why is the 'Tomorrow and tomorrow' speech important?",
   "Spoken after his wife's death, it is Macbeth's moment of bleak clarity: life is meaningless, <em>'a tale told by an idiot… signifying nothing.'</em> It shows the total <strong>emptiness</strong> his ambition has led to — power won, meaning lost."],
  ["What are the major themes to revise?",
   "<strong>Ambition</strong>, <strong>fate vs. free will</strong>, <strong>guilt & conscience</strong>, <strong>the supernatural</strong>, <strong>appearance vs. reality</strong>, <strong>kingship vs. tyranny</strong>, <strong>manhood & violence</strong>, and <strong>the natural vs. unnatural order</strong>."],
  ["How does Shakespeare use the natural world?",
   "Nature <strong>mirrors moral order</strong>. Duncan's murder triggers storms, darkness by day and beasts turning wild — signalling that regicide has broken nature itself, which only heals when the rightful king is restored."]
];

/* =========================================================
   BUILD THE PAGE (no need to edit below)
   ========================================================= */

/* Characters */
const cg=document.getElementById("character-grid");
characters.forEach(c=>{
  const posStyle = c.pos ? `style="object-position:${c.pos}"` : "";
  cg.insertAdjacentHTML("beforeend",`
    <div class="char-card reveal-child">
      <div class="char-img-wrap">
        <img src="${c.img}" alt="${c.name}" ${posStyle} onerror="this.style.opacity=.15;this.alt='add ${c.img}';">
      </div>
      <div class="char-body">
        <h3>${c.name}</h3>
        <div class="role">${c.role}</div>
        <p>${c.desc}</p>
      </div>
    </div>`);
});

/* Allegiance */
const al=document.getElementById("allegiance");
factions.forEach(f=>{
  const people=f.people.map(p=>{
    const tag=p.note?`<span class="tag ${p.note}">${p.label}</span>`:"";
    return `<div class="person"><span>${p.name}</span>${tag}</div>`;
  }).join("");
  al.insertAdjacentHTML("beforeend",`<div class="faction ${f.side}"><h3>${f.title}</h3>${people}</div>`);
});

/* Timeline */
const tt=document.getElementById("timeline-track");
timeline.forEach(e=>{
  tt.insertAdjacentHTML("beforeend",`
    <div class="event">
      <div class="node"></div>
      <div class="event-card"><span class="when">${e.when}</span><p>${e.text}</p></div>
    </div>`);
});

/* Acts */
const ac=document.getElementById("acts-container");
acts.forEach((a,i)=>{
  const scenes=a.scenes.map(s=>`<div class="scene"><span class="sc-num">${s[0]}</span><p>${s[1]}</p></div>`).join("");
  const themes=a.themes.map(t=>`<div class="theme-block"><span class="theme-name">◆ ${t[0]}</span><p>${t[1]}</p></div>`).join("");
  const quotes=a.quotes.map(q=>`<div class="quote ${q[2]?'key-quote':''}">${q[0]}<span class="attr">— ${q[1]}</span></div>`).join("");
  ac.insertAdjacentHTML("beforeend",`
    <div class="act">
      <div class="act-banner">
        <div class="act-num">${a.num}</div>
        <h3>${a.title}</h3>
      </div>
      <div class="act-body">
        <div class="voice-box">
          <span class="vb-title">🎧 Listen — ${a.num}</span>
          <p class="vb-hint">Prefer to listen? Press play for a narrated summary of this act.</p>
          <audio controls preload="none" src="${a.audio}">Your browser can't play this audio.</audio>
        </div>
        <h4>Scene Breakdown</h4>${scenes}
        <h4>Themes at Work</h4>${themes}
        <h4>Key Quotes</h4>${quotes}
        <h4>Image Ideas</h4>
        <div class="image-ideas"><strong>Suggested visuals:</strong> ${a.images}</div>
      </div>
    </div>`);
});

/* FAQ */
const fc=document.getElementById("faq-container");
faqs.forEach((f,i)=>{
  fc.insertAdjacentHTML("beforeend",`
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(${i})">${f[0]}</button>
      <div class="faq-a"><p>${f[1]}</p></div>
    </div>`);
});
function toggleFaq(i){
  document.querySelectorAll(".faq-item")[i].classList.toggle("open");
}

/* ---------- DOT NAV ---------- */
const navMap=[["overview","Story"],["characters","Characters"],["treemap","Allegiances"],
  ["timeline","Timeline"],["acts","The Acts"],["faq","FAQ"]];
const dn=document.getElementById("dot-nav");
navMap.forEach(([id,label])=>{
  dn.insertAdjacentHTML("beforeend",`<a href="#${id}" data-id="${id}"><span>${label}</span></a>`);
});

/* ---------- SCROLL REVEAL (IntersectionObserver) ---------- */
const io=new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting){en.target.classList.add("visible");} });
},{threshold:0.15});
function observeAll(sel){document.querySelectorAll(sel).forEach(el=>io.observe(el));}
observeAll(".reveal");
observeAll(".char-card");
observeAll(".event");
observeAll(".act");

/* stagger character cards a touch */
document.querySelectorAll(".char-card").forEach((c,i)=>{c.style.transitionDelay=(i%4*0.08)+"s";});

/* ---------- PROGRESS BAR + TIMELINE FILL + ACTIVE DOT ---------- */
const bar=document.getElementById("progress-bar");
const tl=document.getElementById("timeline-track");
const sections=navMap.map(n=>document.getElementById(n[0]));
const dots=[...document.querySelectorAll("#dot-nav a")];

function onScroll(){
  const h=document.documentElement;
  const scrolled=h.scrollTop/(h.scrollHeight-h.clientHeight);
  bar.style.width=(scrolled*100)+"%";

  // timeline glowing fill
  if(tl){
    const r=tl.getBoundingClientRect();
    const vh=window.innerHeight;
    let p=(vh*0.6 - r.top)/r.height*100;
    p=Math.max(0,Math.min(100,p));
    tl.style.setProperty("--tl-progress",p+"%");
  }

  // active nav dot
  let current=0;
  sections.forEach((s,idx)=>{ if(s && s.getBoundingClientRect().top<=window.innerHeight*0.4) current=idx; });
  dots.forEach((d,idx)=>d.classList.toggle("active",idx===current));
}
window.addEventListener("scroll",onScroll,{passive:true});
onScroll();