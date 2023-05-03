import { getPeople } from "./people.js";
import { renderPeopleList } from "./peopleList.js";

const container = document.querySelector('#people-list') as HTMLElement;

getPeople().then((people) => {
    renderPeopleList(container, people);
});

