{
    const missions = [];


    const deleteMission = (index) => {
        missions.splice(index, 1);
        render();
    };


    const switchDone = (index) => {
        missions[index].done = !missions[index].done;
        render();
    };


    const addMission = (newMission) => {
        missions.push(
            {
                content: newMission,
            }
        );
        render();
    };


    const addEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                deleteMission(index);
            });
        });

        const switchDoneButtons = document.querySelectorAll(".js-done");

        switchDoneButtons.forEach((switchDoneButton, index) => {
            switchDoneButton.addEventListener("click", () => {
                switchDone(index);
            });
        });
    };


    const render = () => {
        let displayMissions = "";

        for (const mission of missions) {
            displayMissions +=
            `<li>
                <button class="js-done">Mark as done</button>
                    ${mission.content}
                <button class="js-remove">Remove</button>
            </li>
            `;
        }

        const missionsList = document.querySelector(".js-missionsList");

        missionsList.innerHTML = displayMissions;

        addEvents();

    };


    const newMissionElement = document.querySelector(".js-newMission");

    const clearElement = () => {
        newMissionElement.value = "";
    }

    const applyFocus = () => {
        newMissionElement.focus();
    }


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newMission = document.querySelector(".js-newMission").value.trim();

        if (newMission !== "") {
            addMission(newMission);
            clearElement();
            applyFocus();
        }
    };


    const init = () => {

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);


    };


    init();
};