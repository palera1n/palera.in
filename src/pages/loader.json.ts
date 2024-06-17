import loader from "../lib/loader.json";

export async function GET({ params, request }) {
    return new Response(JSON.stringify(loader), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
