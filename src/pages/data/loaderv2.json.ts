import loader from "../../lib/loaderv2.json";

export async function get({ params, request }) {
    return { body: JSON.stringify(loader) };
}
