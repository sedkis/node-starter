import dotenv from 'dotenv';
dotenv.config();


function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Sedky"));

console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);

