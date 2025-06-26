import express from "express" ;
import dotenv from "dotenv" ;
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/pro.route.js" ;
import path from "path" ;

dotenv.config() ;

const app = express() ;

app.use(express.json()) ; //middleware to allow json data to be sent to the server

const __dirname = path.resolve() ;

// to ensure the visibility of products from the database when browser is opened
app.use("/api/products" , productRoutes) ;

if (process.env.NODE_ENV === "production") {
    // Serve static files from the React app
    app.use(express.static(path.join(__dirname, "frontend", "dist")));

    // Serve index.html for any unmatched route 
    app.get("/*splat", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

const PORT = process.env.PORT || 3000 ;

app.listen(PORT,()=>{
    connectDB() ;
    console.log("Server is running on port "+PORT) ;
}) ;


// console.log(process.env.MONGO_URI) ;
