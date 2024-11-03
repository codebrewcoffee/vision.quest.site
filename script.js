// Content for each section
const sections = {
  // Welcome section content
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
  // Updated About the Job section content
  aboutJob: `
      <section id="aboutJob">
        <div class="section-content">
          <h2>Job Description and Requirements</h2>
          <p>In addition to cooking and customer service, start by learning about shop management, including training part-time workers, sales management, and proposing sales promotion plans!</p>
          
          <p>Academic qualifications, number of job changes, or blank periods in your career do not matter. Previous occupations and working experience do not matter either. There is a place where you can learn carefully from scratch. So please rest assured.</p>
          
          <p>The theme of management is BEST FOR YOU. To realize this, think by yourself, decide by yourself, and do it yourself!</p>
          
          <p>We refer to our working staff as associates. Associate means a valued colleague. The associates work together to come up with menus, shop decorations, and events that reflect their work!</p>
          
          <p>If you're a person who can act spontaneously and make the shop a success, then this is the job for you.</p>
        </div>
      </section>
    `,
  // About Our Company section content
  aboutCompany: `
      <section id="aboutCompany">
        <div class="section-content">
          <h2>Career Path and Development</h2>
          <p>◆◇Wide range post-employment career options◇◆</p>
          <p>The time it takes to become a manager or head chef ranges from 6 months to 1 year. Other promotions such as area manager and general manager are also possible. In addition, there are all kinds of career paths, including buyer/product development, marketer, starting up and incorporating new business, and secondment to other industries.</p>
          
          <p>◆◇Mastering skills to be independent.◆◇</p>
          <p>We support you to develop your skills to take on challenges without fear of failure. There is a human resource development training course called HRD, which allows you to utilise content that is useful for careers both inside and outside of food service, such as personal and management skill development. For those who want to become independent, this is an environment where you can gain a lot of experience.</p>
          
          <p>◆◇Can develop multiple perspectives and make progress◇◆</p>
          <p>In many companies, work is subdivided into various departments and it is not common to be involved in management or administration from the very beginning of your career. However, everyone in the food business that we develop, works from multiple perspectives.</p>
          
          <p>Another attraction of this job is the opportunity to learn and make progress in all elements of company management, including shop development, marketing, product development, cooking and sales.</p>
          
          <p>A number of people from overseas are already working for Yanagibashi Sogokaihatsu.</p>
          
          <p>We would like to show some of them.</p>
          
          <p>We hope that the following videos provide you a good clue about the Yanagibashi Sogokaihatsu.</p>
        </div>
      </section>
    `,
  // Testimonials section content
  testimonials: `
      <section id="testimonials">
        <div class="section-content">
          <h2>Testimonials</h2>
          <p>What people say...</p>
        </div>
      </section>
    `,
  // Company Profile section content
  companyProfile: `
      <section id="companyProfile">
        <div class="section-content">
          <h2>Company Profile</h2>
          <ul>
            <li><strong>Founded:</strong> 2 February 2011</li>
            <li><strong>Capital:</strong> ¥30,000,000</li>
            <li><strong>Representative:</strong> Yoshiyuki Mizutani, Representative Director</li>
            <li><strong>Revenue:</strong> ¥728,766k</li>
            <li><strong>Number of Employees:</strong> 250 (including part-time associates)</li>
            <li><strong>Business Description:</strong><br>
              Food service, developing shops with a wide range of formats, from large restaurants to small shops. The core business type is restaurants with a high proportion of alcohol. Demand-creating shop development is in practice, with shops developed and arranged according to their location. Other franchisee shops are also being developed.
            </li>
            <li><strong>Business Premises:</strong> 11 Shops (As of July 2024) and continuing to develop.</li>
          </ul>
          
          <h3>Company History</h3>
          <ul>
            <li><strong>2011:</strong> Established; Yanagibashi Beer Garden opened in May.</li>
            <li><strong>2012:</strong> Meieki 4-chome bar Meiyon opened in April.</li>
            <li><strong>2013:</strong> 2 shops of Marutoku Fisheries Department opened.</li>
            <li><strong>2014:</strong> Marutoku Fisheries Department Tachikawa Station south exit branch opened; Italian tavern CHIKUSA GRILL opened.</li>
            <li><strong>2015:</strong> SHIBAURA GRILL opened.</li>
            <li><strong>2016:</strong> LDK CAFÉ and I’s café opened.</li>
            <li><strong>2017:</strong> Serious internship ‘Magitan’ started; parcheggio opened.</li>
            <li><strong>2018:</strong> Tavern at the foot of Nagoya Castle SHIROMACHI GRILL opened.</li>
            <li><strong>2019:</strong> Senkichi Fushimi branch, Senkichi Wink Aich branch, Yokohama Takashimaya Beer Garden, and bistro Nagoya opened.</li>
            <li><strong>2020:</strong> Kinshachi Lane BBQ terrace Beer Garden opened; Sunny Orchard Lalaport Togo branch opened.</li>
            <li><strong>2021:</strong> Meieki 2-chome 3rd Avenue opened.</li>
            <li><strong>2022:</strong> SWEETS MAGIC Lab. opened (inside Nanzan University).</li>
            <li><strong>2024:</strong> Kintetsu Uehonmachi Family Beer Garden opened.</li>
          </ul>
          
          <strong>Associated Company:</strong> SWEETS MAGIC Co., Ltd.
        </div>
      </section>
    `,
  // Apply section content
  apply: `
      <section id="apply">
        <div class="section-content">
          <h2>Apply</h2>
          <p>Those wishing to join the uneven Team.</p>
          <p>Those whose work philosophy is “Career rather than a job!”</p>
          <p>Those able to take responsibility for his/her action to everything.</p>
          <p>Those who want to give everything they have and use it as a source of personal growth.</p>
          <p>Those who want to realise their own ideas.</p>
          <p>＼Run by：K.K. YANAGIBASHI SOGOKAIHATSU／</p>
          <p>Realise your career by yourself.</p>
          <p>We want you to be ‘courageous and naive’, who can express opinions with confidence in order to realise your ideas and dreams.</p>
          <p>Would you like to make progress with us in such an organisation?</p>
          <p>We look forward to receive your application!</p>
        </div>
      </section>
    `,
};

// Function to load a section's content
function loadSection(section) {
  // Get the main content div by its ID
  const contentDiv = document.getElementById("content");

  // Clear the content before adding the new section
  contentDiv.innerHTML = "";

  // Load the content for the selected section
  contentDiv.innerHTML = sections[section];
}

// Initially load the welcome section when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  loadSection("welcome");
});
