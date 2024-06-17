import loader from "../../lib/credits.json";

export async function GET({ params, request }) {
    return new Response(JSON.stringify(loader), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
