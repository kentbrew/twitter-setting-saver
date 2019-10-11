window.setTimeout( () => {
  let busted = document.querySelector('[aria-label="' + chrome.i18n.getMessage("watchMe") + '"]');
  if (busted) {
    alert(chrome.i18n.getMessage("busted"));
    busted.click();
    window.setTimeout(function () {
      let fix = document.querySelector('[role="menuitem"]');
      if (fix) {
        fix.click();  
      }
    }, 1);
  }
}, 2000);
