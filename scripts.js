// Basic carousel functionality for "Meet Your DineMates" section
document.addEventListener("DOMContentLoaded", function() {
    const profiles = document.querySelectorAll(".dinemate-profile");
    let currentProfile = 0;

    function showProfile(index) {
        profiles.forEach((profile, i) => {
            profile.style.display = i === index ? "block" : "none";
        });
    }

    setInterval(() => {
        currentProfile = (currentProfile + 1) % profiles.length;
        showProfile(currentProfile);
    }, 3000);

    showProfile(currentProfile);
});
