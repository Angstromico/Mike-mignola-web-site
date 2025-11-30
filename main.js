document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in')
        entry.target.classList.remove('hidden')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach((el) => observer.observe(el))

  // Form Submission Handling
  const form = document.getElementById('newsletter-form')
  const messageDiv = document.getElementById('form-message')

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const email = form.querySelector('input[type="email"]').value

      // Simulate API call
      setTimeout(() => {
        form.reset()
        messageDiv.textContent = `Thank you for joining the Bureau, ${email}!`
        messageDiv.style.color = '#2ede98'
        messageDiv.classList.add('fade-in')

        setTimeout(() => {
          messageDiv.textContent = ''
        }, 5000)
      }, 1000)
    })
  }

  // Card Hover Effect (JavaScript enhancement)
  const cards = document.querySelectorAll('.card')
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)'
      card.style.transition = 'transform 0.3s ease'
    })
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)'
    })
  })
})
