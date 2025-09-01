const donateBtn_10 = document.getElementById('donateBtn_10');
  const donateBtnMobile_10 = document.getElementById('donateBtnMobile_10');
  const donateModal_10 = document.getElementById('donateModal_10');
  const closeModal_10 = document.getElementById('closeModal_10');

  function openModal(e) {
    e.preventDefault();
    donateModal_10.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    donateModal_10.classList.add('hidden');
    document.body.style.overflow = '';
  }

  donateBtn_10?.addEventListener('click', openModal);
  donateBtnMobile_10?.addEventListener('click', openModal);
  closeModal_10?.addEventListener('click', closeModalFunc);

  window.addEventListener('click', function(e) {
    if (e.target === donateModal_10) {
      closeModalFunc();
    }
  });


  const donateBtn_11 = document.getElementById('donateBtn_11');
  const donateBtnMobile_11 = document.getElementById('donateBtnMobile_11');
  const donateModal_11 = document.getElementById('donateModal_11');
  const closeModal_11 = document.getElementById('closeModal_11');

  function openModal(e) {
    e.preventDefault();
    donateModal_11.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    donateModal_11.classList.add('hidden');
    document.body.style.overflow = '';
  }

  donateBtn_11?.addEventListener('click', openModal);
  donateBtnMobile_11?.addEventListener('click', openModal);
  closeModal_11?.addEventListener('click', closeModalFunc);

  window.addEventListener('click', function(e) {
    if (e.target === donateModal_11) {
      closeModalFunc();
    }
  });




  const donateBtn_12 = document.getElementById('donateBtn_12');
  const donateBtnMobile_12 = document.getElementById('donateBtnMobile_12');
  const donateModal_12 = document.getElementById('donateModal_12');
  const closeModal_12 = document.getElementById('closeModal_12');

  function openModal(e) {
    e.preventDefault();
    donateModal_12.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    donateModal_12.classList.add('hidden');
    document.body.style.overflow = '';
  }

  donateBtn_12?.addEventListener('click', openModal);
  donateBtnMobile_12?.addEventListener('click', openModal);
  closeModal_12?.addEventListener('click', closeModalFunc);

  window.addEventListener('click', function(e) {
    if (e.target === donateModal_12) {
      closeModalFunc();
    }
  });



