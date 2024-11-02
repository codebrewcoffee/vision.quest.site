// Content for each section
const sections = {
  welcome: `
      <section id="welcome" class="active">
        <h1>Welcome to Vision Quest 2024</h1>
        <h2>Job Description for Recruitment</h2>
        <p>We want you for our workforce.</p>
        <p>We openly seek people who wish to work for our food business enterprise.</p>
        <p>Academic qualifications or past career experience does not matter!</p>
      </section>
    `,
  aboutJob: `
      <section id="aboutJob">
        <h1>About the Job</h1>
        <h2>Job Description and Required Personnel</h2>
        <p>In addition to cooking and customer service, start by learning about shop management, including training part-time workers, sales management, and proposing sales promotion plans!</p>
        <p>Academic qualifications, number of job changes, or blank periods of career do not matter.</p>
        <p>Previous occupations and working experience do not matter either.</p>
        <p>There is a place where you can learn carefully from scratch. So please rest assured.</p>
        <p>The theme of management is BEST FOR YOU. To realize this, think by yourself, decide by yourself, and do it yourself!</p>
        <p>We refer to our working staff as associates. Associate means a valued colleague.</p>
        <p>The associates work together to come up with menus, shop decorations, and events that reflect their work!</p>
        <p>If you're a person who can act spontaneously and make the shop a success, then this is the job for you.</p>
      </section>
    `,
  aboutCompany: `
      <section id="aboutCompany">
        <h1>About Our Company</h1>
        <p>Learn more about who we are and what we do.</p>
        <p>◆◇Wide range post-employment career options◇◆</p>
        <p>The time it takes to become a manager or head chef ranges from 6 months to 1 year.</p>
        <p>Other promotions such as area manager and general manager are also possible.</p>
        <p>In addition, there are all kinds of career paths, including buyer/product development, marketer, starting up and incorporating new business, and secondment to other industries.</p>
        <p>◆◇Mastering skills to be independent.◆◇</p>
        <p>We support you to develop your skills to take on challenges without fear of failure.</p>
        <p>There is a human resource development training course called HRD, which allows you to utilise content that is useful for careers both inside and outside of food service, such as personal and management skill development.</p>
        <p>For those who want to become independent, this is an environment where you can gain a lot of experience.</p>
        <p>◆◇Can develop multiple perspectives and make progress◇◆</p>
        <p>In many companies, work is subdivided into various departments and it is not common to be involved in management or administration from the very beginning of your career.</p>
        <p>However, everyone in the food business that we develop works from multiple perspectives.</p>
        <p>Another attraction of this job is the opportunity to learn and make progress in all elements of company management, including shop development, marketing, product development, cooking and sales.</p>
        <p>A number of people from overseas are already working for Yanagibashi Sogokaihatsu.</p>
        <p>We would like to show some of them.</p>
        <p>We hope that the following videos provides you a good clue about the Yanagibashi Sogokaihatsu.</p>
      </section>
    `,
  testimonials: `
      <section id="testimonials">
        <h1>Testimonials</h1>
        <p>Read what our clients and employees have to say.</p>
        <p>A number of people from overseas are already working for Yanagibashi Sogokaihatsu.</p>
        <p>We would like to show some of them.</p>
        <p>We hope that the following videos provide you a good clue about the Yanagibashi Sogokaihatsu.</p>
      </section>
    `,
  companyProfile: `
      <section id="companyProfile">
        <h1>Company Profile</h1>
        <p>■Company profile</p>
        <p>Founded　　                  2 February 2011</p>
        <p>Capital 　　                    ¥30,000,000</p>
        <p>Representative　       　  Representative of Director　Yoshiyuki Mizutani</p>
        <p>Revenue　　                   ¥728,766k</p>
        <p>Number of employees　　250(including part-time associates)</p>
        <p>Business description　　  Food service</p>
        <p>                                      Developing shops with a wide range of formats, from large restaurants to small shops.</p>
        <p>                                      The core business type is restaurants with a high proportion of alcohol.</p>
        <p>                 Demand-creating shop development is in practice.</p>
        <p>                 Develops and arranges shops in accordance to the location of the opening shops.</p>
        <p>                 Other franchisee shops are also being developed.</p>
        <p>Business premises　　     11 Shops（As of July 2024）and continuing to develop.</p>
        <p>Company history　　        2011　Established.</p>
        <p>                                                  Yanagibashi Beer Garden opened in May.</p>
        <p>　　　　　　　　　　         2012　Meieki 4-chome bar Meiyon opened in April.</p>
        <p>                                       2013　2 shops of Marutoku Fisheries Department.</p>
        <p>                                       2014　Marutoku Fisheries Department Tachikawa station south exit branch opened.</p>
        <p>                                                  Italian tavern CHIKUSA GRILL opened.</p>
        <p>                                       2015　SHIBAURA GRILL opened.</p>
        <p>                                       2016　LDK CAFÉ, I’s café opened.</p>
        <p>　　　　　　　　　　　　　2017　Serious internship ‘Magitan’ started.</p>
        <p>                                                  parcheggio opened.</p>
        <p>                                       2018　Tavern at the foot of Nagoya Castle SHIROMACHI GRILL opened.</p>
        <p>　　　　　　　　　　　　   2019　Senkichi Fushimi branch, Senkichi Wink Aich branch, Yokohama Takashimaya Beer Garden and bistro Nagoya opened.</p>
        <p>                                       2020　Kinshachi Lane BBQ terrace Beer Garden opened.</p>
        <p>                                                  Sunny Orchard Lalaport Togo branch opened.</p>
        <p>                                       2021　Meieki 2-chome 3rd Avenue opened.</p>
        <p>                                       2022　SWEETS MAGIC Lab. opened(inside Nanzan University).</p>
        <p>  　　　　　　　　　　　　 2024　Kintetsu Uehonmachi Family Beer Garden opened.</p>
        <p>Associated company　SWEETS MAGIC Co.,Ltd.</p>
      </section>
    `,
  apply: `
      <section id="apply">
        <h1>Apply</h1>
        <p>Those wishing to join the uneven Team.</p>
        <p>Those whose work philosophy is “Career rather than a job!”</p>
        <p>Those able to take responsibility for his/her action to everything.</p>
        <p>Those who want to give everything they have and use it as a source of personal growth.</p>
        <p>Those who want to realise their own ideas.</p>
        <p>＼Run by：K.K. YANAGIBASHI SOGOKAIHATSU／</p>
        <p>Realise your career by yourself.</p>
        <p>We want you to be ‘courageous and naive’, who can express opinions with confidence in order to realise your ideas and dreams.</p>
        <p>Would you like to make progress with us in such an organisation?</p>
        <p>We look forward to receiving your application!</p>
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

  // Optionally, you can add the active class if you want to manage visibility
  const allSections = contentDiv.querySelectorAll("section");
  allSections.forEach((sec) => sec.classList.remove("active"));

  // Set the active section
  const activeSection = contentDiv.querySelector(`#${section}`);
  if (activeSection) {
    activeSection.classList.add("active");
  }
}

// Initially load the welcome section
document.addEventListener("DOMContentLoaded", () => {
  loadSection("welcome");
});
