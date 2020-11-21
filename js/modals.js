//buttons
let support = document.querySelector('.support-btn');
let notif = document.querySelector('.notif-btn');
let chat = document.querySelector('.chat-btn');
let close = document.querySelectorAll('.btn-close');
let btnChange = document.querySelector('.btn-change');
let btnSave = document.querySelectorAll('.btn-save');
let btnEdit = document.querySelector('.btn-edit');
let btnDlt = document.querySelector('.btn-delete');
let btnEnter = document.querySelector('.btn-enter');
let btnProfile = document.querySelector('.profile-link');

//modal windows
let supportWindow = document.querySelector('.support-window');
let notifWindow = document.querySelector('.notifications-window');
let entryWindow = document.querySelector('.entry-window');
let senders = document.querySelectorAll('.sender-avatar');
let senderCard = document.querySelector('.user-card-mod');
let formIntegration = document.querySelector('.form-integration');
let socials = document.querySelector('.socials');
let pStg = document.querySelector('.profile-settings');
let pChng = document.querySelector('.profile-changes');
let editScs = document.querySelector('.fill-success');
let dltScs = document.querySelector('.delete-success');
let chatWindow = document.querySelector('.chat-window');
let payerScs = document.querySelector('.payeer-success');
let payerWng = document.querySelector('.payeer-warning');
let faWng = document.querySelector('.fa-warning');
let faScs = document.querySelector('.fa-success');
let fa = document.querySelector('.fa-settings');
let changePsw = document.querySelector('.change-password');
let platAc = document.querySelector('.platform-activation');
let acScs = document.querySelector('.activation-success');
let acWng = document.querySelector('.activation-warning');
let accLack = document.querySelector('.account-lack');
let transWng = document.querySelector('.transaction-warning');
let transConfirm = document.querySelector('.transaction-confirm');
let transScs = document.querySelector('.transaction-success');
let profileCard = document.querySelector('.profile-card-mod');




support.onclick = function(){
  supportWindow.classList.toggle('d-none');
  supportWindow.classList.toggle('d-block');
};

notif.onclick = function(){
  notifWindow.classList.toggle('d-none');
  notifWindow.classList.toggle('d-block');
};

chat.onclick = function(){
  entryWindow.classList.toggle('d-none');
  entryWindow.classList.toggle('d-block');
  if(chatWindow.classList.contains('d-flex')){
    chatWindow.classList.remove('d-flex');
    chatWindow.classList.add('d-none');
    entryWindow.classList.add('d-none');
  entryWindow.classList.remove('d-block');
  }
};

btnEnter.onclick = function(){
  entryWindow.classList.add('d-none');
  entryWindow.classList.remove('d-block');
  chatWindow.classList.add('d-flex');
  chatWindow.classList.remove('d-none');
};


for (let sender of senders){
  sender.onclick = function(){
    senderCard.classList.toggle('d-none');
    senderCard.classList.toggle('d-flex');
  }
};

btnChange.onclick = function(){
  socials.classList.remove('d-flex');
  socials.classList.add('d-none');
  formIntegration.classList.add('d-flex');
  formIntegration.classList.remove('d-none');
};

for(let btn of btnSave){
  btn.onclick = function(){
    socials.classList.add('d-flex');
    socials.classList.remove('d-none');
    formIntegration.classList.remove('d-flex');
    formIntegration.classList.add('d-none');

    pStg.classList.remove('d-none');
    pChng.classList.add('d-none');
    pChng.classList.remove('d-flex');
    editScs.classList.remove('d-none');
    editScs.classList.add('d-flex');
    edit.classList.add('d-flex');
  };
}


btnEdit.onclick = function(){
  pStg.classList.add('d-none');
  pChng.classList.remove('d-none');
  pChng.classList.add('d-flex');
};


btnDlt.onclick = function(){
  dltScs.classList.remove('d-none');
  dltScs.classList.add('d-flex');
};

for (let c of close){
  c.onclick = function(){
    senderCard.classList.remove('d-flex');
    senderCard.classList.add('d-none');
    editScs.classList.add('d-none');
    editScs.classList.remove('d-flex');
    dltScs.classList.add('d-none');
    dltScs.classList.remove('d-flex');
    payerScs.classList.add('d-none');
    payerScs.classList.remove('d-flex');
    payerWng.classList.add('d-none');
    payerWng.classList.remove('d-flex');
    faWng.classList.add('d-none');
    faWng.classList.remove('d-flex');
    faScs.classList.add('d-none');
    faScs.classList.remove('d-flex');
    fa.classList.add('d-none');
    fa.classList.remove('d-flex');
    changePsw.classList.add('d-none');
    changePsw.classList.remove('d-flex');
    platAc.classList.add('d-none');
    platAc.classList.remove('d-flex');
    acScs.classList.add('d-none');
    acScs.classList.remove('d-flex');
    acWng.classList.add('d-none');
    acWng.classList.remove('d-flex');
    accLack.classList.add('d-none');
    accLack.classList.remove('d-flex');
    transWng.classList.add('d-none');
    transWng.classList.remove('d-flex');
    transConfirm.classList.add('d-none');
    transConfirm.classList.remove('d-flex');
    transScs.classList.add('d-none');
    transScs.classList.remove('d-flex');
  };
};

btnProfile.onclick = function(){
  profileCard.classList.toggle('d-none');
  profileCard.classList.toggle('d-flex');
};