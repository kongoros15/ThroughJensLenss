
// Lightbox for gallery
document.addEventListener('DOMContentLoaded', () => {
  const lb = document.querySelector('.lightbox');
  if(lb){
    lb.addEventListener('click', () => lb.classList.remove('open'));
    document.querySelectorAll('[data-lightbox] img').forEach(img => {
      img.addEventListener('click', () => {
        lb.querySelector('img').src = img.src;
        lb.classList.add('open');
      });
    });
  }

  // PayPal multi-option (simple): update hidden amount & item_name on change
  document.querySelectorAll('.paypal-form').forEach(form => {
    const sizeSel = form.querySelector('select[name="os0"]');
    const amount = form.querySelector('input[name="amount"]');
    const itemName = form.querySelector('input[name="item_name"]');
    const baseName = itemName ? itemName.getAttribute('data-base') : null;
    function update(){
      if(!sizeSel || !amount || !itemName) return;
      const selected = sizeSel.options[sizeSel.selectedIndex];
      amount.value = selected.getAttribute('data-price');
      itemName.value = baseName + ' - ' + selected.text;
    }
    if(sizeSel){ sizeSel.addEventListener('change', update); update(); }
  });
});
