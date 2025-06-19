document.addEventListener("DOMContentLoaded", function() {
    const advisoryList = document.getElementById("advisory-list");

    const advisoryData = [
        [
  { name: "Prof. Nicolas Hadjisavvas", position: "University of the Aegean, Greece" },
  { name: "Prof. Jozef Banas", position: "Rzeszow University of Technology, Rzeszow, Poland" },
  { name: "Prof. Annamaria Barbagallo", position: "University of Naples Federico II, Italy" },
  { name: "Prof. Sat Gupta", position: "Department of Mathematics and Statistics, University of North Carolina, USA" },
  { name: "Dr. Izhar Ahmad", position: "King Fahd University of Petroleum and Minerals, Saudi Arabia" }
],
        [
  { name: "Prof. A. Beesham", position: "University of Zululand, South Africa" },
  { name: "Prof. J. C. Yao", position: "Kaohsiung Medical University, Taiwan" },
  { name: "Prof. Dragan Djordjevic", position: "University of Niš, Serbia" },
  { name: "Prof. Kuldeep Kumar", position: "Bond University, Australia" },
  { name: "Prof. K. Bamba", position: "Fukushima University, Japan" },
  { name: "Prof. Dumitru Baleanu", position: "Institute of Space Sciences, Bucharest, Romania" },
  { name: "Prof. H. M. Baskonus", position: "Harran University, Turkey" }
],
        [
  { name: "Prof. Faizan Ahmad Khan", position: "University of Tabuk, Saudi Arabia" },
  { name: "Prof. Sergio Lopez-Permouth", position: "Ohio State University, USA" },
  { name: "Prof. Vincenzo De Filippis", position: "Università degli Studi di Messina, Italy" },
  { name: "Prof. Mainul Haque", position: "University of Nottingham, England" },
  { name: "Prof. Manosh Paul", position: "University of Glasgow, Scotland" },
  { name: "Prof. Sardar M. N. Islam", position: "Victoria University, Australia" }
]

      ];

    function createAdvisoryColumn(members) {
        return `
            <div class="advisory-column">
                ${members.map(member => `
                    <p><strong>${member.name}</strong>, ${member.position}</p>
                `).join('')}
            </div>
        `;
    }

    advisoryList.innerHTML = advisoryData.map(createAdvisoryColumn).join(" ");
});