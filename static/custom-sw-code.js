setTimeout(() => {
  self.registration.showNotification('Hello, world!');
}, 15000);
(async function () {

    Notification.requestPermission(result => {
        if (result === 'granted') {
        let sw = await navigator.serviceWorker.ready;
        let push = sw.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey:
            'BCzT3T936FoK3f90BBMl4Vu3dKeUhL_wUuRpmJ_BExHKLKDujXsF6wuUK2Ea7wsMKb7xRVtqANJ468BAg6BoZx4',
        });
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification('Vibration Sample', {
            body: 'Buzz! Buzz!',
            tag: 'vibration-sample',
          });
        });
      }
    });


  console.log(JSON.stringify(push));
})();
