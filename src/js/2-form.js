// Отримуємо елемент форми
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: "",
    message: ""
};

// Перевірка наявності збережених даних у localStorage
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

// Обробник події для введення даних у форму
form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробник події для відправки форми
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Please fill in all fields.");
        return;
    }

    console.log("Form Data Submitted:", formData);

    // Скидаємо форму та очищуємо localStorage
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
});