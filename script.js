async function generateQR() {
  const size = 100;
  const inputData = document.getElementById("search").value.trim();

  if (inputData === "") {
    console.error("Input data is empty");
    return;
  }

  const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    inputData
  )}&size=${size}x${size}`;

  const qrImg = document.createElement("img");
  qrImg.src = url;

  const imageContainer = document.getElementById("imageContainer");

  imageContainer.innerHTML = "";

  imageContainer.appendChild(qrImg);

  document.getElementById("search").value = "";
}
