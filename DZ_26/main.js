const votingOptions = [
    { emoji: '😃', count: 0 },
    { emoji: '😊', count: 0 },
    { emoji: '🙂', count: 0 },
    { emoji: '😐', count: 0 },
    { emoji: '😕', count: 0 },
];

function updateVotingResults() {
    const voting = document.getElementById('voting');
    voting.innerHTML = '';

    votingOptions.forEach(item => {
        const div = document.createElement('div');
        div.style.display = 'inline-block';
        const button = document.createElement('button');
        button.innerText = item.emoji;
        div.appendChild(button);
        div.appendChild(document.createElement('br'));
        const count = document.createElement('span');
        count.innerText = item.count;
        div.appendChild(count);
        voting.appendChild(div);
    });
}

document.getElementById('voting').addEventListener('click', function(e) {
    const target = e.target;
    if (target.tagName === 'BUTTON') {
        const emoji = target.innerText;
        const items = votingOptions.find(item => item.emoji === emoji);
        if (items) {
            items.count++;
            updateVotingResults();
        }
    }
});

updateVotingResults();
