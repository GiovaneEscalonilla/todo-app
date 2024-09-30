// Função para adicionar itens à lista
function addItem() {
    // Pega o valor do input
    const inputValue = document.getElementById("inputBar").value;

    // Verifica se o valor não está vazio
    if (inputValue !== "") {
        // Cria um novo item de lista (li)
        const li = document.createElement("li");

        li.innerHTML = `<input type="checkbox" id="${inputValue}"/>
  <label for="${inputValue}">${inputValue}</label>`

        // Cria o botão de remover
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        
        // Evento do botão para remover o item
        removeButton.onclick = function() {
            li.remove();
        };

        // Cria o botão de editar
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        
        // Evento do botão para editar o item
        editButton.onclick = function() {
            editItem(li);
        };

        // Adiciona o botão ao item da lista
        li.appendChild(removeButton);
        li.appendChild(editButton);

        // Adiciona o item à lista
        document.getElementById("itemList").appendChild(li);

        // Limpa o campo de input após adicionar o item
        document.getElementById("inputBar").value = "";
    }
}

// Função para alternar entre modo claro e modo escuro
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Função para editar o item da lista
function editItem(item) {
    // Pega o texto atual do item
    const currentText = item.firstChild.textContent;
    
    // Pede ao usuário um novo texto
    const newText = prompt("Edite o item:", currentText);

    // Se o usuário digitar algo, atualiza o texto do item
    if (newText !== null && newText.trim() !== "") {
        item.firstChild.textContent = newText;
    }
}