import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import Handlebars from 'handlebars';

// Importando rutas
import IndexRoutes from "./routes";
import LibrosRoutes from "./routes/libros";

// Inicializaciones
const app = express();
import './database'

// Configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/', IndexRoutes);
app.use('/libros', LibrosRoutes);

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Inicializar servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en puerto ${app.get('port')}`);
})