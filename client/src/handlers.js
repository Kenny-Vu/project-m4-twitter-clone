export const handleOnSubmit = (textValue) => {
  fetch("/api/tweet", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: textValue }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
