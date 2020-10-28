const db = require('./models')
const user = require('./models/user')

// db.user.create({
//     firstName: 'Fatima',
//     lastName: 'Gomez',
//     age: 1
// })
// .then(createdUser=>{
//     // the create promise returns the new row
//     // of data that has been created
//     // (otherwise it throws an error)
//     console.log('Created User: ', createdUser)
// })

// db.user.findAll()
// .then(foundUsers=>{
//     // callback recieves array of users from table
//     console.log('Found Users:', foundUsers)
// })

// db.user.findOne({
//     where: {firstName:'Taylor'}
// }).then(foundUser=>{
//     console.log('found user:', foundUser.dataValues.firstName)
// })

// db.user.findOrCreate({
//     where: {
//         firstName: 'Mateen',
//         lastName: null
//     },
//     defaults: {
//         email: 'mateen@isthecoolest.com',
//         age: 345
//     }
// })
// .then(([foundOrCreatedUser, created])=>{
//     console.log('found or created user: ', foundOrCreatedUser)
//     console.log('Already existed in database?', !created)
// })

// db.user.update({
//     age: 25
// },
// {
//     where: {
//         firstName: 'Fatima'
//     }
// }).then(numRowsChanged=>{
//     console.log(numRowsChanged)
// })

// db.user.destroy({
//     where: {firstName: 'Fatima'}
// })
// .then(numRowsDeleted=>{
//     console.log(numRowsDeleted)
// })

// get the first user in the table
// db.user.findOne({
//     where: {firstName: 'Fatima'}
// })
// .then(foundUser=>{
//     console.log("adding pet to this user:", foundUser.firstName)
//     foundUser.createPet({
//         name: 'slimy',
//         species: 'giant toad',
//         description: 'he takes anti-anxiety meds'
//     })
//     .then(createdPet =>{
//         console.log("just created:", createdPet.get())
//     })
// })
// .catch(err=>{
//     console.log(err)
// })

db.user.findByPk(4)
// .then(foundFatima=>{
//     foundFatima.getPets()
//     .then(fatimasPets=>{
//         console.log("Fatima's farm:", fatimasPets)
//         // fatimasPets.forEach(pet=>{
//         //     console.log(pet.name)
//         // })
//     })
// })

// db.pet.findOrCreate({
//     where: {name: 'Simba'},
//     default: {
//         species: 'Ginger cat',
//         description: 'maniac'
//     }
// })
// .then(([pet, created])=>{
//     db.user.findByPk(4)
//     .then(foundFatima=>{
//         foundFatima.addPet(pet)
//         console.log(`${foundFatima.firstName} is now the proud owner of ${pet.name}`)
//     })
// })

db.user.findAll({
    include: [db.pet]
})
.then(foundUsers=>{
    // each user will now have a .pets array containing any associated pets
    foundUsers.forEach(user=>{
        console.log(`${user.firstName}'s farm:`)
        user.pets.forEach(pet=>{
            console.log(pet.name)
        })
    })
})

