// JavaScript for Music Application

// DOM Elements
const uploadButton = document.getElementById('uploadAudio');
const lyricsInput = document.getElementById('lyricsInput');
const styleInput = document.getElementById('styleInput');
const createSongButton = document.getElementById('createSong');

// Event Listeners
uploadButton.addEventListener('change', handleFileUpload);
createSongButton.addEventListener('click', createSong);

// Function to handle audio file upload
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const audio = new Audio(e.target.result);
            console.log('Audio file loaded:', audio);
            // Here you can implement playing the loaded audio or visualizing it
        };
        reader.readAsDataURL(file);
    } else {
        alert('No file selected!');
    }
}

// Function to create a new song
function createSong() {
    const lyrics = lyricsInput.value;
    const style = styleInput.value;
    
    if (!lyrics || !style) {
        alert('Please enter lyrics and select a style of music.');
        return;
    }

    // Create a song object
    const newSong = {
        lyrics: lyrics,
        style: style,
        createdAt: new Date().toISOString(),
    };
    
    console.log('New Song Created:', newSong);
    // Here you would typically send this data to your server or API
}

// Sample style options function (you can expand this based on your system)
function loadStyleOptions() {
    const styles = ['Japanese Shoegaze', 'Sega', 'Uplifting Trance'];
    const styleDropdown = document.getElementById('styleOptions');
    
    styles.forEach(style => {
        const option = document.createElement('option');
        option.value = style;
        option.text = style;
        styleDropdown.add(option);
    });
}

// Call the function to load styles on page load
window.onload = loadStyleOptions;