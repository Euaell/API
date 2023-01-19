import express, { Request, Response, NextFunction } from "express"
import { ErrorHandler } from "./middlewares/ErrorHandler"

const app = express()

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "Hello World!" })
})

app.use(ErrorHandler)

export default app
