/* staristic platform */ 
//circles
const PersonalC = document.querySelector('.personal-progress__circle');
const ProC = document.querySelector('.pro-progress__circle');
const TeamC = document.querySelector('.team-progress__circle');
//radius
const PersonalR = PersonalC.r.baseVal.value;
const ProR = ProC.r.baseVal.value;
const TeamR = TeamC.r.baseVal.value;
//percent value
const PersonalP = document.querySelector('.personal-progress__percent');
const ProP = document.querySelector('.pro-progress__percent');
const TeamP = document.querySelector('.team-progress__percent');
//circumference
const PersonalCF = 2 * Math.PI * PersonalR;
const ProCF = 2 * Math.PI * ProR;
const TeamCF = 2 * Math.PI * TeamR;

//stroke dashes
//personal
PersonalC.style.strokeDasharray = `${PersonalCF} ${PersonalCF}`;
PersonalC.style.strokeDashoffset = PersonalCF;
PersonalC.style.transformOrigin = "center";
PersonalC.style.transform = "rotate(-90deg)"; 
//pro
ProC.style.strokeDasharray = `${ProCF} ${ProCF}`;
ProC.style.strokeDashoffset = ProCF;
ProC.style.transformOrigin = "center";
ProC.style.transform = "rotate(-90deg)";  
//team
TeamC.style.strokeDasharray = `${TeamCF} ${TeamCF}`;
TeamC.style.strokeDashoffset = TeamCF;
TeamC.style.transformOrigin = "center";
TeamC.style.transform = "rotate(-90deg)";  

//percents
function statisticProgress(percentPer, percentPro, percentTeam){
  const PersonalO = PersonalCF - percentPer / 100 * PersonalCF;
  PersonalC.style.strokeDashoffset = PersonalO;

  const ProO = ProCF - percentPro / 100 * ProCF;
  ProC.style.strokeDashoffset = ProO;

  const TeamO = TeamCF - percentTeam / 100 * TeamCF;
  TeamC.style.strokeDashoffset = TeamO;
};

let PersonalV = parseInt(PersonalP.textContent.slice(0,-1));
let ProV = parseInt(ProP.textContent.slice(0,-1));
let TeamV = parseInt(TeamP.textContent.slice(0,-1));

statisticProgress(PersonalV,ProV,TeamV);

/*finance tab platform statistic */
//circles
const fPersonalC = document.querySelector('.f-personal-progress__circle');
const fProC = document.querySelector('.f-pro-progress__circle');
const fTeamC = document.querySelector('.f-team-progress__circle');
//radius
const fPersonalR = fPersonalC.r.baseVal.value;
const fProR = fProC.r.baseVal.value;
const fTeamR = fTeamC.r.baseVal.value;
//percent value
const fPersonalP = document.querySelector('.f-personal-progress__percent');
const fProP = document.querySelector('.f-pro-progress__percent');
const fTeamP = document.querySelector('.f-team-progress__percent');
//circumference
const fPersonalCF = 2 * Math.PI * fPersonalR;
const fProCF = 2 * Math.PI * fProR;
const fTeamCF = 2 * Math.PI * fTeamR;

//stroke dashes
//personal
fPersonalC.style.strokeDasharray = `${fPersonalCF} ${fPersonalCF}`;
fPersonalC.style.strokeDashoffset = fPersonalCF;
fPersonalC.style.transformOrigin = "center";
fPersonalC.style.transform = "rotate(-90deg)"; 
//pro
fProC.style.strokeDasharray = `${fProCF} ${fProCF}`;
fProC.style.strokeDashoffset = fProCF;
fProC.style.transformOrigin = "center";
fProC.style.transform = "rotate(-90deg)";  
//team
fTeamC.style.strokeDasharray = `${fTeamCF} ${fTeamCF}`;
fTeamC.style.strokeDashoffset = fTeamCF;
fTeamC.style.transformOrigin = "center";
fTeamC.style.transform = "rotate(-90deg)";  

//percents
function financeProgress(percentPer, percentPro, percentTeam){
  const fPersonalO = fPersonalCF - percentPer / 100 * fPersonalCF;
  fPersonalC.style.strokeDashoffset = fPersonalO;

  const fProO = fProCF - percentPro / 100 * fProCF;
  fProC.style.strokeDashoffset = fProO;

  const fTeamO = fTeamCF - percentTeam / 100 * fTeamCF;
  fTeamC.style.strokeDashoffset = fTeamO;
};

let fPersonalV = parseInt(fPersonalP.textContent.slice(0,-1));
let fProV = parseInt(fProP.textContent.slice(0,-1));
let fTeamV = parseInt(fTeamP.textContent.slice(0,-1));

financeProgress(fPersonalV,fProV,fTeamV);

/* invite tab platform statistic */ 
//circles
const iPersonalC = document.querySelector('.i-personal-progress__circle');
const iProC = document.querySelector('.i-pro-progress__circle');
const iTeamC = document.querySelector('.i-team-progress__circle');
//radius
const iPersonalR = iPersonalC.r.baseVal.value;
const iProR = iProC.r.baseVal.value;
const iTeamR = iTeamC.r.baseVal.value;
//percent value
const iPersonalP = document.querySelector('.i-personal-progress__percent');
const iProP = document.querySelector('.i-pro-progress__percent');
const iTeamP = document.querySelector('.i-team-progress__percent');
//circumference
const iPersonalCF = 2 * Math.PI * iPersonalR;
const iProCF = 2 * Math.PI * iProR;
const iTeamCF = 2 * Math.PI * iTeamR;

//stroke dashes
//personal
iPersonalC.style.strokeDasharray = `${iPersonalCF} ${iPersonalCF}`;
iPersonalC.style.strokeDashoffset = iPersonalCF;
iPersonalC.style.transformOrigin = "center";
iPersonalC.style.transform = "rotate(-90deg)"; 
//pro
iProC.style.strokeDasharray = `${iProCF} ${iProCF}`;
iProC.style.strokeDashoffset = iProCF;
iProC.style.transformOrigin = "center";
iProC.style.transform = "rotate(-90deg)";  
//team
iTeamC.style.strokeDasharray = `${iTeamCF} ${iTeamCF}`;
iTeamC.style.strokeDashoffset = iTeamCF;
iTeamC.style.transformOrigin = "center";
iTeamC.style.transform = "rotate(-90deg)";  

//percents
function inviteProgress(percentPer, percentPro, percentTeam){
  const iPersonalO = iPersonalCF - percentPer / 100 * iPersonalCF;
  iPersonalC.style.strokeDashoffset = iPersonalO;

  const iProO = iProCF - percentPro / 100 * iProCF;
  iProC.style.strokeDashoffset = iProO;

  const iTeamO = iTeamCF - percentTeam / 100 * iTeamCF;
  iTeamC.style.strokeDashoffset = iTeamO;
};

let iPersonalV = parseInt(iPersonalP.textContent.slice(0,-1));
let iProV = parseInt(iProP.textContent.slice(0,-1));
let iTeamV = parseInt(iTeamP.textContent.slice(0,-1));

inviteProgress(iPersonalV,iProV,iTeamV);


/* platform tab platform statistic */ 
//circles
const pPersonalC = document.querySelector('.p-personal-progress__circle');
const pProC = document.querySelector('.p-pro-progress__circle');
const pTeamC = document.querySelector('.p-team-progress__circle');
//radius
const pPersonalR = pPersonalC.r.baseVal.value;
const pProR = pProC.r.baseVal.value;
const pTeamR = pTeamC.r.baseVal.value;
//percent value
const pPersonalP = document.querySelector('.p-personal-progress__percent');
const pProP = document.querySelector('.p-pro-progress__percent');
const pTeamP = document.querySelector('.p-team-progress__percent');
//circumference
const pPersonalCF = 2 * Math.PI * pPersonalR;
const pProCF = 2 * Math.PI * pProR;
const pTeamCF = 2 * Math.PI * pTeamR;

//stroke dashes
//personal
pPersonalC.style.strokeDasharray = `${pPersonalCF} ${pPersonalCF}`;
pPersonalC.style.strokeDashoffset = pPersonalCF;
pPersonalC.style.transformOrigin = "center";
pPersonalC.style.transform = "rotate(-90deg)"; 
//pro
pProC.style.strokeDasharray = `${pProCF} ${pProCF}`;
pProC.style.strokeDashoffset = pProCF;
pProC.style.transformOrigin = "center";
pProC.style.transform = "rotate(-90deg)";  
//team
pTeamC.style.strokeDasharray = `${pTeamCF} ${pTeamCF}`;
pTeamC.style.strokeDashoffset = pTeamCF;
pTeamC.style.transformOrigin = "center";
pTeamC.style.transform = "rotate(-90deg)";  

//percents
function platformProgress(percentPer, percentPro, percentTeam){
  const pPersonalO = pPersonalCF - percentPer / 100 * pPersonalCF;
  pPersonalC.style.strokeDashoffset = pPersonalO;

  const pProO = pProCF - percentPro / 100 * pProCF;
  pProC.style.strokeDashoffset = pProO;

  const pTeamO = pTeamCF - percentTeam / 100 * pTeamCF;
  pTeamC.style.strokeDashoffset = pTeamO;
};

let pPersonalV = parseInt(pPersonalP.textContent.slice(0,-1));
let pProV = parseInt(pProP.textContent.slice(0,-1));
let pTeamV = parseInt(pTeamP.textContent.slice(0,-1));

platformProgress(pPersonalV,pProV,pTeamV);


/* platform tab big platform statistic */ 
//circles
const ppPersonalC = document.querySelector('.platform-personal-progress__circle');
const ppProC = document.querySelector('.platform-pro-progress__circle');
const ppTeamC = document.querySelector('.platform-team-progress__circle');
//radius
const ppPersonalR = ppPersonalC.r.baseVal.value;
const ppProR = ppProC.r.baseVal.value;
const ppTeamR = ppTeamC.r.baseVal.value;
//percent value
const ppPersonalP = document.querySelector('.platform-personal-progress__percent');
const ppProP = document.querySelector('.platform-pro-progress__percent');
const ppTeamP = document.querySelector('.platform-team-progress__percent');
//circumference
const ppPersonalCF = 2 * Math.PI * ppPersonalR;
const ppProCF = 2 * Math.PI * ppProR;
const ppTeamCF = 2 * Math.PI * ppTeamR;

//stroke dashes
//personal
ppPersonalC.style.strokeDasharray = `${ppPersonalCF} ${ppPersonalCF}`;
ppPersonalC.style.strokeDashoffset = ppPersonalCF;
ppPersonalC.style.transformOrigin = "center";
ppPersonalC.style.transform = "rotate(-90deg)"; 
//pro
ppProC.style.strokeDasharray = `${ppProCF} ${ppProCF}`;
ppProC.style.strokeDashoffset = ppProCF;
ppProC.style.transformOrigin = "center";
ppProC.style.transform = "rotate(-90deg)";  
//team
ppTeamC.style.strokeDasharray = `${ppTeamCF} ${ppTeamCF}`;
ppTeamC.style.strokeDashoffset = ppTeamCF;
ppTeamC.style.transformOrigin = "center";
ppTeamC.style.transform = "rotate(-90deg)";  

//percents
function pplatformProgress(percentPer, percentPro, percentTeam){
  const ppPersonalO = ppPersonalCF - percentPer / 100 * ppPersonalCF;
  ppPersonalC.style.strokeDashoffset = ppPersonalO;

  const ppProO = ppProCF - percentPro / 100 * ppProCF;
  ppProC.style.strokeDashoffset = ppProO;

  const ppTeamO = ppTeamCF - percentTeam / 100 * ppTeamCF;
  ppTeamC.style.strokeDashoffset = ppTeamO;
};

let ppPersonalV = parseInt(ppPersonalP.textContent.slice(0,-1));
let ppProV = parseInt(ppProP.textContent.slice(0,-1));
let ppTeamV = parseInt(ppTeamP.textContent.slice(0,-1));

pplatformProgress(ppPersonalV,ppProV,ppTeamV);
