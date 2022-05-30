let deferredPrompt;
const installAppBtnContainer = document.querySelector('.install-app-btn-container');
const installApp = document.getElementById('installApp');

window.addEventListener('beforeinstallprompt', (e) => {
    installAppBtnContainer.style.display = 'block';
    deferredPrompt = e;
});

installApp.addEventListener('click', async () => {
    if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            deferredPrompt = null;
        }
    }
});