import app from './app';

const bootstrap = () => {
    app.listen(3000, () => {
        console.log('Server on port 3000');
    });
};

bootstrap();
