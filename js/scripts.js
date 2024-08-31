document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
    
            // Only prevent default and scroll if it's an anchor link (starts with '#')
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1); // Get the ID without the '#'
                const targetElement = document.getElementById(targetId);
    
                // Check if the target element exists before scrolling
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    console.warn(`Element with ID '${targetId}' not found.`);
                }
            }
        });
    });

    // Mentor Profile Link Handling (for mentors.html)
    document.querySelectorAll('.mentor-card a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const mentorName = this.closest('.mentor-card').querySelector('h3').textContent;
            localStorage.setItem('selectedMentor', mentorName);
            window.location.href = this.getAttribute('href');
        });
    });

    // Populate Mentor Detail Page (for mentor-detail.html)
    if (document.querySelector('.mentor-detail')) {
        const mentorName = localStorage.getItem('selectedMentor');
        if (mentorName) {
            document.querySelector('.mentor-detail h2').textContent = mentorName;
        }
    }

    // Simple form handling for the meeting request form (this is just an example, form submission is not connected to any backend)
    const meetingForm = document.querySelector('.mentor-detail form');
    if (meetingForm) {
        meetingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Meeting request submitted! This is a static demo, so no data will be sent.');
            // Clear the form
            this.reset();
        });
    }
});
