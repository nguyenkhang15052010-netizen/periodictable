const CONFIG = {
    quizSeconds: 12,
    scorePerRegion: 100,
    colors: ["#00d9ff", "#ff4f87", "#ffc83d", "#8b7cff"],
    botAccuracy: { easy: 0.58, medium: 0.76, hard: 0.9 },
    botSpeed: { easy: [5.8, 10], medium: [3.3, 7.2], hard: [1.7, 4.6] }
};

const HEX_SHAPE = "polygon(25% 3%,75% 3%,100% 50%,75% 97%,25% 97%,0 50%)";
const REGION_SEEDS = [
    ["crystal-bay","Vịnh Tinh Thể",0,0,18,12],["salt-steppe","Thảo Nguyên Muối",1,0,30,12],["ember-ridge","Sườn Lửa",2,0,42,12],["cloud-highland","Cao Nguyên Mây",3,0,54,12],["storm-peak","Đỉnh Bão",4,0,66,12],
    ["obsidian-coast","Bờ Obsidian",0,1,12,22],["copper-plain","Đồng Bằng Đồng",1,1,24,22],["mercury-marsh","Đầm Thủy Ngân",2,1,36,22],["sulfur-field","Cánh Đồng Lưu Huỳnh",3,1,48,22],["cobalt-wood","Rừng Cobalt",4,1,60,22],["neon-delta","Châu Thổ Neon",5,1,72,22],
    ["iron-gate","Cổng Sắt",0,2,18,32],["carbon-grove","Rừng Carbon",1,2,30,32],["silicon-basin","Bồn Địa Silicon",2,2,42,32],["oxygen-lake","Hồ Oxy",3,2,54,32],["argon-pass","Đèo Argon",4,2,66,32],
    ["sodium-flats","Bãi Natri",0,3,12,42],["chlorine-fen","Đầm Clo",1,3,24,42],["calcium-hold","Pháo Đài Canxi",2,3,36,42],["nickel-yard","Xưởng Nickel",3,3,48,42],["zinc-harbor","Cảng Kẽm",4,3,60,42],["silver-isle","Đảo Bạc",5,3,72,42],
    ["gold-crown","Vương Miện Vàng",0,4,18,52],["radium-crater","Miệng Núi Radium",1,4,30,52],["uranium-core","Lõi Uranium",2,4,42,52],["helium-spire","Tháp Helium",3,4,54,52],["lithium-reef","Rạn Lithium",4,4,66,52],
    ["boron-cape","Mũi Boron",1,5,24,62],["phosphor-vale","Thung Lũng Phosphor",2,5,36,62],["titan-fort","Pháo Đài Titan",3,5,48,62],["quartz-shore","Bờ Thạch Anh",4,5,60,62],
    ["aurora-isle","Đảo Cực Quang",-1,2,5,33],["plasma-reef","Rạn Plasma",6,2,84,34],["selenium-key","Đảo Selenium",5,5,72,64],["radon-atoll","Vành Đai Radon",2,6,42,75]
];

const REGIONS = REGION_SEEDS.map(([id,name,col,row,x,y]) => ({
    id,name,col,row,x,y,w:10,h:12,shape:HEX_SHAPE,owner:null,baseOwner:null,baseHp:0
}));

const LINKS = [];
const addLink = (a,b) => { if(regionSeed(a)&&regionSeed(b)) LINKS.push([a,b]); };
function regionSeed(id){ return REGION_SEEDS.find(r=>r[0]===id); }
function connectHexMap(){
    const byCoord = new Map(REGION_SEEDS.map(([id,,col,row]) => [`${col},${row}`,id]));
    REGION_SEEDS.forEach(([id,,col,row]) => {
        [[1,0],[0,1],[-1,1]].forEach(([dc,dr]) => {
            const next = byCoord.get(`${col+dc},${row+dr}`);
            if(next) LINKS.push([id,next]);
        });
    });
    addLink("aurora-isle","obsidian-coast"); addLink("aurora-isle","iron-gate");
    addLink("plasma-reef","neon-delta"); addLink("plasma-reef","silver-isle");
    addLink("selenium-key","quartz-shore"); addLink("selenium-key","lithium-reef");
    addLink("radon-atoll","phosphor-vale"); addLink("radon-atoll","titan-fort");
}
connectHexMap();

const FALLBACK = [
    {number:1,symbol:"H",name:"Hydrogen",period:1,group:1,mass:1.008},{number:2,symbol:"He",name:"Helium",period:1,group:18,mass:4.003},
    {number:6,symbol:"C",name:"Carbon",period:2,group:14,mass:12.01},{number:8,symbol:"O",name:"Oxygen",period:2,group:16,mass:16},
    {number:11,symbol:"Na",name:"Sodium",period:3,group:1,mass:22.99},{number:17,symbol:"Cl",name:"Chlorine",period:3,group:17,mass:35.45},
    {number:26,symbol:"Fe",name:"Iron",period:4,group:8,mass:55.85},{number:29,symbol:"Cu",name:"Copper",period:4,group:11,mass:63.55},
    {number:47,symbol:"Ag",name:"Silver",period:5,group:11,mass:107.87},{number:79,symbol:"Au",name:"Gold",period:6,group:11,mass:196.97}
];

const state = { mode:"bot",difficulty:"easy",durationSeconds:300,timeLeft:300,players:[],turn:1,busy:false,ended:false,target:null,quiz:null,timer:null,matchTimer:null,lobbyTimers:[],stats:{captured:0,correct:0,duels:0,bases:0} };
const $ = id => document.getElementById(id);
const screens = { setup:$("setupScreen"),config:$("configScreen"),lobby:$("lobbyScreen"),game:$("gameScreen") };
const neighbors = id => LINKS.filter(x=>x.includes(id)).map(x=>x[0]===id?x[1]:x[0]);
const region = id => REGIONS.find(r=>r.id===id);
const random = list => list[Math.floor(Math.random()*list.length)];
const shuffle = list => list.slice().sort(()=>Math.random()-.5);

function showScreen(name){ Object.entries(screens).forEach(([key,node])=>node.classList.toggle("hidden",key!==name)); }
function currentName(){ const u=window.AuthState?.getStoredUser?.(); return u?.username||"Bạn"; }
function elementPool(){ return typeof elements!=="undefined"&&elements.length?elements.filter(e=>e.number&&e.symbol&&e.name):FALLBACK; }
function addFeed(text,type=""){ const item=document.createElement("div"); item.className=`feed-item ${type}`; item.innerHTML=text; $("activityFeed").prepend(item); while($("activityFeed").children.length>12) $("activityFeed").lastChild.remove(); }
function createParticles(){ const box=$("particles"); if(!box||box.dataset.ready)return; box.dataset.ready="1"; for(let i=0;i<22;i++){const p=document.createElement("div");p.className="particle";p.style.left=`${Math.random()*100}%`;p.style.animationDelay=`${Math.random()*12}s`;p.style.background=random(CONFIG.colors);box.appendChild(p);} }

function initPlayers(){
    const names=state.mode==="people"?[currentName(),"Minh Anh","Quang Huy","Bảo Trân"]:[currentName(),"AI Natri","AI Oxi","AI Neon"];
    state.players=names.map((name,id)=>({id,name,color:CONFIG.colors[id],alive:true,isHuman:id===0,baseRegion:null,score:0}));
}

function resetMap(){
    REGIONS.forEach(r=>Object.assign(r,{owner:null,baseOwner:null,baseHp:0}));
    const basePool=shuffle(["crystal-bay","storm-peak","aurora-isle","plasma-reef","gold-crown","lithium-reef","boron-cape","selenium-key","radon-atoll"]);
    state.players.forEach((p,i)=>{const r=region(basePool[i]);r.owner=p.id;r.baseOwner=p.id;r.baseHp=2;p.baseRegion=r.id;});
}

function startGame(){
    clearLobby(); clearInterval(state.matchTimer); initPlayers(); resetMap(); state.turn=1;state.busy=false;state.ended=false;state.timeLeft=state.durationSeconds;state.stats={captured:0,correct:0,duels:0,bases:0};
    $("activityFeed").innerHTML=""; $("matchLabel").textContent=(state.mode==="people"?"Đấu với người · ":"Đấu với máy · ")+({easy:"Dễ",medium:"Trung bình",hard:"Khó"}[state.difficulty]);
    showScreen("game"); addFeed(`<strong>${currentName()}</strong> đã dựng căn cứ tại ${region(state.players[0].baseRegion).name}.`,"good"); renderAll(); startMatchTimer();
}

function formatTime(seconds){ const m=Math.floor(Math.max(0,seconds)/60);const s=Math.max(0,seconds)%60;return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`; }
function renderAll(){ renderMap();renderPlayers();$("turnNumber").textContent=state.turn; $("matchClock").textContent=formatTime(state.timeLeft); const alive=state.players.filter(p=>p.alive).length;$("aliveCount").textContent=`${alive} còn lại`;$("missionProgress").style.width=`${state.stats.bases/3*100}%`; }
function startMatchTimer(){
    $("matchClock").textContent=formatTime(state.timeLeft);
    state.matchTimer=setInterval(()=>{ if(state.ended)return; state.timeLeft--; $("matchClock").textContent=formatTime(state.timeLeft); if(state.timeLeft<=0)endByTime(); },1000);
}
function isAttackable(r,playerId=0){ return state.players[playerId]?.alive && r.owner!==playerId && neighbors(r.id).some(id=>region(id).owner===playerId); }
function awardRegion(playerId,count=1){ const player=state.players[playerId]; if(!player)return; player.score+=CONFIG.scorePerRegion*count; if(playerId===0)state.stats.captured+=count; }
function castleMarkup(r){
    if(r.baseOwner===null)return "";
    const hpText = "♥".repeat(r.baseHp);
    return `<span class="region-castle" title="Trụ sở chính còn ${r.baseHp} điểm"><span class="castle-roof"></span><span class="castle-body"><i></i><b></b><i></i></span><span class="castle-hp">${hpText}</span></span>`;
}
function renderMap(){
    const map=$("worldMap");map.innerHTML="";
    REGIONS.forEach(r=>{const b=document.createElement("button");b.type="button";b.className="region";b.style.left=`${r.x}%`;b.style.top=`${r.y}%`;b.style.width=`${r.w}%`;b.style.height=`${r.h}%`;b.style.clipPath=r.shape;b.style.background=r.owner===null?"var(--neutral)":state.players[r.owner].color;b.classList.toggle("attackable",!state.busy&&isAttackable(r));b.classList.toggle("disabled",state.busy||!isAttackable(r));b.classList.toggle("damage",r.baseOwner!==null&&r.baseHp===1);b.classList.toggle("has-castle",r.baseOwner!==null);b.innerHTML=`<span class="region-owner">${r.owner===null?"Tự do":state.players[r.owner].name}</span>${castleMarkup(r)}<span class="region-name">${r.name}</span>`;b.addEventListener("click",()=>selectRegion(r));map.appendChild(b);});
}
function renderPlayers(){
    $("playerList").innerHTML=state.players.map(p=>{const count=REGIONS.filter(r=>r.owner===p.id).length;const base=region(p.baseRegion);return `<div class="player-row ${p.isHuman?"you":""} ${p.alive?"":"eliminated"}"><span class="player-avatar" style="background:${p.color}">${p.name[0].toUpperCase()}</span><span class="player-copy"><strong>${p.name}${p.isHuman?" (Bạn)":""}</strong><span>${p.alive?count+" vùng":"Đã bị loại"}</span></span><span class="player-meta"><span class="score-pill">${p.score}đ</span><span class="base-health">${p.alive?"♥".repeat(base?.baseHp||0):"✕"}</span></span></div>`}).join("");
}

function selectRegion(r){
    if(state.busy)return;
    if(!isAttackable(r)){ setStatus("Không thể tấn công","Hãy chọn vùng nằm cạnh lãnh thổ của bạn.");return; }
    state.target=r; openQuiz(r,0);
}
function setStatus(title,text){$("statusTitle").textContent=title;$("statusText").textContent=text;}

function makeQuestion(){
    const pool=elementPool();
    const nameOf=e=>e.name;
    const appText=e=>e.fact||`${nameOf(e)} được sử dụng trong nhiều lĩnh vực thực tế.`;
    const options=(answer,values)=>shuffle([answer,...Array.from(new Set(values.map(String).filter(v=>v!==String(answer)))).slice(0,3)]);
    const appPool=pool.filter(e=>e.fact&&e.fact.length>20);
    const candidates=appPool.length>=4?appPool:pool;

    if(state.difficulty==="easy"){
        const first20=candidates.filter(e=>e.number>=1&&e.number<=20);
        const easyPool=first20.length>=4?first20:candidates;
        const e=random(easyPool);const answer=nameOf(e);
        return {text:`Ứng dụng thực tế sau là của nguyên tố nào: "${appText(e)}"`,answer,kind:"Dễ · Ứng dụng nguyên tố 1-20",options:options(answer,easyPool.filter(x=>x!==e).map(nameOf))};
    }

    if(state.difficulty==="medium"){
        const e=random(candidates);const answer=nameOf(e);
        return {text:`Ứng dụng hoặc mô tả thực tế sau nói về nguyên tố nào: "${appText(e)}"`,answer,kind:"Trung bình · Ứng dụng nguyên tố",options:options(answer,candidates.filter(x=>x!==e).map(nameOf))};
    }

    const target=random(candidates);const answer=nameOf(target);
    const hardDistractors=shuffle(candidates.filter(x=>x!==target)).map(nameOf);
    return {text:`Dựa vào ứng dụng thực tế này, hãy chọn đúng nguyên tố: "${appText(target)}"`,answer,kind:"Khó · Ứng dụng thực tế",options:options(answer,hardDistractors)};
}

function openQuiz(target,attackerId){
    state.busy=true;renderMap();const defenderId=target.owner;const duel=defenderId!==null&&defenderId!==attackerId;
    state.quiz={question:makeQuestion(),target,attackerId,defenderId,duel,start:performance.now(),answered:false};
    $("quizMode").textContent=duel?(target.baseOwner===defenderId?"Tấn công căn cứ":"Tranh chấp lãnh thổ"):"Chinh phục vùng tự do";$("targetName").textContent=target.name;$("questionKind").textContent=state.quiz.question.kind;$("quizHint").textContent=duel?"Trả lời đúng và nhanh hơn đối thủ":"Chọn một đáp án đúng";$("quizQuestion").textContent=state.quiz.question.text;$("quizFeedback").textContent="";$("quizFeedback").className="quiz-feedback";
    $("duelVersus").classList.toggle("hidden",!duel);if(duel)$("duelVersus").innerHTML=`<div class="duelist">${state.players[attackerId].name}</div><b>VS</b><div class="duelist">${state.players[defenderId].name}</div>`;
    $("answerGrid").innerHTML=state.quiz.question.options.map(o=>`<button class="answer-btn" type="button" data-answer="${o.replaceAll('"','&quot;')}">${o}</button>`).join("");
    $("answerGrid").querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>answerQuiz(b.dataset.answer,b)));
    $("quizModal").classList.remove("hidden");startQuizTimer();
}
function startQuizTimer(){
    clearInterval(state.timer);const tick=()=>{if(!state.quiz||state.quiz.answered)return;const left=Math.max(0,CONFIG.quizSeconds-(performance.now()-state.quiz.start)/1000);$("quizTimer").textContent=left.toFixed(1);if(left<=0)finishQuiz(false,null,CONFIG.quizSeconds);};tick();state.timer=setInterval(tick,50);
}
function answerQuiz(answer,button){if(!state.quiz||state.quiz.answered)return;const elapsed=(performance.now()-state.quiz.start)/1000;const correct=answer===state.quiz.question.answer;button.classList.add(correct?"correct":"wrong");finishQuiz(correct,button,elapsed);}
function finishQuiz(correct,button,elapsed){
    const q=state.quiz;if(!q||q.answered)return;q.answered=true;clearInterval(state.timer);$("answerGrid").querySelectorAll("button").forEach(b=>{b.disabled=true;if(b.dataset.answer===q.question.answer)b.classList.add("correct");});
    let success=correct;let message=correct?"Chính xác!":"Chưa chính xác.";
    if(q.attackerId===0&&correct)state.stats.correct++;
    if(q.duel){
        if(q.attackerId===0)state.stats.duels++;
        const botId=q.attackerId===0?q.defenderId:q.attackerId;const bot=botPerformance(botId);success=correct&&(!bot.correct||elapsed<bot.time);message=success?`Bạn thắng cuộc đua trong ${elapsed.toFixed(1)} giây!`:(!correct?"Sai đáp án, đối thủ giữ được vùng đất.":`Đối thủ nhanh hơn (${bot.time.toFixed(1)} giây).`);
    }
    $("quizFeedback").textContent=message;$("quizFeedback").className=`quiz-feedback ${success?"good":"bad"}`;
    setTimeout(()=>{closeQuiz();resolveAttack(q,success);},1250);
}
function botPerformance(){const acc=CONFIG.botAccuracy[state.difficulty]-(state.mode==="people"?.04:0);const range=CONFIG.botSpeed[state.difficulty];return {correct:Math.random()<acc,time:range[0]+Math.random()*(range[1]-range[0])};}
function closeQuiz(){clearInterval(state.timer);$("quizModal").classList.add("hidden");state.quiz=null;}

function resolveAttack(q,success){
    if(state.ended)return;
    const attacker=state.players[q.attackerId],target=q.target;
    if(success){
        if(q.duel&&target.baseOwner===q.defenderId){target.baseHp--;addFeed(`<strong>${attacker.name}</strong> gây sát thương căn cứ ${state.players[q.defenderId].name}!`,"danger");if(target.baseHp<=0)eliminatePlayer(q.defenderId,q.attackerId);}
        else {target.owner=q.attackerId;awardRegion(q.attackerId);addFeed(`<strong>${attacker.name}</strong> chiếm ${target.name} và nhận ${CONFIG.scorePerRegion} điểm.`,q.attackerId===0?"good":"");}
    } else addFeed(`<strong>${attacker.name}</strong> thất bại tại ${target.name}.`);
    if(checkEnd())return;
    if(q.attackerId===0){runBotTurns();}else{state.busy=false;renderAll();setStatus("Lượt của bạn","Chọn một vùng sáng để tiếp tục chinh phục.");}
}
function eliminatePlayer(loserId,winnerId){
    const loser=state.players[loserId];loser.alive=false;REGIONS.filter(r=>r.owner===loserId).forEach(r=>{r.owner=winnerId;r.baseOwner=null;r.baseHp=0;awardRegion(winnerId);});
    if(winnerId===0)state.stats.bases++;addFeed(`<strong>${loser.name}</strong> đã mất căn cứ và bị loại!`,"danger");
}
function runBotTurns(){
    const bots=state.players.filter(p=>p.alive&&!p.isHuman);let index=0;const next=()=>{if(state.ended)return;if(index>=bots.length){state.turn++;state.busy=false;renderAll();setStatus("Lượt của bạn","Chọn một vùng sáng để tiếp tục chinh phục.");return;}const bot=bots[index++];setTimeout(()=>{botTurn(bot.id);renderAll();if(checkEnd())return;next();},500);};next();
}
function botTurn(id){
    if(state.ended)return;
    const options=REGIONS.filter(r=>isAttackable(r,id));if(!options.length)return;const bases=options.filter(r=>r.baseOwner!==null);const target=bases.length&&Math.random()<.7?random(bases):random(options);const defender=target.owner;const correct=Math.random()<CONFIG.botAccuracy[state.difficulty];if(!correct){addFeed(`<strong>${state.players[id].name}</strong> trả lời sai tại ${target.name}.`);return;}
    if(defender===null){target.owner=id;awardRegion(id);addFeed(`<strong>${state.players[id].name}</strong> chiếm ${target.name} và nhận ${CONFIG.scorePerRegion} điểm.`);return;}
    const attack=botPerformance(id),defend=defender===0?{correct:true,time:3.8+Math.random()*4}:{...botPerformance(defender)};if(!attack.correct||(defend.correct&&attack.time>=defend.time)){addFeed(`<strong>${state.players[defender].name}</strong> bảo vệ ${target.name}.`);return;}
    if(target.baseOwner===defender){target.baseHp--;addFeed(`<strong>${state.players[id].name}</strong> đánh trúng căn cứ ${state.players[defender].name}!`,"danger");if(target.baseHp<=0)eliminatePlayer(defender,id);}else{target.owner=id;awardRegion(id);addFeed(`<strong>${state.players[id].name}</strong> chiếm ${target.name} và nhận ${CONFIG.scorePerRegion} điểm.`);}
}
function checkEnd(){
    if(state.ended)return true;
    const human=state.players[0],alive=state.players.filter(p=>p.alive);if(human.alive&&alive.length>1)return false;
    const won=human.alive&&alive.length===1;
    finishMatch(won,won?"Bạn đã phá hủy toàn bộ căn cứ đối thủ.":`${alive[0]?.name||"Đối thủ"} là người sống sót cuối cùng.`);
    return true;
}
function rankedPlayers(){
    return state.players.slice().sort((a,b)=>{
        const regionDiff=REGIONS.filter(r=>r.owner===b.id).length-REGIONS.filter(r=>r.owner===a.id).length;
        return regionDiff||b.score-a.score;
    });
}
function endByTime(){
    if(state.ended)return;
    closeQuiz();const winner=rankedPlayers()[0];const won=winner.id===0;
    finishMatch(won,`Hết thời gian. ${winner.name} dẫn đầu với ${REGIONS.filter(r=>r.owner===winner.id).length} vùng đất.`);
}
function finishMatch(won,text){
    state.ended=true;state.busy=true;clearInterval(state.matchTimer);clearInterval(state.timer);renderAll();
    const humanRegions=REGIONS.filter(r=>r.owner===0).length;
    $("resultIcon").textContent=won?"🏆":"⚑";$("resultTitle").textContent=won?"Bạn đã chiến thắng!":"Bạn chưa giành được chiến thắng";$("resultText").textContent=text;
    $("resultStats").innerHTML=`<div class="result-stat"><strong>${humanRegions}</strong><span>Vùng đang giữ</span></div><div class="result-stat"><strong>${state.players[0].score}</strong><span>Điểm của bạn</span></div><div class="result-stat"><strong>${formatTime(state.durationSeconds-state.timeLeft)}</strong><span>Thời gian đã chơi</span></div>`;setTimeout(()=>$("resultModal").classList.remove("hidden"),700);
}

function clearLobby(){state.lobbyTimers.forEach(clearTimeout);state.lobbyTimers=[];}
function startConfiguredMatch(){ state.mode==="people"?startPeopleLobby():startGame(); }
function startPeopleLobby(){state.mode="people";showScreen("lobby");const names=[currentName(),"Minh Anh","Quang Huy","Bảo Trân"];$("lobbyList").innerHTML="";names.forEach((name,i)=>{const t=setTimeout(()=>{$("lobbyList").insertAdjacentHTML("beforeend",`<div class="lobby-player"><span class="lobby-avatar" style="background:${CONFIG.colors[i]}">${name[0]}</span><strong>${name}</strong><span>Sẵn sàng</span></div>`);$("lobbyStatus").textContent=`${i+1}/4 người chơi`;if(i===3)state.lobbyTimers.push(setTimeout(startGame,700));},i*700);state.lobbyTimers.push(t);});}
function openConfig(){ $("resultModal").classList.add("hidden"); showScreen("config"); }
function returnSetup(){clearLobby();clearInterval(state.timer);clearInterval(state.matchTimer);state.ended=true;$("resultModal").classList.add("hidden");showScreen("setup");}

document.addEventListener("DOMContentLoaded",()=>{
    createParticles();$("openConfigBtn")?.addEventListener("click",openConfig);$("startMatchBtn")?.addEventListener("click",startConfiguredMatch);$("backToSetupBtn")?.addEventListener("click",returnSetup);$("cancelLobbyBtn")?.addEventListener("click",returnSetup);
    document.querySelectorAll("#modePicker .segment").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("#modePicker .segment").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.mode=b.dataset.mode;}));
    document.querySelectorAll("#difficultyPicker .segment").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("#difficultyPicker .segment").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.difficulty=b.dataset.difficulty;}));
    document.querySelectorAll("#durationPicker .segment").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("#durationPicker .segment").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.durationSeconds=Number(b.dataset.duration);state.timeLeft=state.durationSeconds;}));
    $("helpBtn").addEventListener("click",()=>$("rulesModal").classList.remove("hidden"));$("closeRulesBtn").addEventListener("click",()=>$("rulesModal").classList.add("hidden"));$("playAgainBtn").addEventListener("click",()=>{$("resultModal").classList.add("hidden");startGame();});$("exitBtn").addEventListener("click",returnSetup);
});
