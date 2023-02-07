import mongoose from "mongoose"

const DB_URI = "mongodb://0.0.0.0:27017/MSTODOApp"

export const dbConfig = async():Promise<void> =>{
    try {
        const connect = await mongoose.connect(DB_URI)
        console.log(`databse is connected to port ${connect.connection.host}`)
    } catch (error) {
        console.log(`unable to connect to database because of ${error} `)


    }


}

// export default dbConfig