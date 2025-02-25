export interface User {
    firstname: string,
    lastname: string,
    email: string,
    address: Address
}

interface Address {
    street: string,
    zipCode: string,
    city: string,
    country: string
}