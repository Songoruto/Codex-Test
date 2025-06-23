document.getElementById('item-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('item-name').value.trim();
    const pieces = document.getElementById('item-piece').value;
    const amount = document.getElementById('item-amount').value;
    const unit = document.getElementById('item-unit').value;
    const quality = document.getElementById('item-quality').value.trim();
    const brand = document.getElementById('item-brand').value.trim();
    const store = document.getElementById('item-store').value;

    const tbody = document.querySelector('#shopping-table tbody');
    const row = document.createElement('tr');

    const checkCell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkCell.appendChild(checkbox);
    row.appendChild(checkCell);

    function appendCell(text) {
        const td = document.createElement('td');
        td.textContent = text;
        row.appendChild(td);
    }

    appendCell(name);
    appendCell(pieces);
    appendCell(amount);
    appendCell(unit);
    appendCell(quality);
    appendCell(brand);
    appendCell(store);

    tbody.appendChild(row);

    e.target.reset();
});
