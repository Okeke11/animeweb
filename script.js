// This event listener waits for your HTML page to fully load before running the code
document.addEventListener('DOMContentLoaded', () => {
    // We are passing the MyAnimeList ID for Jujutsu Kaisen (40748)
    fetchAnimeEpisodes(40748); 
});

async function fetchAnimeEpisodes(animeId) {
    // 1. Find the container in our HTML where the buttons will go
    const container = document.getElementById('episode-container');
    
    // If the container doesn't exist on the page, stop running the code
    if (!container) return; 

    // Show a loading message while we wait for the API
    container.innerHTML = '<p style="color: var(--text-main);">Loading episodes...</p>';

    try {
        // 2. Fetch the data from the Jikan API
        const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/episodes`);
        const result = await response.json();
        const episodes = result.data; // This is the array of episodes

        // Clear the "Loading..." text
        container.innerHTML = ''; 

        // 3. Loop through the episodes and create a button for each one
        episodes.forEach(episode => {
            // Create a new <a> tag
            const btn = document.createElement('a');
            
            btn.href = `watch.html?episode=${episode.mal_id}`;
            
            // Add a CSS class so it looks like a button
            btn.className = "ep-button"; 
            
            // Set the text to show the Episode Number
            btn.textContent = `EP ${episode.mal_id}`;
            
            // Finally, inject the button into the HTML page!
            container.appendChild(btn);
        });

    } catch (error) {
        console.error("Error fetching episodes:", error);
        container.innerHTML = '<p style="color: red;">Failed to load episodes. Please try again later.</p>';
    }
}