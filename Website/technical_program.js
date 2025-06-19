document.addEventListener("DOMContentLoaded", function() {
    const technicalProgramList = document.getElementById("technical-program-list");

    const technicalProgramData = [
        [
  { name: "Prof. Joydeep Dutta", position: "IIT Kanpur" },
  { name: "Prof. Satyajit Roy", position: "IIT Madras" },
  { name: "Prof. Natesan Srinivasan", position: "IIT Guwahati" },
  { name: "Prof. Jitendra Kumar", position: "IIT Jodhpur" },
  { name: "Prof. Manoj Kumar Yadav", position: "HRI, Allahabad" },
  { name: "Prof. Q.H. Ansari", position: "AMU, Aligarh" },
  { name: "Prof. Shamshad Hussain", position: "AMU, Aligarh" },
  { name: "Prof. Kaleem Raza Kazmi", position: "AMU, Aligarh" },
  { name: "Prof. M. S. Kadyan", position: "Kurukshetra University, Kurukshetra" },
  { name: "Prof. Somnath Bhattacharya", position: "IIT Kharagpur" },
  { name: "Prof. Anoop Chaturvedi", position: "University of Allahabad, Prayagraj" },
  { name: "Prof. R. P. Shukla", position: "University of Allahabad, Prayagraj" },
  { name: "Prof. Rajeev", position: "IIT-BHU, Varanasi" },
  { name: "Prof. Subir Das", position: "IIT-BHU, Varanasi" }
],
         [
  { name: "Prof. D. C. Dalal", position: "IIT Guwahati" },
  { name: "Prof. A. K. Shukla", position: "SVNIT, Surat" },
  { name: "Prof. Anil Kumar Yadav", position: "United College of Engineering and Research, Greater Noida" },
  { name: "Prof. Mukesh Kumar", position: "MNNIT Allahabad, Prayagraj" },
  { name: "Prof. P.K. Sahoo", position: "BITS, Pilani, Hyderabad Campus, Hyderabad" },
  { name: "Prof. Bivudutta Mishra", position: "BITS, Pilani, Hyderabad Campus, Hyderabad" },
  { name: "Prof. Joydip Dhar", position: "IIIT Gwalior" },
  { name: "Prof. Bhagwati Prasad Chamola", position: "JIIT, Noida" },
  { name: "Prof. J. K. Prajapat", position: "Central University of Rajasthan, Rajasthan" },
  { name: "Prof. Ranjan Kumar Sahoo", position: "Central University of Haryana, Haryana" },
  { name: "Prof. Farook Rahman", position: "Jadavpur University, Kolkata" },
  { name: "Prof. G. S. Khadekar", position: "Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur" }
]
,
          [
  { name: "Prof. S. Chakraberty", position: "NIT, Rourkela" },
  { name: "Prof. Debasis Kundu", position: "IIT Kanpur" },
  { name: "Prof. Muslim Malik", position: "IIT Mandi" },
  { name: "Prof J.K. Singh", position: "NSUT, Delhi" },
  { name: "Prof. S. G. Ghosh", position: "Jamia Milia Islamia, New Delhi" },
  { name: "Prof. Ranjan Kumar Mohanty", position: "SAU, New Delhi" },
  { name: "Dr. Balendu Bhooshan Upadhyay", position: "IIT Patna" },
  { name: "Dr. Pallavi Mahale", position: "VNIT, Nagpur" },
  { name: "Dr. Amit Kumar Verma", position: "IIT Patna" },
  { name: "Dr. Shikha Srivastava", position: "AMU, Aligarh" },
  { name: "Dr. Archana Dixit", position: "Gurugram University, Gurugram" },
  { name: "Dr. Raj Nandkeolyar", position: "NIT Jamshedpur" },
  { name: "Dr. G. Hariharan", position: "Sastra University, Tamil Nadu" },
  { name: "Dr. Amit Prakash", position: "NIT, Kurukshetra" },
  { name: "Dr. Sushil Kumar", position: "SVNIT, Surat" }
]
,
      ];

    function createTechnicalProgramColumn(members) {
        return `
            <div class="advisory-column">
                ${members.map(member => `
                    <p><strong>${member.name}</strong>, ${member.position}</p>
                `).join('')}
            </div>
        `;
    }

    technicalProgramList.innerHTML = technicalProgramData.map(createTechnicalProgramColumn).join(" ");
});
