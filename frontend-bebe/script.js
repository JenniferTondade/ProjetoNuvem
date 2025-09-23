async function carregarDados() {
  try {
    const response = await fetch("http://localhost:25000/api/data");
    const data = await response.json();

    const container = document.getElementById('cards-container');

    data.checklist.forEach(cat => {
      const card = document.createElement('div');
      card.className = `card ${cat.cor}`;

      const listaItens = cat.itens.map(item => `<li>${item}</li>`).join('');

      card.innerHTML = `
        <img src="${cat.foto}" alt="${cat.categoria}">
        <h3>${cat.icone} ${cat.categoria}</h3>
        <ul>${listaItens}</ul>
      `;

      container.appendChild(card);
    });

    // Delegação de evento para marcar checklist
    container.addEventListener('click', e => {
      if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
      }
    });

  } catch (error) {
    console.error("Erro ao carregar API:", error);
  }
}

document.addEventListener('DOMContentLoaded', carregarDados);
