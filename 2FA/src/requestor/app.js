const connectButton = document.getElementById("connectButton");

connectButton.addEventListener("click", async() => {
    if (window.ethereum) {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log("Connected", accounts[0]);
        } catch (error) {
            console.error("Error connecting to MetaMask:", error);
        }
    } else {
        alert("Please install MetaMask!");
    }
});