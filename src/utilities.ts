
const theBasicsOfTypeScript = () => {
    // typescript basics here...
    let name: String;
    let age: Number;
    let isStudent: Boolean;
    let hobbies: String[] = []

    let printName : (name: String) => void

    type Person = {
    name: String;
    age?: Number;
    }

    let person: Person = {
    name: "kolwole",
    // age: 84
    }

    let lotsOfPersons:Person[];
}

export default theBasicsOfTypeScript