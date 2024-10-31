// פונקציה לעדכון תמונת הקציצה בהתאם לבחירה
function updatePattyImage() {
    const pattyImage = document.getElementById("patty-image"); // מקבל את אלמנט התמונה של הקציצה
    const selectedPatty = document.querySelector('input[name="patty"]:checked'); // בודק איזה כפתור רדיו נבחר

    if (selectedPatty) { // אם נבחרה קציצה כלשהי
        pattyImage.src = `Images/burger${selectedPatty.value}.png`; // מעדכן את התמונה לפי מספר הקציצות שנבחר
        pattyImage.style.display = "block"; // מציג את התמונה על המסך
        pattyImage.style.opacity = 1; // הופך את התמונה לשקיפות מלאה לאחר בחירה
    } else {
        pattyImage.style.display = "none"; // מסתיר את התמונה אם לא נבחרה קציצה
    }

    validateForm(); // מפעיל את הפונקציה validateForm כדי לבדוק אם כפתור השליחה צריך להיות פעיל
}

// פונקציה לעדכון תמונות הרטבים בהתאם לבחירות בתיבות הסימון
function updateSauceImage() {
    const sauces = ["ketchup", "mustard", "mayonnaise"]; // רשימת שמות הרטבים
    sauces.forEach(sauce => { // עובר על כל רוטב
        const img = document.getElementById(`${sauce}-img`); // מקבל את אלמנט התמונה המתאים לרוטב
        const checkbox = document.querySelector(`input[value="${sauce}"]`); // בודק אם הרוטב נבחר בתיבת הסימון
        img.style.opacity = checkbox && checkbox.checked ? 1 : 0.5; // אם הרוטב נבחר, התמונה תהיה שקופה במלואה, אחרת תהיה חצי שקופה
    });
}

// פונקציה לעדכון תמונות התוספות בהתאם לבחירות בתיבות הסימון
function updateToppingImage() {
    const toppings = ["tomato", "onion", "lettuce"]; // רשימת שמות התוספות
    toppings.forEach(topping => { // עובר על כל תוספת
        const img = document.getElementById(`${topping}-img`); // מקבל את אלמנט התמונה המתאים לתוספת
        const checkbox = document.querySelector(`input[value="${topping}"]`); // בודק אם התוספת נבחרה בתיבת הסימון
        img.style.opacity = checkbox && checkbox.checked ? 1 : 0.5; // אם התוספת נבחרה, התמונה תהיה שקופה במלואה, אחרת תהיה חצי שקופה
    });
}

// פונקציה לעדכון תמונות המשקאות בהתאם לבחירות בתיבות הסימון
function updateDrinkImage() {
    const drinks = ["blue_drink", "yellow_drink", "red_drink", "green_drink"]; // רשימת שמות המשקאות
    drinks.forEach(drink => { // עובר על כל משקה
        const img = document.getElementById(`${drink}-img`); // מקבל את אלמנט התמונה המתאים למשקה
        const checkbox = document.querySelector(`input[value="${drink}"]`); // בודק אם המשקה נבחר בתיבת הסימון
        img.style.opacity = checkbox && checkbox.checked ? 1 : 0.5; // אם המשקה נבחר, התמונה תהיה שקופה במלואה, אחרת תהיה חצי שקופה
    });
}

// פונקציה לעדכון תמונות תוספות הצד בהתאם לבחירות בתיבות הסימון
function updateSideImage() {
    const sides = ["Sweet potato chips", "Potato chips", "Onion rings"]; // רשימת שמות תוספות הצד
    sides.forEach(side => { // עובר על כל תוספת צד
        const img = document.getElementById(`${side.replace(/ /g, "-")}-img`); // מחליף רווחים במקף כדי להתאים לשמות התמונות
        const checkbox = document.querySelector(`input[value="${side}"]`); // בודק אם תוספת הצד נבחרה בתיבת הסימון
        img.style.opacity = checkbox && checkbox.checked ? 1 : 0.5; // אם התוספת נבחרה, התמונה תהיה שקופה במלואה, אחרת תהיה חצי שקופה
    });
}

// הפעלת כפתור השליחה רק לאחר שמולא השם ונבחרה קציצה
function validateForm() {
    const name = document.getElementById("full-name").value.trim(); // מקבל את הערך של השם שהוזן ומסיר רווחים מיותרים
    const pattySelected = document.querySelector('input[name="patty"]:checked'); // בודק אם נבחרה קציצה
    const submitBtn = document.getElementById("submit-btn"); // מקבל את כפתור השליחה

    submitBtn.disabled = !(name && pattySelected); // אם השם לא הוזן או שלא נבחרה קציצה, הכפתור יישאר מושבת
    submitBtn.style.opacity = submitBtn.disabled ? 0.5 : 1; // הכפתור יופיע בשקיפות 0.5 אם מושבת, אחרת בשקיפות מלאה
}

// הצגת סיכום ההזמנה עם פרטי ההזמנה והערות
function showSummary() {
    const name = document.getElementById("full-name").value; // מקבל את השם המלא מהשדה
    const notes = document.getElementById("notes").value; // מקבל את ההערות שהוזנו

    const selectedPatty = document.querySelector('input[name="patty"]:checked')?.nextSibling.textContent.trim(); // מקבל את שם הקציצה שנבחרה
    const selectedSauces = Array.from(document.querySelectorAll('input[name="sauce"]:checked')).map(s => s.value); // אוסף את כל הרטבים שנבחרו
    const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(t => t.value); // אוסף את כל התוספות שנבחרו
    const selectedDrinks = Array.from(document.querySelectorAll('input[name="drink"]:checked')).map(d => d.value); // אוסף את כל השתייה שנבחרה
    const selectedSides = Array.from(document.querySelectorAll('input[name="side"]:checked')).map(s => s.value); // אוסף את כל תוספות הצד שנבחרו

    // בונה את טקסט הסיכום ומוסיף את כל הבחירות שנעשו
    const summaryText = `
        <strong>שם מלא:</strong> ${name}<br>
        <strong>מספר קציצות:</strong> ${selectedPatty || "לא נבחר"}<br>
        <strong>רטבים:</strong> ${selectedSauces.length ? selectedSauces.join(", ") : "ללא"}<br>
        <strong>תוספות:</strong> ${selectedToppings.length ? selectedToppings.join(", ") : "ללא"}<br>
        <strong>שתייה:</strong> ${selectedDrinks.length ? selectedDrinks.join(", ") : "ללא"}<br>
        <strong>תוספות צד:</strong> ${selectedSides.length ? selectedSides.join(", ") : "ללא"}<br>
        <strong>הערות:</strong> ${notes || "אין הערות"}<br> <!-- הצגת ההערות בסיכום, אם יש -->
        <strong>בתיאבון!</strong>
    `;

    document.getElementById("summary-text").innerHTML = summaryText; // מעדכן את תוכן תיבת הסיכום עם פרטי ההזמנה
    document.getElementById("summary-box").style.display = "block"; // מציג את תיבת הסיכום
}
