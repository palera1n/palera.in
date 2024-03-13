import credits from "../../lib/credits.json";

export async function get({ params, request }) {
    return { body: JSON.stringify(credits) };
}
