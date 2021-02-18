let sw = await navigator.serviceWorker.ready
let push = sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: "BCzT3T936FoK3f90BBMl4Vu3dKeUhL_wUuRpmJ_BExHKLKDujXsF6wuUK2Ea7wsMKb7xRVtqANJ468BAg6BoZx4"
})


console.log(JSON.stringify(push));