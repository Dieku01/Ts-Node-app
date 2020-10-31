import mongoose from 'mongoose'
import { mongodb } from './keys'

const db = mongoose.connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Base de datos conectada"))
    .catch(err => console.log(err))
