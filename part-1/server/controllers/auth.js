let bcryptjs = require("bcryptjs");
const users = []


module.exports = {
    login: (req, res) => {
      // console.log('Logging In User')
      // console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcryptjs.compareSync(password, users[i].password)) {
          let copyUser = {...users[i]}
          delete copyUser.password
          console.log(copyUser);
          return res.status(200).send(copyUser)
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        // console.log('Registering User')
        // console.log(req.body)


        let {password} = req.body

        const hash = bcryptjs.hashSync(password)

        req.body.password = hash

        // console.log(req.body);
        users.push(req.body)
        res.status(200).send(req.body)
    }
}