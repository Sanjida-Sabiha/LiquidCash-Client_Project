const donateBtn_1 = document.getElementById('donateBtn_1');
  const donateBtnMobile_1 = document.getElementById('donateBtnMobile_1');
  const donateModal_1 = document.getElementById('donateModal_1');
  const closeModal_1 = document.getElementById('closeModal_1');

  function openModal(e) {
    e.preventDefault();
    donateModal_1.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    donateModal_1.classList.add('hidden');
    document.body.style.overflow = '';
  }

  donateBtn_1?.addEventListener('click', openModal);
  donateBtnMobile_1?.addEventListener('click', openModal);
  closeModal_1?.addEventListener('click', closeModalFunc);

  window.addEventListener('click', function(e) {
    if (e.target === donateModal_1) {
      closeModalFunc();
    }
  });



  

  const donateBtn_3 = document.getElementById('donateBtn_3');
  const donateBtnMobile_3 = document.getElementById('donateBtnMobile_3');
  const donateModal_3 = document.getElementById('donateModal_3');
  const closeModal_3 = document.getElementById('closeModal_3');

  function openModal(e) {
    e.preventDefault();
    donateModal_3.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    donateModal_3.classList.add('hidden');
    document.body.style.overflow = '';
  }

  donateBtn_3?.addEventListener('click', openModal);
  donateBtnMobile_3?.addEventListener('click', openModal);
  closeModal_3?.addEventListener('click', closeModalFunc);

  window.addEventListener('click', function(e) {
    if (e.target === donateModal_3) {
      closeModalFunc();
    }
  });