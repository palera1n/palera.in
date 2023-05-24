import credits from "../lib/credits.json";
import thanks from "../lib/credits.json";
import translations from "../lib/credits.json";

export async function get({ params, request }) {
    const responses = [
        { body: JSON.stringify(credits) },
        { body: JSON.stringify(thanks) },
        { body: JSON.stringify(translations) }
    ];

    return responses;
}
