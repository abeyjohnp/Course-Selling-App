import z from 'zod'

export const SignupSchema = z.object({
    username : z.string(),
    password : z.string()
})

export const CreateCourseSchema = z.object({
    title : z.string(),
    description : z.string(),
    url : z.string()
})

export const UpdateCourseSchema = z.object({
    courseId : z.number(),
    title : z.string(),
    description : z.string(),
    url : z.string()
})

export const ContentSchema = z.object({
    courseId : z.number(),
    title : z.string(),
    videoUrl : z.string()
})

export const EnrollCourseSchema = z.object({
    courseId : z.number()
})