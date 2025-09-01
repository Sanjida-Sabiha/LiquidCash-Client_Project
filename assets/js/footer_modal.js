document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('donateBtn_2');
  const btnMobile = document.getElementById('donateBtnMobile_2');
  const modal = document.getElementById('donateModal_2');
  const close = document.getElementById('closeModal_2');

  if (!modal) return; // Don't run further if modal not found

  const openModal = (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  btn?.addEventListener('click', openModal);
  btnMobile?.addEventListener('click', openModal);
  close?.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
});
