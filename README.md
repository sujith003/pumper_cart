# Pumper Cart Component

This is a **BOGO (Buy One Get One) cart UI component** built for **Proveway Pvt Ltd** using **HTML, CSS, and JavaScript**.  
It is fully interactive, responsive, and visually matches the Figma design.

---

## Features

- Three interactive cart boxes: **1 Unit, 2 Units, 3 Units**, each with prices and discounts.  
- **Expandable size and color options** for each unit.  
- **Smooth expand/collapse animation** when selecting a box.  
- **Radio button selection** — only one box active at a time.  
- **Automatic total price update** based on the selected box.  
- **"MOST POPULAR" badge** on the recommended unit.  
- Box alignment maintained even if optional content (like Standard Price) is removed.  
- Clean, **human-readable HTML, CSS, and JS**.

---

## Project Structure

pumper_cart/
│
├─ cart.html # Main HTML file
├─ cart-style.css # Styling for cart boxes, expandable content, badges, and hover
├─ cart-script.js # JS for box selection, expandable animation, and total update
└─ README.md # Project documentation


---

## How It Works (Short Version)

1. **Cart Boxes:** Click a box → it expands to show size & color options; only one box can be active.  
2. **Expandable Section:** Smooth animation using `max-height` + `opacity`.  
3. **Radio Buttons:** Automatically check when a box is selected.  
4. **Total Price:** Updates dynamically in the footer based on selected box.  
5. **Badge & Hover:** Box 2 shows **MOST POPULAR** badge; hover highlights the box.  
6. **Extra:** Box 1 shows “Standard Price”; Boxes 2 & 3 maintain alignment without it.  

---

## Styling

- **CSS Grid** ensures perfect content alignment.  
- **Custom radio buttons** with checked/unchecked states.  
- Expandable section adapts height automatically.  
- Layout preserves alignment even when optional elements are removed.  

---

## Usage

1. Clone or download the project.  
2. Open **`cart.html`** in any modern browser.  
3. Click on a cart box to expand size/color options.  
4. Footer **total price updates automatically** based on the selected box.  

---

## Notes

- Box 1 retains “Standard Price”; Boxes 2 & 3 do not. Alignment is preserved.  
- Focus is on **basic HTML, CSS, and JavaScript skills**.  
- Designed to be **drop-in ready** for any e-commerce page.  

---

## License

This project is **free to use and modify** for personal or commercial purposes.  
Developed for **Proveway Pvt Ltd**.