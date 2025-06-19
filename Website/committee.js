document.addEventListener("DOMContentLoaded", function() {
   const sections = {
  "committee-tree": [
    // Chief Patron
    [
      {
        title: "Chief Patron",
        name: "Shri. Narayan Das Agrawal",
        designation: "Hon'ble Chancellor",
        institution: "GLA University, Mathura, India",
        image: "assets/chiefPaton.webp"
      }
    ],

    // Patron
    [
      {
        title: "Patron",
        name: "Prof. Durg Singh Chauhan",
        designation: "Pro Chancellor",
        institution: "GLA University, Mathura, India",
        image: "assets/patron-durg-singh.webp"
      },
      {
        title: "Patron",
        name: "Prof. Anoop Kumar Gupta",
        designation: "Pro-Vice-Chancellor",
        institution: "GLA University, Mathura, India",
        image: "assets/patron-anoop-gupta.webp"
      }
    ],

    // Advisor
    [
      {
        title: "Advisor",
        name: "Shri Ashok Kumar Singh",
        designation: "Registrar",
        institution: "GLA University, Mathura, India",
        image: "assets/advisor-ashok-singh.webp"
      },
      {
        title: "Advisor",
        name: "Prof. Ashish Sharma",
        designation: "Dean Academic Affairs",
        institution: "GLA University, Mathura, India",
        image: "assets/advisor-ashish-sharma.webp"
      },
      {
        title: "Advisor",
        name: "Prof. Anirudh Pradhan",
        designation: "Distinguished Professor and Director CCASS",
        institution: "GLA University, Mathura, India",
        image: "assets/advisor-anirudh-pradhan.webp"
      },
      {
        title: "Advisor",
        name: "Prof. Dilip Kumar Sharma",
        designation: "Dean International Relations & Academic Collaborations",
        institution: "GLA University, Mathura, India",
        image: "assets/advisor-dilip-sharma.webp"
      },
      {
        title: "Advisor",
        name: "Prof. Manish Goyal",
        designation: "Professor and Associate Head, Department of Mathematics",
        institution: "GLA University, Mathura, India",
        image: "assets/advisor-manish-goyal.webp"
      }
    ],

    // Organizing Chair
    [
      {
        title: "Organizing Chair",
        name: "Prof. Umesh Kumar Sharma",
        designation: "Professor, Department of Mathematics",
        institution: "GLA University, Mathura, India",
        image: "assets/organizingChair-umesh.webp"
      }
    ],

    // Conference Conveners
    [
      {
        title: "Conference Convener",
        name: "Dr. Abhishek Kumar Singh",
        designation: "Assistant Professor, Department of Mathematics",
        institution: "GLA University, Mathura, India",
        image: "assets/convener-abhishek.webp"
      },
      {
        title: "Conference Convener",
        name: "Dr. Vineet Kumar Chaurasiya",
        designation: "Assistant Professor, Department of Mathematics",
        institution: "GLA University, Mathura, India",
        image: "assets/convener-vineet.webp"
      },
    // ],

    // // Conference Co-Conveners
    // [
      {
        title: "Conference Co-Convener",
        name: "Dr. Vipin Chandra Dubey",
        designation: "Associate Professor, Department of Mathematics",
        institution: "GLA University, Mathura, India",
        image: "assets/co-convener-vipin.webp"
      },
      {
        title: "Conference Co-Convener",
        name: "Dr. Mohit Kumar",
        designation: "Assistant Professor, Department of Mathematics",
        institution: "GLA University, Mathura, India",
        image: "assets/co-convener-mohit.webp"
      }
    ],

    // Organizing Secretaries
    [
      {
        title: "Organizing Secretary",
        name: "Dr. Sweta Shukla",
        designation: "Assistant Professor, Department of Mathematics",
        institution: "GLA University, Mathura, India",
        image: "assets/secretary-sweta.webp"
      },
      {
        title: "Organizing Secretary",
        name: "Dr. Jayati Tripathi",
        designation: "Assistant Professor, Department of Mathematics",
        institution: "GLA University, Mathura, India",
        image: "assets/secretary-jayati.webp"
      },
      {
        title: "Organizing Secretary",
        name: "Dr. Kapil Kumar",
        designation: "Assistant Professor, Department of Mathematics",
        institution: "GLA University, Mathura, India",
        image: "assets/secretary-kapil.webp"
      },
      {
        title: "Organizing Secretary",
        name: "Dr. Rajeev Prasad",
        designation: "Assistant Professor, Department of Mathematics",
        institution: "GLA University, Mathura, India",
        image: "assets/secretary-rajeev.webp"
      },
      {
        title: "Organizing Secretary",
        name: "Dr. Chandni Kumari",
        designation: "Assistant Professor, Department of Mathematics",
        institution: "GLA University, Mathura, India",
        image: "assets/secretary-chandni.webp"
      }
    ]
  ]
};



    function createCommitteeCard(member) {
        return `
            <div class="committee-card">
                <h3 class="committee-title">${member.title}</h3>
                <img src="${member.image}" alt="${member.name}" class="committee-image">
                
                <p class="committee-name">${member.name}</p>
                <p class="committee-designation">${member.designation}</p>
                <p class="committee-institution">${member.institution}</p>
            </div>
        `;
    }

    Object.keys(sections).forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            sections[sectionId].forEach(level => {
                const wrapper = document.createElement("div");
                wrapper.classList.add("committee-level");
                wrapper.innerHTML = level.map(createCommitteeCard).join(" ");
                section.querySelector(".committee-list").appendChild(wrapper);
            });
        }
    });
});
