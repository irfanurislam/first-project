import {Router} from 'express'
import { Student } from '../module/student.module'
import { StudentRoutes } from '../module/student/student.route'
import { UserRoutes } from '../module/user/user.route'
import { academicSemesterRoutes } from '../module/academicSemester/academicSemester.route'
import { academicFacultyRoutes } from '../module/academicFaculty/academicFaculty.route'

const router = Router()


const moduleRoutes=[
    {
        path:'/users',
        route:UserRoutes,
    },
    {
        path:'/students',
        route:StudentRoutes,
    },
    {
        path:'/academic-semesters',
        route:academicSemesterRoutes,
    },
    {
        path:'/academic-faculties',
        route:academicFacultyRoutes,
    }
]

moduleRoutes.forEach(route => router.use(route.path,route.route))

// router.use('/students',StudentRoutes)
// router.use('/users',UserRoutes)

export default router