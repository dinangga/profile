# Welcome to My Profile! 👋

<div id="welcome-message"></div>

<script>
// Welcome message generator
function showWelcome() {
  const greetings = [
    "Hello there!", 
    "Welcome traveler!",
    "Hey friend!",
    "Greetings visitor!",
    "Hi there, awesome person!"
  ];
  
  const times = [
    "Hope you're having a wonderful day!",
    "Great to see you here!",
    "Thanks for stopping by!",
    "Make yourself at home!",
    "Let's explore together!"
  ];
  
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  const randomTime = times[Math.floor(Math.random() * times.length)];
  
  // Detect first visit
  if (!localStorage.getItem('visited')) {
    localStorage.setItem('visited', 'true');
    return `${randomGreeting} First time here? Awesome! ${randomTime}`;
  } else {
    return `${randomGreeting} Welcome back! ${randomTime}`;
  }
}

document.getElementById('welcome-message').innerHTML = `
  <div class="welcome-box">
    <p>${showWelcome()}</p>
    <p>This is my personal space where I share my coding journey and projects.</p>
  </div>
`;
</script>

<style>
.welcome-box {
  background-color: #f8f9fa;
  border-left: 4px solid #2f80ed;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
}
</style>
