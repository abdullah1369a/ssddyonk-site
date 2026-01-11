function submitForm(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value
    };

    fetch("https://formsubmit.co/YOUR_EMAIL_HERE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(() => {
        window.location.href = "thanks.html";
    })
    .catch(() => {
        document.getElementById("status").innerText = "حدث خطأ، حاول مرة أخرى";
    });

    return false;
}