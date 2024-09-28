// JavaScript function to add input to the list
 // Função para adicionar itens à lista
 function addItem() {
    // Pega o valor do input
    const inputValue = document.getElementById("inputBar").value;

    // Verifica se o valor não está vazio
    if (inputValue !== "") {
        // Cria um novo item de lista (li)
        const li = document.createElement("li");

        // Add an event listener to toggle strikethrough on click
        li.addEventListener('click', function() {
            li.classList.toggle('strikethrough');
        });

        // Cria um texto para o item de lista
        li.textContent = inputValue;

        // Cria o botão de remover
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        
        // Adiciona um evento ao botão para remover o item
        removeButton.onclick = function() {
            li.remove();
        };

        // Adiciona o botão ao item da lista
        li.appendChild(removeButton);

        // Adiciona o item à lista
        document.getElementById("itemList").appendChild(li);

        // Limpa o campo de input após adicionar o item
        document.getElementById("inputBar").value = "";
    }
}