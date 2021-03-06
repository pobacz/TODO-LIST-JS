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
        let missionsHtml = "";

        for (const mission of missions) {
            missionsHtml +=

            `<li class="list__item">
                <button class="list__button list__button--done js-done">${mission.done ? "✔" : ""}</button>
                
                   <span class="${mission.done ? "list__missionDone" : ""}">${mission.content}</span>

                <button class="list__button list__button--remove js-remove">🗑</button>
            </li>
            `;
        }

        const missionsList = document.querySelector(".js-missionsList");

        missionsList.innerHTML = missionsHtml;

        addEvents();

    };


    const newMissionElement = document.querySelector(".js-newMission");

    const clearElement = () => {
        newMissionElement.value = "";
    };

    const applyFocus = () => {
        newMissionElement.focus();
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newMission = document.querySelector(".js-newMission").value.trim();

        if (newMission !== "") {
            addMission(newMission);
            clearElement();
        }
        applyFocus();
    };


    const init = () => {

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };


    init();
};