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
  aboutJob: `<section id="aboutJob"><h2>About the Job</h2><p>Details about the job...</p></section>`,
  aboutCompany: `<section id="aboutCompany"><h2>About Our Company</h2><p>Details about the company...</p></section>`,
  testimonials: `<section id="testimonials"><h2>Testimonials</h2><p>What people say...</p></section>`,
  companyProfile: `<section id="companyProfile"><h2>Company Profile</h2><p>Company information...</p></section>`,
  apply: `<section id="apply"><h2>Apply</h2><p>Application process...</p></section>`,
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
