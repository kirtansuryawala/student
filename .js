const bookingForm = document.getElementById('booking-form');
const appointmentList = document.getElementById('appointment-list');

let appointments = [];

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const studentName = document.getElementById('student-name').value;
    const teacherName = document.getElementById('teacher-name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const appointment = {
        studentName,
        teacherName,
        date,
        time
    };

    appointments.push(appointment);
    displayAppointments();
    bookingForm.reset();
});

function displayAppointments() {
    appointmentList.innerHTML = '';
    appointments.forEach((appointment) => {
        const li = document.createElement('li');
        li.textContent = `${appointment.studentName} - ${appointment.teacherName} - ${appointment.date} - ${appointment.time}`;
        appointmentList.appendChild(li);
    });
}

displayAppointments();