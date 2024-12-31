document.addEventListener('DOMContentLoaded', () => {
    const historyTableBody = document.querySelector('#historyTable tbody');
    const results = JSON.parse(localStorage.getItem('results')) || [];

    results.forEach(result => {
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        const wpmCell = document.createElement('td');

        dateCell.textContent = new Date(result.date).toLocaleString();
        wpmCell.textContent = result.wpm;

        row.appendChild(dateCell);
        row.appendChild(wpmCell);
        historyTableBody.appendChild(row);
    });

    document.getElementById('clearHistoryBtn').addEventListener('click', () => {
        localStorage.removeItem('results');
        historyTableBody.innerHTML = '';
    });
});
