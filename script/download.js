async function downloadGifos(obj) {
    const gif_id = obj.getAttribute("data-obj-id")

    const downloadUrl = `https://media.giphy.com/media/${gif_id}/giphy.gif`;
    const fetchedGif = fetch(downloadUrl);
    const blobGif = (await fetchedGif).blob();
    const urlGif = URL.createObjectURL(await blobGif);
    const saveImg = document.createElement("a");
    saveImg.href = urlGif;
    saveImg.download = "downloaded-guifo.gif";
    saveImg.style = 'display: "none"';
    document.body.appendChild(saveImg);
    saveImg.click();
    document.body.removeChild(saveImg);
}
