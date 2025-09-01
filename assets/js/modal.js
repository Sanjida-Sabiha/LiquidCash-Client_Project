
  const donateBtn = document.getElementById('donateBtn');
  const donateBtnMobile = document.getElementById('donateBtnMobile');
  const donateModal = document.getElementById('donateModal');
  const closeModal = document.getElementById('closeModal');

  function openModal(e) {
    e.preventDefault();
    donateModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    donateModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  donateBtn?.addEventListener('click', openModal);
  donateBtnMobile?.addEventListener('click', openModal);
  closeModal?.addEventListener('click', closeModalFunc);

  window.addEventListener('click', function(e) {
    if (e.target === donateModal) {
      closeModalFunc();
    }
  });



