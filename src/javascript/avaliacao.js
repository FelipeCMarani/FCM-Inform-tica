(() => {
  const form = document.querySelector('#review-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const rating = Number(data.get('rating'));
    const name = String(data.get('name') || '').trim();
    const service = String(data.get('service') || '').trim();
    const review = String(data.get('review') || '').trim();

    if (!rating || !name || !service || !review) {
      form.reportValidity();
      return;
    }

    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    const message = [
      'Olá! Quero enviar uma avaliação sobre meu atendimento na FCM Informática.',
      '',
      `Nome: ${name}`,
      `Nota: ${stars} (${rating}/5)`,
      `Serviço: ${service}`,
      `Comentário: ${review}`
    ].join('\n');

    const whatsappUrl = `https://wa.me/5512991867922?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
})();
