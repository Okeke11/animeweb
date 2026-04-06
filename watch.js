document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const episodeNumber = urlParams.get('episode');
    
    // NEW: Get the anime ID from the URL as well
    // If no ID is found, it defaults to jujutsu-kaisen
    const animeId = urlParams.get('id') || "jujutsu-kaisen-tv"; 

    if (episodeNumber) {
        document.getElementById('episode-title').textContent = `Loading...`;
        
        // Pass the dynamic animeId to your fetch function
        fetchVideoLinks(animeId, episodeNumber);
    }
});