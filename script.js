const desks = generateDesks(15, 10); 
const pricing = {
    individual: { basic: 10, premium: 15, executive: 20 },
    team: 25
};
const revenue = { basic: 0, premium: 0, executive: 0, team: 0 };

let revenueChart; 

document.addEventListener('DOMContentLoaded', () => {
    renderDesks();
    populateDeskOptions();
    document.getElementById('booking').addEventListener('submit', handleBooking);
    renderDashboard();
});

function generateDesks(total, individualCount) {
    const desks = [];
    for (let i = 1; i <= total; i++) {
        desks.push({
            id: i,
            type: i <= individualCount ? 'individual' : 'team',
            booked: false
        });
    }
    return desks;
}

function renderDesks() {
    const deskLayout = document.querySelector('.desk-layout');
    deskLayout.innerHTML = '';
    desks.forEach(desk => {
        const deskElement = createDeskElement(desk);
        deskLayout.appendChild(deskElement);
    });
}

function createDeskElement(desk) {
    const deskElement = document.createElement('div');
    deskElement.className = `desk ${desk.type} ${desk.booked ? 'booked' : ''}`;
    deskElement.textContent = desk.id;
    return deskElement;
}

function populateDeskOptions() {
    const deskSelect = document.getElementById('desk');
    deskSelect.innerHTML = '';
    desks.forEach(desk => {
        if (!desk.booked) {
            const option = document.createElement('option');
            option.value = desk.id;
            option.textContent = `Desk ${desk.id} (${desk.type})`;
            deskSelect.appendChild(option);
        }
    });
}

function handleBooking(event) {
    event.preventDefault();
    const deskId = parseInt(document.getElementById('desk').value);
    const membership = document.getElementById('membership').value;
    const hours = parseInt(document.getElementById('hours').value);

    try {
        validateBooking(deskId, membership, hours);
        const cost = processBooking(deskId, membership, hours);
        updateTotalCost(cost);
        updateDashboard();
        populateDeskOptions();
        displaySuccessMessage(`Successfully booked Desk ${deskId} for ${hours} hours. Total Cost: $${cost.toFixed(2)}`);
        document.getElementById('booking').reset();
    } catch (error) {
        displayErrorMessage(error.message);
    }
}

function validateBooking(deskId, membership, hours) {
    if (isNaN(deskId) || isNaN(hours) || !['basic', 'premium', 'executive'].includes(membership)) {
        throw new Error('Invalid input values.');
    }
    const desk = desks.find(d => d.id === deskId);
    if (!desk || desk.booked) {
        throw new Error('Desk is already booked or does not exist.');
    }
    if (hours < 1 || hours > 12) {
        throw new Error('Booking duration must be between 1 and 12 hours.');
    }
}

function processBooking(deskId, membership, hours) {
    const desk = desks.find(d => d.id === deskId);
    let cost = 0;
    if (desk.type === 'individual') {
        cost = pricing.individual[membership] * hours;
        revenue[membership] += cost;
    } else if (desk.type === 'team') {
        cost = pricing.team * hours;
        revenue.team += cost;
    }

    if (hours > 3) {
        cost *= 0.9;
    }

    desk.booked = true;
    renderDesks();
    return cost;
}

function updateTotalCost(cost) {
    document.getElementById('total-cost').textContent = `Total Cost: $${cost.toFixed(2)}`;
}

function updateDashboard() {
    renderDashboard();
    renderGraph();
}

function renderDashboard() {
    const dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = `
        <div class="dashboard-item">Basic: $${revenue.basic.toFixed(2)}</div>
        <div class="dashboard-item">Premium: $${revenue.premium.toFixed(2)}</div>
        <div class="dashboard-item">Executive: $${revenue.executive.toFixed(2)}</div>
        <div class="dashboard-item">Team: $${revenue.team.toFixed(2)}</div>
    `;
}

function displaySuccessMessage(message) {
    displayMessage(message, 'success-message');
}

function displayErrorMessage(message) {
    displayMessage(message, 'error-message');
}

function displayMessage(message, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 3000);
}

function renderGraph() {
    const ctx = document.getElementById('revenueChart').getContext('2d');

    if (revenueChart) {
        revenueChart.destroy(); 
    }

    const chartData = {
        labels: ['Basic', 'Premium', 'Executive', 'Team'],
        datasets: [{
            label: 'Revenue',
            data: [revenue.basic, revenue.premium, revenue.executive, revenue.team],
            backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0']
        }]
    };

    revenueChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
