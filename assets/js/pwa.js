
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
});

const installAppBtnContainer = document.querySelector('.install-app-btn-container');

window.addEventListener('beforeinstallprompt', (e) => {
    installAppBtnContainer.style.display = 'block';
    deferredPrompt = e;
});

const installApp = document.getElementById('installApp');

installApp.addEventListener('click', async () => {
    if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            deferredPrompt = null;
        }
    }
});