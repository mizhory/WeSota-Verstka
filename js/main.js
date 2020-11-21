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

//footer-menu
let fstatisticLink = document.querySelector('.f-statistic-link');
let fstatisticIcon = document.querySelector('.f-statistic-icon');
let ffinanceLink = document.querySelector('.f-finance-link');
let ffinanceIcon = document.querySelector('.f-finance-icon');
let fplatformLink = document.querySelector('.f-platform-link');
let fplatformIcon = document.querySelector('.f-platform-icon');
let fmessagesLink = document.querySelector('.f-messages-link');
let fmessagesIcon = document.querySelector('.f-messages-icon');
let fsettingsLink = document.querySelector('.f-settings-link');
let fsettingsIcon = document.querySelector('.f-settings-icon');
let fprofileLink = document.querySelector('.f-profile-link');
let fprofileIcon = document.querySelector('.f-profile-icon');

if (fstatisticLink.classList.contains('active')) {
  fstatisticIcon.src = "icons/menu-color/statistic.png";
}


fstatisticLink.onclick = function(){
  fstatisticIcon.src = "icons/menu-color/statistic.png";
  ffinanceIcon.src = "icons/menu-white/finance.png";
  fplatformIcon.src = "icons/menu-white/platform.png";
  fmessagesIcon.src = "icons/menu-white/message.png";
  fsettingsIcon.src = "icons/menu-white/settings.png";
  fprofileIcon.src = "icons/menu-white/profile.png";
};

ffinanceLink.onclick = function(){
  fstatisticIcon.src = "icons/menu-white/statistic.png";
  ffinanceIcon.src = "icons/menu-color/finance.png";
  fplatformIcon.src = "icons/menu-white/platform.png";
  fmessagesIcon.src = "icons/menu-white/message.png";
  fsettingsIcon.src = "icons/menu-white/settings.png";
  fprofileIcon.src = "icons/menu-white/profile.png";
};


fplatformLink.onclick = function(){
  fstatisticIcon.src = "icons/menu-white/statistic.png";
  ffinanceIcon.src = "icons/menu-white/finance.png";
  fplatformIcon.src = "icons/menu-color/platform.png";
  fmessagesIcon.src = "icons/menu-white/message.png";
  fsettingsIcon.src = "icons/menu-white/settings.png";
  fsettprofile.src = "icons/menu-white/profile.png";
};

fmessagesLink.onclick = function(){
  fstatisticIcon.src = "icons/menu-white/statistic.png";
  ffinanceIcon.src = "icons/menu-white/finance.png";
  fplatformIcon.src = "icons/menu-white/platform.png";
  fmessagesIcon.src = "icons/menu-color/message.png";
  fsettingsIcon.src = "icons/menu-white/settings.png";
  fsettprofile.src = "icons/menu-white/profile.png";
};

fsettingsLink.onclick = function(){
  fstatisticIcon.src = "icons/menu-white/statistic.png";
  ffinanceIcon.src = "icons/menu-white/finance.png";
  fplatformIcon.src = "icons/menu-white/platform.png";
  fmessagesIcon.src = "icons/menu-white/message.png";
  fsettingsIcon.src = "icons/menu-color/settings.png";
  fsettprofile.src = "icons/menu-white/profile.png";
};

fprofileLink.onclick = function(){
  fstatisticIcon.src = "icons/menu-white/statistic.png";
  ffinanceIcon.src = "icons/menu-white/finance.png";
  fplatformIcon.src = "icons/menu-white/platform.png";
  fmessagesIcon.src = "icons/menu-white/message.png";
  fsettingsIcon.src = "icons/menu-white/settings.png";
  fprofileIcon.src = "icons/menu-color/profile.png";
};