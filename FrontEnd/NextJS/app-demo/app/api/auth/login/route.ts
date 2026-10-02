import {type NextRequest, NextResponse} from 'next/server';
import authApi from '@/app/services/auth/auth.service';
import * as yup from 'yup';
import {createClient} from 'redis';
import {v4 as uuidv4} from 'uuid';

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
})
const client = createClient({
    url: 'redis://default:SocialNetworkPass@localhost:6379'
});

await client.connect().then(() => {
    console.log('Connected to Redis');
}).catch((err) => {
    console.error('Error connecting to Redis:', err);
});


const TEN_MINUTE = 60*10; // 10 minutes in seconds



export async function POST(request: NextRequest) {

    const {username, password} = await schema.validate(request.json());
    const loginResponse = await authApi.login(username, password);


    const sessionID = uuidv4();

    client.set(sessionID, loginResponse.token,{EX: TEN_MINUTE}) // Expire in 10 minutes
    

    // Set the token in a cookie
    const res = NextResponse.json({user: loginResponse.user});
    res.cookies.set('token', sessionID, {httpOnly: true, path: '/', maxAge: TEN_MINUTE}); // Expire in 10 minutes

    return res;
}