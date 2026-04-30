document.addEventListener('DOMContentLoaded', () => {
    const image1Container = document.getElementById('image1Container');
    const image2Container = document.getElementById('image2Container');
    const viewImageButton = document.getElementById('viewImageButton');
    const logoImage = document.getElementById('logoImage'); // Get reference to the logo image

    const hasSeenImages = localStorage.getItem('hasSeenImages');

    if (hasSeenImages) {
        // If user has seen images before, hide images and show button and logo immediately
        image1Container.classList.add('hidden');
        image2Container.classList.add('hidden');
        viewImageButton.classList.remove('hidden');
        logoImage.classList.remove('hidden'); // Show logo image
    } else {
        // If it's the first time, play the image sequence
        image1Container.classList.remove('hidden');
        image2Container.classList.remove('hidden');
        viewImageButton.classList.add('hidden');
        logoImage.classList.add('hidden'); // Hide logo image initially
        localStorage.setItem('hasSeenImages', 'true'); // Set flag immediately

        // Step 1: Show both images for 5 seconds
        setTimeout(() => {
            image1Container.classList.add('hidden'); // Hide Image 1
            image2Container.classList.add('hidden'); // Hide Image 2
            viewImageButton.classList.remove('hidden'); // Show View Image Button
            logoImage.classList.remove('hidden'); // Show logo image
        }, 5000); // Both images visible for 5 seconds
    }
});