const donateBtn_7 = document.getElementById('donateBtn_7');
  const donateBtnMobile_7 = document.getElementById('donateBtnMobile_7');
  const donateModal_7 = document.getElementById('donateModal_7');
  const closeModal_7 = document.getElementById('closeModal_7');

  function openModal(e) {
    e.preventDefault();
    donateModal_7.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    donateModal_7.classList.add('hidden');
    document.body.style.overflow = '';
  }

  donateBtn_7?.addEventListener('click', openModal);
  donateBtnMobile_7?.addEventListener('click', openModal);
  closeModal_7?.addEventListener('click', closeModalFunc);

  window.addEventListener('click', function(e) {
    if (e.target === donateModal_7) {
      closeModalFunc();
    }
  });


  const donateBtn_9 = document.getElementById('donateBtn_9');
  const donateBtnMobile_9 = document.getElementById('donateBtnMobile_9');
  const donateModal_9 = document.getElementById('donateModal_9');
  const closeModal_9 = document.getElementById('closeModal_9');

  function openModal(e) {
    e.preventDefault();
    donateModal_9.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    donateModal_9.classList.add('hidden');
    document.body.style.overflow = '';
  }

  donateBtn_9?.addEventListener('click', openModal);
  donateBtnMobile_9?.addEventListener('click', openModal);
  closeModal_9?.addEventListener('click', closeModalFunc);

  window.addEventListener('click', function(e) {
    if (e.target === donateModal_9) {
      closeModalFunc();
    }
  });




  const donateBtn_8 = document.getElementById('donateBtn_8');
  const donateBtnMobile_8 = document.getElementById('donateBtnMobile_8');
  const donateModal_8 = document.getElementById('donateModal_8');
  const closeModal_8 = document.getElementById('closeModal_8');

  function openModal(e) {
    e.preventDefault();
    donateModal_8.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    donateModal_8.classList.add('hidden');
    document.body.style.overflow = '';
  }

  donateBtn_8?.addEventListener('click', openModal);
  donateBtnMobile_8?.addEventListener('click', openModal);
  closeModal_8?.addEventListener('click', closeModalFunc);

  window.addEventListener('click', function(e) {
    if (e.target === donateModal_8) {
      closeModalFunc();
    }
  });



