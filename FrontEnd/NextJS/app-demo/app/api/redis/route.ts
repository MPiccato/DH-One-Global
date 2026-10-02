import {type NextRequest, NextResponse} from 'next/server';
import {createClient} from 'redis';

const client = createClient({
    url: 'redis://default:SocialNetworkPass@localhost:6379'
});

await client.connect().then(() => {
    console.log('Connected to Redis');
}).catch((err) => {
    console.error('Error connecting to Redis:', err);
});

export async function GET(request: NextRequest) {
    
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key') ?? '';
    return NextResponse.json({key: await client.get(key)});
}