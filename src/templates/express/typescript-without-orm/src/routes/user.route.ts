import express from 'express';

import logger from '../common/config/winston.config';
import RouterConfig from '../common/config/routes.config';
import UserController from '../controllers/user.controller';

class UserRouter extends RouterConfig {
    
    constructor(app: express.Application) {
        super(app, 'user-route', '/user');
        logger.info('user router initiated');
    }
    
    configureRoutes(): express.Application {
        console.log(this.routeEndpoint);
        
        this.app.route(`${this.routeEndpoint}/list`)
            .get(UserController.list);

        return this.app;
    }
}

export default UserRouter;
