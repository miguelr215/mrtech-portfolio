// callback function for the observer
const callback = function(entries) {
    entries.forEach(entry => {
        // if the element is visible
        if (entry.isIntersecting) {
            // add the animation class
            entry.target.classList.add("isVisible");
        }
    });
};

// create the observer
const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function(target) {
    observer.observe(target);
});