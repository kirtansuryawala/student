<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student-Teacher Booking Appointment</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Student-Teacher Booking Appointment</h1>
    </header>
    <main>
        <section class="booking-form">
            <h2>Book an Appointment</h2>
            <form id="booking-form">
                <label for="student-name">Student Name:</label>
                <input type="text" id="student-name" required><br><br>
                <label for="teacher-name">Teacher Name:</label>
                <select id="teacher-name" required>
                    <option value="">Select a Teacher</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Smith">Jane Smith</option>
                    <option value="Bob Johnson">Bob Johnson</option>
                </select><br><br>
                <label for="date">Date:</label>
                <input type="date" id="date" required><br><br>
                <label for="time">Time:</label>
                <input type="time" id="time" required><br><br>
                <button type="submit">Book Appointment</button>
            </form>
        </section>
        <section class="appointment-list">
            <h2>Appointments</h2>
            <ul id="appointment-list">
                <!-- appointments will be displayed here -->
            </ul>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>
