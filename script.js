// Content for each section
const sections = {
  welcome: `
      <section id="welcome">
        <div class="welcome-content">
          <h1>Welcome to Vision Quest 2024</h1>
          <h2>Your Journey Begins Here</h2>
          <p>At Vision Quest, we invite you to embark on a fulfilling career in our vibrant food business.</p>
          <p>No academic qualifications or previous experience are necessary; we value your enthusiasm and willingness to learn!</p>
          <p>Join our diverse team and help us create delightful culinary experiences for our customers.</p>
          <p>Ready to take the next step? Explore the opportunities we offer and become a part of our family.</p>
        </div>
      </section>
    `,
  aboutJob: `
      <section id="aboutJob">
        <div class="section-content">
          <h2>About the Job</h2>
          <p>Details about the job...</p>
        </div>
      </section>
    `,
  aboutCompany: `
      <section id="aboutCompany">
        <div class="section-content">
          <h2>About Our Company</h2>
          <p>Details about the company...</p>
        </div>
      </section>
    `,
  testimonials: `
      <section id="testimonials">
        <div class="section-content">
          <h2>Testimonials</h2>
          <p>What people say...</p>
        </div>
      </section>
    `,
  companyProfile: `
      <section id="companyProfile">
        <div class="section-content">
          <h2>Company Profile</h2>
          <p>Company information...</p>
        </div>
      </section>
    `,
  apply: `
      <section id="apply">
        <div class="section-content">
          <h2>Apply</h2>
          <p>Application process...</p>
        </div>
      </section>
    `,
};

// Function to load a section's content
function loadSection(section) {
  const contentDiv = document.getElementById("content");

  // Clear the content before adding new section
  contentDiv.innerHTML = "";

  // Load the content for the selected section
  contentDiv.innerHTML = sections[section];
}

// Initially load the welcome section
document.addEventListener("DOMContentLoaded", () => {
  loadSection("welcome");
});
