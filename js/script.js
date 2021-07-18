function enviarLead () {

const form = document.getElementById('form');
const formLeadBottom = document.getElementById('form-lead-bottom');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }

  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData);
  $('#modal-lead-success').modal('show'); 
  document.getElementById('form').reset();


  //Caso queira exibir uma mensagem
  // let content = document.getElementById('content');
  // let carregando = `<p>carregando ...</p>`
  // let pronto = `<p>pronto ...</p>`

  // content.innerHTML = carregando;
  // setTimeout(() => {
  //   content.innerHTML = pronto
  // }, 1000)
})
}

function enviarLeadBottom () {

  const formLeadBottom = document.getElementById('form-lead-bottom');
  
  formLeadBottom.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('name-lead-bottom').value;
    let email = document.getElementById('email-lead-bottom').value;
    let data = {
      nome,
      email,
    }
  
    let convertData = JSON.stringify(data);
  
    localStorage.setItem('lead', convertData);
    $('#modal-lead-success').modal('show'); 
    document.getElementById('form-lead-bottom').reset();
  
  })
  }