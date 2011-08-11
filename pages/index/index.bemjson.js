var person = {
    firstName: 'Roman',
    lastName: 'Rozhdestvenskiy',
    'personal-info': {
        birthdate: 'August 11th, 1986',
        location: 'Moscow, Russia',
        email: 'sbmaxx@gmail.com'
    }
};
({
    block: 'b-page',
    title: [person.firstName, person.lastName, ', CV'],
    favicon: '../../favicon.ico',
    head: [],
    content: [
        {
            block: 'b-head',
            title: [ person.firstName, person.lastName ].join(' ')
        },
        {
            block: 'b-resume',
            person: person
        },
        {
            block: 'b-foot'
        }
    ]
})

