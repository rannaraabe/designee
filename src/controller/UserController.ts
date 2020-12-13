import { getRepository, Like } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

import config from "../config/config";
import * as jwt from "jsonwebtoken";

export class UserController {

    private userRepository = getRepository(User);

    // visualizar todos os usuarios
    async all(request: Request, response: Response, next: NextFunction) {
        return { users: await this.userRepository.find() }
    }

    // visualizar um usuario
    async one(request: Request, response: Response, next: NextFunction) {
        try {
            const user = await this.userRepository.findOne(request.params.id);
            console.log(user);
            return { user: user };
        } catch (error) {
            response.json({ erro: "Não foi possível encontrar o usuário.", error }).status(400);
        }
    }

    // salvar usuario
    async save(request: Request, response: Response, next: NextFunction) {
        try {
            const user = request.body;
            if (user.isCreator === 'TRUE')
                user.isCreator = true;
            await this.userRepository.save(user);
            response.redirect("/");
        } catch (error) {
            response.json({ erro: "Não foi possível cadastrar o usuário.", error }).status(400);
        }
    }

    // editar usuario
    async edit(request: Request, response: Response, next: NextFunction) {
        try {
            const user = await this.userRepository.findOne(request.params.id);
            if (!user) {
                response.json({ error: "Usuário não encontrado!" }).status(400);
            }
            const update = await this.userRepository.update(user.id, request.body)
            response.json(update)
        } catch (error) {
            response.json({ erro: "Não foi possível atualizar o usuário.", error }).status(400);
        }
    }

    // remover usuario
    async remove(request: Request, response: Response, next: NextFunction) {
        try {
            const user = await this.userRepository.findOne(request.params.id);
            if (!user) {
                response.json({ error: "Usuário não encontrado!" }).status(400);
            }
            const remove = await this.userRepository.remove(user);
            response.json(remove)
        } catch (error) {
            response.json({ erro: "Não foi possível remover o usuário.", error }).status(400);
        }
    }

    // fazer login
    async login(request: Request, response: Response) {
        try {
            const user = await this.userRepository.findOne({
                where: {
                    email: request.body.email
                }
            })
            if (!user) {
                response.json({ error: "Usuário não encontrado!" }).status(400);
            }

            if (user.password == request.body.password) {
                const token = jwt.sign(
                    { id: user.id, user_email: user.email, },
                    config.jwtSecret,
                    { expiresIn: "12h" }
                );

                if (user.isCreator) {
                    response.redirect("/creator/" + user.id + "/items");
                } else {
                    response.redirect("/feed");
                }
                return { "Logged": true, token }
            } else {
                return { error: "login_fail" };
            }
        } catch (error) {
            response.json({ erro: "Não foi possível realizar o login." }).status(400);
        }

    }

    // filtrar criadores
    async listCreators(request: Request, response: Response, next: NextFunction) {
        try {
            const name = "%"+request.query.name+"%"
            if(request.query.name == ''){
                return {users: await this.userRepository.find({
                    where: { isCreator: 't' }
                })}
            } else {
                return {users : await this.userRepository.find({
                    where: { isCreator: 't', fullname: Like(name) }
                })}
            }
        } catch (error) {
            response.json({erro: "Erro ao buscar usuário.", error}).status(400);
        }
    }
}
