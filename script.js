const vidElement = document.getElementById('video');
const button = document.getElementById('btn');
/**
 * The function selMediaStm() is an asynchronous function that uses the getDisplayMedia() method to get
 * the user's screen and display it in the video element.
 */
async function selMediaStm() {
    try {
        const mediaStm = await navigator.mediaDevices.getDisplayMedia();
        vidElement.srcObject = mediaStm;
        vidElement.onloadedmetadata = () => {
            vidElement.play();
        }
    } catch (error) {

    }
}
button.addEventListener('click', async () => {
    /* Disabling the button. */
    button.disabled = true;
    /* A method that is used to enter the video element into the picture-in-picture mode. */
    await vidElement.requestPictureInPicture();
    /* Enabling the button. */
    button.disabled = false;
});

selMediaStm();