const form = document.getElementById('form-cadastrar');
const contacts = [];
const phones = [];
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha() {
    const inputName = document.getElementById('name');
    const inputPhone = document.getElementById('phone');

    if (contacts.includes(inputPhone.value)) {
        alert(`O telefone: ${inputPhone.value} ja foi inserido`);
    } else {
        contacts.push(inputPhone.value);
        phones.push(parseInt(inputPhone.value));

        let linha = '<tr>';
        linha += `<td>${inputName.value}</td>`;
        linha += `<td>${inputPhone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputName.value = '';
    inputPhone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

