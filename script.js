document.getElementById("relation").addEventListener("change", function () {
    const relation = this.value;
    const personalGreetingElement = document.getElementById("personal-greeting");
    const birthDetailsElement = document.getElementById("birth-details");
    const detailsElement = document.getElementById("details");
    const revealButton = document.getElementById("reveal-btn");

    if (relation) {
        // Create a personalized greeting
        personalGreetingElement.innerText = `Dear ${relation},`;
        personalGreetingElement.classList.remove("hidden");

        // Create a cute paragraph about the baby's birth
        const birthDetails = `
           I was born on Monday, October 1st, 2024, corresponding to the 16th of Safar, 1446 AH, at 5:23 PM in the Aga Khan Maternal and Child Care Hospital in Hyderabad, Sindh. My weight at birth was 3.4 kg, and I measured 50 cm in length. My ID band number is 596-88-25. My Baba jani became emotional upon hearing the wonderful news of my birth. My Bari Phuppo gave me Ghoonti, and my name was chosen by my Choti Phuppo after extensive research and effort to find a unique and beautiful name for me. Always Remember me in your prayers.
        `;

        birthDetailsElement.innerText = '';
        birthDetailsElement.classList.remove("hidden");
        detailsElement.innerText = birthDetails;
        detailsElement.classList.remove("hidden");

        // Show reveal button
        revealButton.classList.remove("hidden");
    } else {
        // Hide elements if no relation is selected
        personalGreetingElement.classList.add("hidden");
        birthDetailsElement.classList.add("hidden");
        detailsElement.classList.add("hidden");
        revealButton.classList.add("hidden");
    }
});

document.getElementById("reveal-btn").addEventListener("click", function () {
    startCountdown(5); // 5 seconds countdown
});

// Function to start countdown
function startCountdown(seconds) {
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerText = seconds;
    countdownElement.style.visibility = "visible"; // Show the countdown
    countdownElement.classList.remove("hidden"); // Show countdown div

    const countdownInterval = setInterval(() => {
        seconds--;
        countdownElement.innerText = seconds;

        // Add excitement effect
        countdownElement.classList.add("excitement");
        setTimeout(() => {
            countdownElement.classList.remove("excitement");
        }, 500);

        if (seconds <= 0) {
            clearInterval(countdownInterval);
            countdownElement.innerText = "🎉 Get Ready! 🎉";
            setTimeout(revealName, 1000); // Delay before revealing the name
        }
    }, 1000);
}

// Function to reveal name with pop-up effect
function revealName() {
    const namePopupElement = document.getElementById("name-popup");
    namePopupElement.classList.add("show"); // Add show class to trigger animation
}
