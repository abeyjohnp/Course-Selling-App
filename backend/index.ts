import {prisma} from "./db"
import jwt from "jsonwebtoken"
import express from "express"
import cors from "cors"

import { CreateCourseSchema, SignupSchema, UpdateCourseSchema , ContentSchema, EnrollCourseSchema} from "./types"

const app =  express()
app.use(cors())
app.use(express.json())

app.post("/admin/signin", async (req, res) => {
    const {success, data} = SignupSchema.safeParse(req.body);

    if (!success) {
        res.status(403).json({
            message: "Incorrect inputs"
        })
        return 
    }

    const userExists = await prisma.admin.findFirst({
        where: {
            username: data.username,
            password: data.password
        }
    })

    if (!userExists) {
        res.status(403).json({
            message: "Incorrect creds"
        })
        return
    }

    const token = jwt.sign(userExists.id.toString(), "admin_jwt_secret_123llala")

    res.json({
        token 
    })
})

app.post("/admin/course", async (req, res) => {
    const token = req.headers.token as string ;
    const userId = jwt.verify(token, "admin_jwt_secret_123llala");

    if (!userId) {
        res.status(403).json({
            message: "Incorrect token"
        })
        return 
    }

    const {success, data} = CreateCourseSchema.safeParse(req.body);
    if (!success) {
        return res.status(403).json({
            message: "Incorrect inputs"
        })
    }

    const response = await prisma.courses.create({
        data: {
            title: data.title,
            description: data.description,
            thumbnail: data.url
        }
    })
    res.json({
        id: response.id
    })

})
app.put("/admin/course", async(req, res) => {
    const token = req.headers.token as string;
    const userId = jwt.verify(token, "admin_jwt_secret_123llala");
    if (!userId) {
        res.status(403).json({
            message: "Incorrect token"
        })
        return 
    }

    const {success, data} = UpdateCourseSchema.safeParse(req.body)
    if (!success)
    {
        return res.status(403).json({
            message : "Incorrect inputs!"
        })
    }
    
    const updatedCourse = await prisma.courses.update({
        where : 
        {
            id : data.courseId
        },
        data:
        {
            title : data.title,
            description : data.description,
            thumbnail : data.url
        }
    })
    res.json({
        message : "Course updated successfully!",
        course : updatedCourse
    })

})

app.post("/admin/content", async(req, res) => {
    const token = req.headers.token as string
    const userId = jwt.verify(token, "admin_jwt_secret_123llala");

     if (!userId) {
        res.status(403).json({
            message: "Incorrect token"
        })
        return 
    }

    const {success, data} = ContentSchema.safeParse(req.body)
    if (!success) {
        res.status(403).json({
            message: "Incorrect inputs"
        });
        return;
    }

    const content = await prisma.courseContent.create({
        data : {
            title : data.title,
            videoUrl : data.videoUrl,
            courseId: data.courseId
        }
    })

    res.json({
        message: "Content added successfully",
        contentId: content.id
    });
})

app.get("/admin/enrollments", async(req, res) => {
    const token = req.headers.token as string
    const userId = jwt.verify(token, "admin_jwt_secret_123llala");

     if (!userId) {
        res.status(403).json({
            message: "Incorrect token"
        })
        return 
    }

    const enrollments = await prisma.enrollments.findMany()

    res.json(enrollments)
})

app.get("/admin/courses", async(req, res) => {
    const token = req.headers.token as string
    const userId = jwt.verify(token, "admin_jwt_secret_123llala");

     if (!userId) {
        res.status(403).json({
            message: "Incorrect token"
        })
        return 
    }

    const courseslist = await prisma.courses.findMany()

    res.json(courseslist)
})

//// USER ENDPOINTS
app.post("/user/signup", async (req, res) => {
    const {success, data} = SignupSchema.safeParse(req.body);

    if (!success) {
        res.status(403).json({
            message: "Incorrect inputs"
        })
        return 
    }
    const username = data.username
    const password = data.password

    const existingUserId = await prisma.users.findFirst({
        where:
        {
            username : username
        }
    })

    if (existingUserId)
    {
        return res.status(400).json({
            message : "USER EXISTS!"
        })
    }

    const usersignup = await prisma.users.create({
        data:
        {
            username : username,
            password : password
        }
        
    })

    res.json({id : usersignup.id })
})

app.post("/user/signin", async(req, res) => {
    const {success, data} = SignupSchema.safeParse(req.body);

    if (!success) {
        res.status(403).json({
            message: "Incorrect inputs"
        })
        return 
    }
    const username = data.username
    const password = data.password

    const existingUserId = await prisma.users.findFirst({
        where:
        {
            username : username,
            password : password
        }
    })

    if (!existingUserId)
    {
        return res.status(400).json({
            message : "INVALID CREDS!"
        })
    }

    const token = jwt.sign(existingUserId.id.toString(), "admin_jwt_secret_123llala")
    res.json({
        token 
    })

})

app.get("/user/courses", async(req, res) => {
    const token = req.headers.token as string
    const userId = jwt.verify(token, "admin_jwt_secret_123llala");

     if (!userId) {
        res.status(403).json({
            message: "Incorrect token"
        })
        return 
    }

    const allCourses = await prisma.courses.findMany({
        orderBy :
        {
            id: "asc"
        }
    });
    res.json({
        courses: allCourses
    });
})

app.post("/user/enroll", async(req, res) => {
    const token = req.headers.token as string
    const userId = jwt.verify(token, "admin_jwt_secret_123llala");

     if (!userId) {
        res.status(403).json({
            message: "Incorrect token"
        })
        return 
    }

    const {success, data} = EnrollCourseSchema.safeParse(req.body)
    if (!success) {
        res.status(403).json({
            message: "Incorrect inputs"
        });
        return;
    }   

    await prisma.enrollments.create({
        data : {
            userId : Number(userId),
            courseId : data.courseId

        }
    })

})

app.get("/user/course/content/:courseId", async (req, res) => {
    const token = req.headers.token as string;
    const userId = jwt.verify(token, "admin_jwt_secret_123llala");
    if (!userId) {
        res.status(403).json({
            message: "Incorrect token"
        });
        return;
    }

    const courseId = Number(req.params.courseId);

    const isEnrolled = await prisma.enrollments.findFirst({
        where: {
            userId: Number(userId),
            courseId: courseId
        }
    })
    if (!isEnrolled) {
        res.status(403).json({
            message: "You are not enrolled in this course"
        });
        return;
    }
    const content = await prisma.courseContent.findMany({
        where: {
            courseId: courseId
        }
    });
    res.json({
        content
    });
});
app.listen(3001, () =>
{
    console.log("Backend is running successfully!")
});