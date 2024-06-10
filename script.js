const desks = [
    { id: 1, type: 'individual', booked: false },
    { id: 2, type: 'individual', booked: false },
    { id: 3, type: 'individual', booked: false },
    { id: 4, type: 'individual', booked: false },
    { id: 5, type: 'individual', booked: false },
    { id: 6, type: 'individual', booked: false },
    { id: 7, type: 'individual', booked: false },
    { id: 8, type: 'individual', booked: false },
    { id: 9, type: 'individual', booked: false },
    { id: 10, type: 'individual', booked: false },
    { id: 11, type: 'team', booked: false },
    { id: 12, type: 'team', booked: false },
    { id: 13, type: 'team', booked: false },
    { id: 14, type: 'team', booked: false },
    { id: 15, type: 'team', booked: false },
];


const pricing = {
    individual: {
        basic: 10,
        premium: 15,
        executive: 20
    },
    team: 25
};


let revenue = {
    basic: 0,
    premium: 0,
    executive: 0,
    team: 0
};


document.addEventListener('DOMContentLoaded', () => {
    renderDesks();
    populateDeskOptions();
    document.getElementById('booking').addEventListener('submit', handleBooking);
});


function renderDesks() {
    const deskLayout = document.querySelector('.desk-layout');
    deskLayout.innerHTML = '';
    desks.forEach(desk => {
        const deskElement = document.createElement('div');
        deskElement.className = `desk ${desk.type} ${desk.booked ? 'booked' : ''}`;
        deskElement.textContent = desk.id;
        deskLayout.appendChild(deskElement);
    });
}


function populateDeskOptions() {
    const deskSelect = document.getElementById('desk');
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
    updateTotalCost(cost);
    updateDashboard();
    populateDeskOptions(); 
}

function updateTotalCost(cost) {
    document.getElementById('total-cost').textContent = `Total Cost: $${cost.toFixed(2)}`;
}

function updateDashboard() {
    const dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = `
        <div class="dashboard-item">Basic: $${revenue.basic.toFixed(2)}</div>
        <div class="dashboard-item">Premium: $${revenue.premium.toFixed(2)}</div>
        <div class="dashboard-item">Executive: $${revenue.executive.toFixed(2)}</div>
        <div class="dashboard-item">Team: $${revenue.team.toFixed(2)}</div>
    `;
}
