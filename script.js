function changeImage() {
    const qualitySelect = document.getElementById('qualitySelect');
    const qualityImage = document.getElementById('qualityImage');
    const selectedQuality = qualitySelect.value;


    const qualityImageMap = {
        '144p': 'images/144p.png',
        '240p': 'images/240p.png',
        '480p': 'images/480p.png',
        '720p': 'images/720p.png',
        '1080p': 'images/1080v.png'
    };

    qualityImage.src = qualityImageMap[selectedQuality];
}
