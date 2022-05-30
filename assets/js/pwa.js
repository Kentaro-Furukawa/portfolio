let deferredPrompt;
const installAppBtnContainer = document.querySelector('.install-app-btn-container');
const installApp = document.querySelector('#installApp');
const appInstallPromptModal = document.querySelector('#app-install-prompt-modal');


window.addEventListener('beforeinstallprompt', (e) => {
    installAppBtnContainer.style.display = 'block';
    deferredPrompt = e;
});

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

const showAppInstallPrompt = () => {
    return ['iPhone', 'iPad', 'iPod'].includes(navigator.platform);
  }