import { faker } from '@faker-js/faker';

export default function useFackerGuest() {
    const guest = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number({ "style": "international" }),
        birthDate: faker.date.birthdate({ min: 18, max: 90, mode: 'age' }),
        apt: faker.number.bigInt({ min: 300, max: 518 }),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
        },
        company: {
            name: faker.company.name(),
            catchPhrase: faker.company.catchPhrase(),
            industry: faker.company.name(),
        },
        products: { 
            product: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price(),        },
    }

  return {
    guest
  }
}
