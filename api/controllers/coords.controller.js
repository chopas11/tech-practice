const db = require('../db')

class CoordstController {
    async createCoords(req, res) {
        const {f_x, f_y} = req.body
        const newCoords = await db.query(`INSERT INTO coords(f_x, f_y) VALUES($1, $2) RETURNING *`, [f_x, f_y])
        res.json(newCoords.rows[0])
    }
    async getCoords(req, res) {
        const id = req.query.id
        const coords = await db.query(`SELECT * FROM coords`)
        res.json(coords.rows)
    }
}


module.exports = new CoordstController()