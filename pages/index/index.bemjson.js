var person = {
    firstName: 'Roman',
    lastName: 'Rozhdestvenskiy'
};
({
    block: 'b-page',
    title: [person.firstName, person.lastName, ', CV'],
    favicon: '../../favicon.ico',
    head: [],
    content: [
        {
            block: 'b-head'
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

