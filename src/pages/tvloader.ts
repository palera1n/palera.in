import loader from "../lib/tvloader.json";

export async function GET({ params, request }) {
    return new Response(JSON.stringify(loader), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
