interface Contact {
    id: number;
    name: string;
}

function clone(source: Contact): Contact {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Rodolfo Espinosa"};
const b = clone(a)