function toggleDropdown(open) {
    var dropdownContent = document.querySelector(".dropdown-content")
    if (open) {
        dropdownContent.style.display = 'block';
        setTimeout(function() {
            dropdownContent.style.opacity = 1;
            dropdownContent.style.transform = 'scale(1)';
        }, 10); // Adding a slight delay for smoother animation
    } else {
        dropdownContent.style.opacity = 0;
        dropdownContent.style.transform = 'scale(0.8)';
        setTimeout(function() {
            dropdownContent.style.display = 'none';
        }, 300); // Same duration as the transition in CSS
    }
}