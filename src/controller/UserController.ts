import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import config from "../config/config";

import * as jwt from "jsonwebtoken";

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

    async login(request: Request, response: Response) {
        console.log(request.body);

        const user = await this.userRepository.findOne({
            where: {
                email: request.body.email
            }
        })

        if (user.password == request.body.password) {
            const token = jwt.sign(
                { id: user.id, user_email: user.email, },
                config.jwtSecret,
                { expiresIn: "12h" }
            );

            return { "Logged": true, token }
        } else {
            return { error: "login_fail" };
        }

    }

}