function initTTS() {
    const wordContainers = document.querySelectorAll('.word-container');
    
    wordContainers.forEach(container => {
        container.addEventListener('click', () => {
            const text = container.querySelector('ruby').textContent;
            speakText(text);
        });
    });
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        speechSynthesis.speak(utterance);
    } else {
        console.log('Speech synthesis not supported');
    }
}

window.onload = initTTS;