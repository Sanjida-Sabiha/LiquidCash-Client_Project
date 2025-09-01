
  
  const donateBtn_5 = document.getElementById('donateBtn_5');
  const donateBtnMobile_5 = document.getElementById('donateBtnMobile_5');
  const donateModal_5 = document.getElementById('donateModal_5');
  const closeModal_5 = document.getElementById('closeModal_5');

  function openModal(e) {
    e.preventDefault();
    donateModal_5.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    donateModal_5.classList.add('hidden');
    document.body.style.overflow = '';
  }

  donateBtn_5?.addEventListener('click', openModal);
  donateBtnMobile_5?.addEventListener('click', openModal);
  closeModal_5?.addEventListener('click', closeModalFunc);

  window.addEventListener('click', function(e) {
    if (e.target === donateModal_5) {
      closeModalFunc();
    }
  });



  const donateBtn_6 = document.getElementById('donateBtn_6');
  const donateBtnMobile_6 = document.getElementById('donateBtnMobile_6');
  const donateModal_6 = document.getElementById('donateModal_6');
  const closeModal_6 = document.getElementById('closeModal_6');

  function openModal(e) {
    e.preventDefault();
    donateModal_6.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    donateModal_6.classList.add('hidden');
    document.body.style.overflow = '';
  }

  donateBtn_6?.addEventListener('click', openModal);
  donateBtnMobile_6?.addEventListener('click', openModal);
  closeModal_6?.addEventListener('click', closeModalFunc);

  window.addEventListener('click', function(e) {
    if (e.target === donateModal_6) {
      closeModalFunc();
    }
  });


  const donateBtn_4 = document.getElementById('donateBtn_4');
  const donateBtnMobile_4 = document.getElementById('donateBtnMobile_4');
  const donateModal_4 = document.getElementById('donateModal_4');
  const closeModal_4 = document.getElementById('closeModal_4');

  function openModal(e) {
    e.preventDefault();
    donateModal_4.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    donateModal_4.classList.add('hidden');
    document.body.style.overflow = '';
  }

  donateBtn_4?.addEventListener('click', openModal);
  donateBtnMobile_4?.addEventListener('click', openModal);
  closeModal_4?.addEventListener('click', closeModalFunc);

  window.addEventListener('click', function(e) {
    if (e.target === donateModal_4) {
      closeModalFunc();
    }
  });


