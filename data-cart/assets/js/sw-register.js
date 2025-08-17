if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.getRegistration().then(function (registration) {
      if (registration) {
        registration.unregister().then(function () { location.reload(true) });
      }
    });
  }