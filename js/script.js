{
    const missions = [];


    const deleteMission = (index) => {
        missions.splice(index, 1);
        render();
    };


    const render = () => {
        let displayMissions = "";

        for (const mission of missions) {
            displayMissions +=
            `<li>
                <button class="js-remove">Remove</button> ${mission.content}
            </li>
            `;
        }

        const missionsList = document.querySelector(".js-missionsList");
        
        missionsList.innerHTML = displayMissions;

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                deleteMission(index);
            });

        });

    };


    const addMission = (newMission) => {
        missions.push(
            {
                content: newMission,
            }
        );
        render();
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newMission = document.querySelector(".js-newMission").value.trim();

        if (newMission === "") {
            return;
        }

        addMission(newMission);
    };


    const init = () => {
        // render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };


    init();
};