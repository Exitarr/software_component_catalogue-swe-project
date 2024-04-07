import JWT from 'jsonwebtoken'
import { createHmac, randomBytes } from 'node:crypto'
import { db } from '../lib/db.js'

const JWT_SECRET = 'Sourav@123'

const generateHash = (password, salt) => {
    const hashedPassword = createHmac('sha256', salt).update(password).digest('hex')

    return hashedPassword;
}


const createUserService = async ({payload}) => {
    const {userName, name, email, password} = payload;
    const salt = randomBytes(16).toString('hex');

    const hashedPassword = generateHash(password, salt);

    const user = await db.user.create({
        data : {
            userName,
            name,
            email,
            password : hashedPassword,
            salt
        }
    })

    return "User created successfully!";
}

const loginUserService = async ({payload}) => {
    const { email , password } = payload;
    const user = await db.user.findUnique({
        where : {
            email
        }
    })

    if(!user){
        throw new Error("User not found");
    }

    if( generateHash(password, user.salt) !== user.password ){
        throw new Error("Invalid password");
    }

    const token = JWT.sign({userId : user.id}, JWT_SECRET, {expiresIn : '30d'});
    
    return token;

}

const decodeJWTtoken = (token) => {
    return JWT.verify(token , JWT_SECRET) ;
}

export { createUserService , loginUserService  , decodeJWTtoken }