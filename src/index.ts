import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import {Request, Response} from "express";
import {Routes} from "./routes";

createConnection().then(async connection => {

    var cors = require('cors')

    // create express app
    const app = express();
    //set cors
    app.use('*', cors());

    app.use(express.json())

    // set the view engine to ejs
    // app.set('view engine', 'ejs');

    // app.get('/site/', function(req, res) {
    //     res.render('pages/index');
    // });

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.json(result) : undefined);

            } else if (result !== null && result !== undefined) {
                // res.json(result);
                res.json(result);
            }
        });
    });

    app.post('/teste', (req, res) => {
        res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    console.log("Express server has started on port 3000.");

}).catch(error => console.log(error));
