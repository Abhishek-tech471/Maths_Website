document.addEventListener("DOMContentLoaded", function () {
  const sections = {
    "committee-tree": [

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
      // Advisors
      [
        {
          title: "Advisor",
          name: "Prof. Anirudh Pradhan",
          designation: "",
          institution: "GLA University, Mathura, India",
          image: "assets/advisor-anirudh-pradhan.webp"
        },
        {
          title: "Advisor",
          name: "Prof. Saibal Ray",
          designation: "",
          institution: "",
          image: "assets/default-avatar.webp"
        }
      ],

      // Chairperson
      [
        {
          title: "Chairperson",
          name: "Prof. Manish Goyal",
          designation: "",
          institution: "GLA University, Mathura, India",
          image: "assets/advisor-manish-goyal.webp"
        }
      ],

      // Co-Chairperson
      [
        {
          title: "Co-Chairperson",
          name: "Prof. Umesh Kumar Sharma",
          designation: "",
          institution: "GLA University, Mathura, India",
          image: "assets/organizingChair-umesh.webp"
        }
      ],

      // Conveners
      [
        {
          title: "Convener",
          name: "Dr. Vipin Chandra Dubey",
          designation: "Associate Professor, Department of Mathematics",
          institution: "GLA University, Mathura, India",
          image: "assets/co-convener-vipin.webp"
        },
        {
          title: "Convener",
          name: "Dr. Mohit Kumar",
          designation: "Assistant Professor, Department of Mathematics",
          institution: "GLA University, Mathura, India",
          image: "assets/co-convener-mohit.webp"
        }
      ],

      // Co-Conveners
      [
        {
          title: "Co-Convener",
          name: "Dr. Sweta Shukla",
          designation: "Assistant Professor, Department of Mathematics",
          institution: "GLA University, Mathura, India",
          image: "assets/secretary-sweta.webp"
        },
        {
          title: "Co-Convener",
          name: "Dr. Pooja Verma",
          designation: "",
          institution: "GLA University, Mathura, India",
          image: "assets/default-avatar.webp"
        }
      ],

      // Organizing Secretaries
      [
        {
          title: "Organizing Secretary",
          name: "Dr. Mukesh Kumar",
          designation: "",
          institution: "GLA University, Mathura, India",
          image: "assets/default-avatar.webp"
        },
        {
          title: "Organizing Secretary",
          name: "Dr. Amit Kumar Saraswat",
          designation: "",
          institution: "GLA University, Mathura, India",
          image: "assets/secretary-amit.webp"
        },
        {
          title: "Organizing Secretary",
          name: "Dr. Ankita Pandey",
          designation: "",
          institution: "GLA University, Mathura, India",
          image: "assets/default-avatar.webp"
        },
        {
          title: "Organizing Secretary",
          name: "Dr. Masum Raj",
          designation: "",
          institution: "GLA University, Mathura, India",
          image: "assets/default-avatar.webp"
        }
      ],

      // Organizing Committee Members
      [
        "Dr. Ambuj Kumar Mishra",
        "Dr. Vinod Kumar Bhardwaj",
        "Dr. Priyanka Garg",
        "Dr. Sanjeev Gupta",
        "Dr. Abhishek Kumar Singh",
        "Dr. Kapil Kumar",
        "Dr. Jayati Tripathi",
        "Dr. Chandni Kumari",
        "Dr. Vineet Kumar Chaurasiya",
        "Dr. Rajeev Prasad",
        "Dr. Ankita Dubey",
        "Dr. Tanya Gupta",
        "Dr. Shruti Tiwari",
        "Dr. Nishant Kumar",
        "Dr. Umashankar Samal",
        "Dr. Jaspreet Kaur",
        "Dr. Vaishali Varshney",
        "Dr. Ruchi Singh Rajawat",
        "Dr. Swagata Nandy"
      ].map(name => ({
        title: "Organizing Committee Member",
        name,
        designation: "",
        institution: "GLA University, Mathura, India",
        image: "assets/default-avatar.webp"
      }))
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

  Object.keys(sections).forEach(sectionId => {
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




