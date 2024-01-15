//вывести из объекта (тут fetch'ем отправить запрос надо)адресс в формате 'Город: city2 Улица: street2 Дом: house2'.
// из этого же объекта вывести 'фамилия personLastName имя personFirstName купил 5 штук товаров name'
//https://raw.githubusercontent.com/jakiichu/data/main/data.json
type Adress = {
    city: string;
    street: string;
    house: string;
}

type Person = {
    lastName: string;
    firstName: string;
}

type ProductsOrder = {
    count: number;
    product: {
        name: string
    }
}

interface fetchedData {
    address: Adress;
    person: Person;
    productsOrder: ProductsOrder;
}

fetch('https://raw.githubusercontent.com/jakiichu/data/main/data.json')
    .then((response) => {
        return response.json()
    })
    .then((data: fetchedData) => {
        console.log(`Город: ${data.address.city} Улица: ${data.address.street} Дом: ${data.address.house}\nфамилия ` +
        `${data.person.lastName} имя ${data.person.firstName} купил ${data.productsOrder.count} штук товаров ${data.productsOrder.product.name}`)
    })
