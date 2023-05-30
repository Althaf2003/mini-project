// Movie data (can be loaded from an API or database)
const moviesData = [
  { title: 'Movie 1', showtime: '10:00 AM' },
  { title: 'Movie 2', showtime: '12:00 PM' },
  { title: 'Movie 3', showtime: '3:00 PM' },
  { title: 'Movie 4', showtime: '6:00 PM' },
];

// Generate movie listings
const moviesContainer = document.getElementById('movies');
moviesData.forEach(movie => {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  movieElement.innerHTML = `
    <h3>${movie.title}</h3>
    <p>Showtime: ${movie.showtime}</p>
    <button onclick="bookTicket('${movie.title}')">Book</button>
  `;
  moviesContainer.appendChild(movieElement);
});

// Handle form submission
const bookingForm = document.getElementById('book-form');
bookingForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const tickets = document.getElementById('tickets').value;
  // Process the form data (e.g., send it to the server)
  console.log(`Name: ${name}, Email: ${email}, Tickets: ${tickets}`);
  bookingForm.reset();
});

// Function to book a ticket
function bookTicket(movieTitle) {
  alert(`Ticket booked for ${movieTitle}`);
}
