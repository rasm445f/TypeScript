import { getPeople } from "./people";
import { renderPeopleList } from "./peopleList";

const container = document.getElementById("container");

if (container) {
    getPeople().then((people) => {
        renderPeopleList(container, people);
    });
}
