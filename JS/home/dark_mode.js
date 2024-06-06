function darkModejs() {
    const desktopModeSwitcher = document.querySelector('.header-switch input');
    const mobileModeSwitcher = document.querySelector('.switch input');
    const bodyMode = document.body;
    const desktopHeader = document.querySelector('.header')

    function toggleDesktopMode() {
      if (desktopModeSwitcher.checked) {
        desktopHeader.classList.add('dark-mode');
        mobileModeSwitcher.classList.add('dark-mode');
        bodyMode.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
      } else {
        desktopHeader.classList.remove('dark-mode');
        mobileModeSwitcher.classList.remove('dark-mode');
        bodyMode.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light');
      }
    };

    function toggleMobileMode() {
      if (mobileModeSwitcher.checked) {
        bodyMode.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
      } else {
        bodyMode.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light');
      }
    };

    function applyMode() {
      const storedMode = localStorage.getItem('mode');
      if (storedMode === 'dark') {
        desktopModeSwitcher.checked = true;
        mobileModeSwitcher.checked = true;
        bodyMode.classList.add('dark-mode');
      } else {
        desktopModeSwitcher.checked = false;
        mobileModeSwitcher.checked = false;
        bodyMode.classList.remove('dark-mode');
      }
    };

    desktopModeSwitcher.addEventListener('change', toggleDesktopMode);
    mobileModeSwitcher.addEventListener('change', toggleMobileMode);

    applyMode();
};

darkModejs()