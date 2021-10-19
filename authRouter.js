const Router = require ('express')
const router = new Router()
const controller = require('./authController')
const {check} = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

router.post('/registration', [
    check('username', "Name can not be empty").notEmpty(),
    check('password', "Must be more than 4 and less than 10 symbols").isLength({min: 4, max: 10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', authMiddleware, controller.getUsers)
// router.get('/users', roleMiddleware(['USER', 'ADMIN']), controller.getUsers)
// router.get('/users', roleMiddleware(['USER', 'ADMIN']), controller.getUsers)

module.exports = router
