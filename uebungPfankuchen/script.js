function addAll() {
    addIngredient('200g', 'Mehl');
    addIngredient('200g', 'Milch');
    addIngredient('2', 'Eier');
    addIngredient('1 Prise', 'Salz');
}

function addIngredient(menage, name) {
    document.getElementById('table').innerHTML += `
    <tr>
    <td>${menage}</td>
    <td>${name}</td>
</tr>`;
}

addAll();
