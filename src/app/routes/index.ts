import {Router} from 'express'
import { Student } from '../module/student.module'
import { StudentRoutes } from '../module/student/student.route'
import { UserRoutes } from '../module/user/user.route'

const router = Router()


const moduleRoutes=[
    {
        path:'/users',
        route:UserRoutes,
    },
    {
        path:'/students',
        route:StudentRoutes,
    }
]

moduleRoutes.forEach(route => router.use(route.path,route.route))

// router.use('/students',StudentRoutes)
// router.use('/users',UserRoutes)

export default router