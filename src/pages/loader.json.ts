import loader from "../lib/loader.json";

export async function get({ params, request }) {
    return { body: JSON.stringify(loader) };
}
