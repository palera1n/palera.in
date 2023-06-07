import credits from "../lib/loader.json";

export async function get({ params, request }) {
    return { body: JSON.stringify(credits) };
}
