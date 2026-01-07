const startBtn = document.getElementById('startBtn');
const gallery = document.getElementById('gallery');
const messageBtn = document.getElementById('messageBtn');
const messageSection = document.getElementById('message');
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseSection = document.getElementById('surprise');

// Start gallery
startBtn.onclick = () => {
    document.getElementById('welcome').classList.add('hidden');
    gallery.classList.remove('hidden');
}

// Show message
messageBtn.onclick = () => {
    gallery.classList.add('hidden');
    messageSection.classList.remove('hidden');
}

// Show surprise
surpriseBtn.onclick = () => {
    messageSection.classList.add('hidden');
    surpriseSection.classList.remove('hidden');
}
