const sendEmail = (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_hunbebf','template_m1mk4mq', '#contact-form', 'HcPs1MeekaHisKKK2')
      .then(()=>{
        contactMessage.textContent = 'Message envoyé !'

        setTimeout(()=>{
            contactMessage.textContent=''
        },3000)

        contactForm.reset()
      }, () =>{
        contactMessage.textContent = 'Message non envoyé (service error)'
      })
}

contactForm.addEventListener('submit', sendEmail)