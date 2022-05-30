let deferredPrompt;
const installAppBtnContainer = document.querySelector('.install-app-btn-container');
const installApp = document.querySelector('#installApp');
const appInstallPromptModal = document.querySelector('#app-install-prompt-modal');
const modalClose = document.querySelector('.modal-close');


window.addEventListener('beforeinstallprompt', (e) => {
    installAppBtnContainer.style.display = 'block';
    deferredPrompt = e;
});

const showAppInstallPrompt = () => {
    return ['iPhone', 'iPad', 'iPod'].includes(navigator.platform);
  };

installApp.addEventListener('click', async () => {
    if (showAppInstallPrompt()) {
        appInstallPromptModal.style.display = 'block';

    } else if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            deferredPrompt = null;
        }
    }
});

modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    appInstallPromptModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === appInstallPromptModal) {
        appInstallPromptModal.style.display = 'none';
    }
});



