import { Person } from "./person";

export function renderPeopleList(container: HTMLElement, people: Person[]): void {
    container.innerHTML = ""; // clear the container first

    for (const person of people) {
        const personElem = document.createElement("div");
        personElem.className = "person";

        const nameElem = document.createElement("h2");
        nameElem.className = "person__name";
        nameElem.textContent = person.name;
        personElem.appendChild(nameElem);

        const occupationElem = document.createElement("p");
        occupationElem.className = "person__occupation";
        occupationElem.textContent = person.occupation;
        personElem.appendChild(occupationElem);

        const ageElem = document.createElement("p");
        ageElem.className = "person__age";
        ageElem.textContent = person.age.toString();
        personElem.appendChild(ageElem);

        const salaryElem = document.createElement("p");
        salaryElem.className = "person__salary";
        salaryElem.textContent = person.getSalary().toString();
        personElem.appendChild(salaryElem);

        container.appendChild(personElem);
    }
}
