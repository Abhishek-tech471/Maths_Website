document.addEventListener("DOMContentLoaded", function () {
  const sections = {
    "committee-tree": [

      [
      {
        title: "Chief Patron",
        name: "Shri. Narayan Das Agrawal",
        designation: "Hon'ble Chancellor",
        institution: "GLA University, Mathura, India",
      }
    ],

    // Patron
    [
      // {
      //   title: "Patron",
      //   name: "Prof. Durg Singh Chauhan",
      //   designation: "Pro Chancellor",
      //   institution: "GLA University, Mathura, India",
      // },
      {
        title: "Patron",
        name: "Prof. Anup Kumar Gupta",
        designation: "Vice-Chancellor",
        institution: "GLA University, Mathura, India",
      }
    ],
      // Advisors
      [
        {
          title: "Advisor",
          name: "Shri Ashok Kumar Singh",
          designation: "Registrar",
          institution: "GLA University, Mathura, India",
        },
        {
          title: "Advisor",
          name: "Prof. Ashish Sharma",
          designation: "Dean Academic Affairs",
          institution: "GLA University, Mathura, India",
        },
        {
          title: "Advisor",
          name: "Prof. Anirudh Pradhan",
          designation: "Professor, Emeritus & Research Advisor",
          institution: "GLA University, Mathura, India",
        },
        // {
        //   title: "Advisor",
        //   name: "Prof. Saibal Ray",
        //   designation: "",
        //   institution: "GLA University, Mathura, India",
        // }
      ],

      // Chairperson
      [
        {
          title: "Chairperson",
          name: "Prof. Manish Goyal",
          designation: "Professor and Head Dept. of Mathematics",
          institution: "GLA University, Mathura, India",
        }
      ],

      // Co-Chairperson
      [
        {
          title: "Co-Chairperson",
          name: "Prof. Umesh Kumar Sharma",
          designation: "Professor, Dept. of Mathematics",
          institution: "GLA University, Mathura, India",
        }
      ],

      // Conveners
      [
        {
          title: "Convener",
          name: "Dr. Vipin Chandra Dubey",
          designation: "Associate Professor, Department of Mathematics",
          institution: "GLA University, Mathura, India",
        },
        {
          title: "Convener",
          name: "Dr. Mohit Kumar",
          designation: "Assistant Professor, Department of Mathematics",
          institution: "GLA University, Mathura, India",
        }
      ],

      // Co-Conveners
      [
        {
          title: "Co-Convener",
          name: "Dr. Sweta Shukla",
          designation: "Assistant Professor, Department of Mathematics",
          institution: "GLA University, Mathura, India",
        },
        {
          title: "Co-Convener",
          name: "Dr. Pooja Verma",
          designation: "Assistant Professor, Department of Mathematics",
          institution: "GLA University, Mathura, India",
        }
      ],

      // Organizing Secretaries
      [
        {
          title: "Organizing Secretary",
          name: "Dr. Mukesh Kumar",
          designation: "Assistant Professor, Department of Mathematics",
          institution: "GLA University, Mathura, India",
        },
        {
          title: "Organizing Secretary",
          name: "Dr. Amit Kumar Saraswat",
          designation: "Assistant Professor, Department of Mathematics",
          institution: "GLA University, Mathura, India",
        },
        {
          title: "Organizing Secretary",
          name: "Dr. Ankita Pandey",
          designation: "Assistant Professor, Department of Mathematics",
          institution: "GLA University, Mathura, India",
        },
        {
          title: "Organizing Secretary",
          name: "Dr. Masum Raj",
          designation: "Assistant Professor, Department of Mathematics",
          institution: "GLA University, Mathura, India",
        }
      ],

      // Organizing Committee Members
      [
        " All the faculty members of the Department of Mathematics, GLA University, Mathura."
      ].map(name => ({
        title: "Organizing Committee Member",
        name,
        designation: "",
        institution: "GLA University, Mathura, India",
      }))
    ]
  };

  function createCommitteeCard(member) {
    return `
      <div class="committee-card">
        <h3 class="committee-title">${member.title}</h3>
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




