document.addEventListener('DOMContentLoaded', () => {
  // Internationalization
  const translations = {
    en: {
      nav: {
        home: 'Home',
        awards: 'Awards',
        films: 'Films & Tv',
        comics: 'Comics',
        novels: 'Novels',
        shop: 'Shop',
        universe: 'Hellboy Universe',
      },
      cover: {
        title: 'THE ART OF DARKNESS',
        subtitle: 'Explore the shadows of the Mignolaverse',
      },
      bio: {
        text: 'American comic book artist and writer best known for creating Hellboy for Dark Horse Comics, part of a shared universe of titles including B.P.R.D., Abe Sapien, Lobster Johnson, and various spin-offs.',
      },
      cards: {
        title: 'Featured Works',
      },
      card1: {
        title: 'The Wild Hunt',
        desc: 'Hellboy confronts his destiny.',
      },
      card2: {
        title: 'Seed of Destruction',
        desc: 'The beginning of it all.',
      },
      card3: {
        title: 'B.P.R.D.',
        desc: 'The Devil You Know.',
      },
      card4: {
        title: 'Masterpiece',
        desc: 'Iconic Mignola style.',
      },
      form: {
        title: 'Join the Bureau',
        subtitle: 'Subscribe for updates on the Mignolaverse.',
        placeholder: 'Enter your email',
        button: 'SUBSCRIBE',
      },
      footer: {
        copyright: '&copy; 2023 Mike Mignola Fan Tribute. All rights reserved.',
      },
    },
    es: {
      nav: {
        home: 'Inicio',
        awards: 'Premios',
        films: 'Cine y TV',
        comics: 'Cómics',
        novels: 'Novelas',
        shop: 'Tienda',
        universe: 'Universo Hellboy',
      },
      cover: {
        title: 'EL ARTE DE LA OSCURIDAD',
        subtitle: 'Explora las sombras del Mignolaverse',
      },
      bio: {
        text: 'Artista y escritor de cómics estadounidense mejor conocido por crear Hellboy para Dark Horse Comics, parte de un universo compartido de títulos que incluyen B.P.R.D., Abe Sapien, Lobster Johnson y varios spin-offs.',
      },
      cards: {
        title: 'Obras Destacadas',
      },
      card1: {
        title: 'La Cacería Salvaje',
        desc: 'Hellboy enfrenta su destino.',
      },
      card2: {
        title: 'Semilla de Destrucción',
        desc: 'El comienzo de todo.',
      },
      card3: {
        title: 'B.P.R.D.',
        desc: 'El Diablo que Conoces.',
      },
      card4: {
        title: 'Obra Maestra',
        desc: 'Estilo icónico de Mignola.',
      },
      form: {
        title: 'Únete al Buró',
        subtitle: 'Suscríbete para actualizaciones del Mignolaverse.',
        placeholder: 'Ingresa tu correo',
        button: 'SUSCRIBIRSE',
      },
      footer: {
        copyright:
          '&copy; 2023 Tributo a Mike Mignola. Todos los derechos reservados.',
      },
    },
  }

  const userLang = navigator.language || navigator.userLanguage
  const lang = userLang.startsWith('es') ? 'es' : 'en'

  function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n')
      const keys = key.split('.')
      let text = translations[lang]
      keys.forEach((k) => {
        text = text[k]
      })
      if (text) {
        element.innerHTML = text
      }
    })

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.getAttribute('data-i18n-placeholder')
      const keys = key.split('.')
      let text = translations[lang]
      keys.forEach((k) => {
        text = text[k]
      })
      if (text) {
        element.placeholder = text
      }
    })
  }

  updateContent(lang)

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
        const successMsg =
          lang === 'es'
            ? `¡Gracias por unirte al Buró, ${email}!`
            : `Thank you for joining the Bureau, ${email}!`
        messageDiv.textContent = successMsg
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
