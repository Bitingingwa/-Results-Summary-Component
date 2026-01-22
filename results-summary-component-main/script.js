fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('summary-list');
    
    data.forEach(item => {
      const html = `
        <div class="summary-item" style="background-color: ${item.bg}">
          <div class="item-left">
            <img src="${item.icon}" alt="">
            <span style="color: ${item.color}">${item.category}</span>
          </div>
          <div class="score-text">
            ${item.score} <span>/ 100</span>
          </div>
        </div>
      `;
      list.innerHTML += html;
    });
  })
  .catch(error => console.error('Error loading JSON:', error));