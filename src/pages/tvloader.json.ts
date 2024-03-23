import tvloader from "../lib/tvloader.json";

export async function get({ params, request }) {
    return { body: JSON.stringify(tvloader) };
}
