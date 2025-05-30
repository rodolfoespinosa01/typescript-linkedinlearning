interface Contact extends Address {
    id: number;
    name: string;
    birthDate?: Date; //?- tells typescript that not every contact will have a b-day field
}

interface Address {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
}

let primaryContact: Contact = {
    birthDate: new Date("10-05-1991"),
    id: 12345,
    name: "Rodolfo Espinosa",
    postalCode: "07644",
    line1: "58 Monroe Street",
    city: "Lodi",
    state: "New Jersey",
}