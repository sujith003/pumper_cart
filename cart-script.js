// Select all cart boxes
const boxes = document.querySelectorAll('.rect-43');

boxes.forEach(box => {
  const radio = box.querySelector('.radio');
  const expandable = box.querySelector('.expandable');

  box.addEventListener('click', () => {
    // Collapse all boxes
    boxes.forEach(b => {
      b.classList.remove('active');
      const exp = b.querySelector('.expandable');
      if (exp) {
        exp.style.maxHeight = null;
        exp.style.opacity = 0;
      }
    });

    // Activate clicked box
    box.classList.add('active');
    radio.checked = true;

    // Smooth expand
    if (expandable) {
      expandable.style.maxHeight = expandable.scrollHeight + "px";
      expandable.style.opacity = 1;
    }

    // Update total price
    const price = box.querySelector('.price').textContent;
    document.querySelector('.cart-footer .total').textContent = `Total: ${price}`;
  });
});
