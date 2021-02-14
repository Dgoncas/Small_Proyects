class Address{
    street: string;
    zipcode: string;
}

class Company{
    name: string;
    catchPhrase: string;
}

export class User{
    id: number;
    username: string;
    name: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
    company: Company;
}