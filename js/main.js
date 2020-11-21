let statisticLink = document.querySelector('.statistic-link');
let statisticIcon = document.querySelector('.statistic-icon');
let financeLink = document.querySelector('.finance-link');
let financeIcon = document.querySelector('.finance-icon');
let inviteLink = document.querySelector('.invite-link');
let inviteIcon = document.querySelector('.invite-icon');
let platformLink = document.querySelector('.platform-link');
let platformIcon = document.querySelector('.platform-icon');
let messagesLink = document.querySelector('.messages-link');
let messagesIcon = document.querySelector('.messages-icon');
let settingsLink = document.querySelector('.settings-link');
let settingsIcon = document.querySelector('.settings-icon');
let profileLink = document.querySelector('.profile-link');
let profileIcon = document.querySelector('.profile-icon');

if (statisticLink.classList.contains('active')) {
  statisticIcon.src = "icons/menu-color/statistic.png";
}


statisticLink.onclick = function(){
  statisticIcon.src = "icons/menu-color/statistic.png";
  financeIcon.src = "icons/menu-white/finance.png";
  inviteIcon.src = "icons/menu-white/invite.png";
  platformIcon.src = "icons/menu-white/platform.png";
  messagesIcon.src = "icons/menu-white/message.png";
  settingsIcon.src = "icons/menu-white/settings.png";
  profileIcon.src = "icons/menu-white/profile.png";
};

financeLink.onclick = function(){
  statisticIcon.src = "icons/menu-white/statistic.png";
  financeIcon.src = "icons/menu-color/finance.png";
  inviteIcon.src = "icons/menu-white/invite.png";
  platformIcon.src = "icons/menu-white/platform.png";
  messagesIcon.src = "icons/menu-white/message.png";
  settingsIcon.src = "icons/menu-white/settings.png";
  profileIcon.src = "icons/menu-white/profile.png";
};

inviteLink.onclick = function(){
  statisticIcon.src = "icons/menu-white/statistic.png";
  financeIcon.src = "icons/menu-white/finance.png";
  inviteIcon.src = "icons/menu-color/invite.png";
  platformIcon.src = "icons/menu-white/platform.png";
  messagesIcon.src = "icons/menu-white/message.png";
  settingsIcon.src = "icons/menu-white/settings.png";
  settprofile.src = "icons/menu-white/profile.png";
};

platformLink.onclick = function(){
  statisticIcon.src = "icons/menu-white/statistic.png";
  financeIcon.src = "icons/menu-white/finance.png";
  inviteIcon.src = "icons/menu-white/invite.png";
  platformIcon.src = "icons/menu-color/platform.png";
  messagesIcon.src = "icons/menu-white/message.png";
  settingsIcon.src = "icons/menu-white/settings.png";
  settprofile.src = "icons/menu-white/profile.png";
};

messagesLink.onclick = function(){
  statisticIcon.src = "icons/menu-white/statistic.png";
  financeIcon.src = "icons/menu-white/finance.png";
  inviteIcon.src = "icons/menu-white/invite.png";
  platformIcon.src = "icons/menu-white/platform.png";
  messagesIcon.src = "icons/menu-color/message.png";
  settingsIcon.src = "icons/menu-white/settings.png";
  settprofile.src = "icons/menu-white/profile.png";
};

settingsLink.onclick = function(){
  statisticIcon.src = "icons/menu-white/statistic.png";
  financeIcon.src = "icons/menu-white/finance.png";
  inviteIcon.src = "icons/menu-white/invite.png";
  platformIcon.src = "icons/menu-white/platform.png";
  messagesIcon.src = "icons/menu-white/message.png";
  settingsIcon.src = "icons/menu-color/settings.png";
  settprofile.src = "icons/menu-white/profile.png";
};

profileLink.onclick = function(){
  statisticIcon.src = "icons/menu-white/statistic.png";
  financeIcon.src = "icons/menu-white/finance.png";
  inviteIcon.src = "icons/menu-white/invite.png";
  platformIcon.src = "icons/menu-white/platform.png";
  messagesIcon.src = "icons/menu-white/message.png";
  settingsIcon.src = "icons/menu-white/settings.png";
  profileIcon.src = "icons/menu-color/profile.png";
};