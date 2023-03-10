//importar a dependencia do sqlite 3 
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Utilizar o objeto do banco de dados para nossas operações
//        db.serialize(() => {

//     com comando sql eu vou:

//     1: criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS place (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)


//     2: inserir dados na tabela
//     const query = `
//         INSERT INTO place (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `

//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&      auto=format&fit=crop&w=750&q=80",
//         "Papersider",
//         "Guilherme |Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastro com sucesso")
//         console.log(this)
//     }
//     db.run(query, values, afterInsertData)

//     3: consultar dados da tabela
    
//     db.all(`SELECT * FROM place`, function(err, rows) {
//         if(err) {
//            return console.log(err)
//       }
// 
//         console.log("Aqui estão seus registros: ")
//        console.log(rows)
//   })

//          4: deletar dados da tabela

//            db.run(`DELETE FROM place WHERE id = ?`, [5], function(err) {
//               if(err) {
//                 return console.log(err)       }

//                 console.log("Registro deletado com sucesso!")
//            })

// })