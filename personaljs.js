const texts = ["Bagas Julio N", "UI/UX Designer", "Mobile Developer", "IT Support"];
const typingText = document.getElementById('typing-text');
let i = 0;
let charIndex = 0;

function type() {
  typingText.textContent = ''; // Kosongkan teks sebelum memulai animasi
  charIndex = 0;
  const currentText = texts[i];

  function typeCharacter() {
    typingText.textContent += currentText.charAt(charIndex);
    charIndex++;
    if (charIndex < currentText.length) {
      setTimeout(typeCharacter, 100); // Sesuaikan kecepatan mengetik
    } else {
      i = (i + 1) % texts.length;
      setTimeout(type, 2000); // Jeda sebelum menampilkan teks berikutnya
    }
  }

  typeCharacter();
}

type();