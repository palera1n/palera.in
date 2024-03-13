import required from "../../lib/required.json";

export async function get({ params, request }) {
    return { body: JSON.stringify(required) };
}
