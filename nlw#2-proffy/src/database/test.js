const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {
    //inserir dados

    proffyValue = {
        name: "Diego Fernandes", 
        avatar: "https://avatars1.githubusercontent.com/u/2254731?s=120&v=4", 
        whatssap: "986089877", 
        bio: 'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.'
    }

    classValue = {
        subject: 1, 
        cost: "20", 
        //proffy_id virá pelo bando de dados
    }
    
    classScheduleValues = [
        //Class_id virá pelo bando de dados, após cadastrarmos a class
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //Consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "420"
    `)
    // console.log(selectClassesSchedules)
})