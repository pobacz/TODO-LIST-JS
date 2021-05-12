{
    const missions = [
        {
            content: "wash a car",
            done: false,
        },
        {
            content: "buy a coffe",
            done: true,
        },
    ];


    const addMission = (newMission) => {
        missions.push(
            {
                content:newMission,
            }
        );
        render();
    };


    const render = () => {
        let displayMissions = "";

        for (const mission of missions) {
            displayMissions +=
            `<li>
                ${mission.content}
            </li>
            `;
        }

        const missionsList = document.querySelector(".js-missionsList");
        missionsList.innerHTML = displayMissions;

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newMission = document.querySelector(".js-newMission").value.trim();

            if (newMission === "") {
                return;
            }

           addMission(newMission);

        });
    };


    const init = () => {
        render();
    };

    init();
};