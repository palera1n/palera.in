async function fetchLatestRelease() {
    try {
        const response = await fetch('https://api.github.com/repos/palera1n/palera1n/releases');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data.reduce((latest, release) => {
            const version = release.tag_name;
            if (!latest || compareVersions(version, latest.version) > 0) {
                return { version, url: release.html_url };
            }
            return latest;
        }, null);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

function compareVersions(versionA, versionB) {
    const partsA = versionA.split('.').map(Number);
    const partsB = versionB.split('.').map(Number);
    for (let i = 0; i < 3; i++) {
        if (partsA[i] !== partsB[i]) {
            return partsA[i] - partsB[i];
        }
    }
    return 0;
}

async function displayLatestRelease() {
    try {
        const latestRelease = await fetchLatestRelease();

        const container = document.createElement('div');
        container.classList.add('release-container');
        container.style.paddingTop = '20px';

        const cleanedVersion = latestRelease.version
            .replace(/^v/, '')
            .replace(/-/g, ' ')
            .replace(/\./g, '.')
            .replace(/beta\./g, 'beta ');

        const latestVersionNumber = document.createElement('a');
        latestVersionNumber.textContent = 'Changelog for ' + 'palera1n ' + cleanedVersion;

        const latestVersionCL = document.createElement('h6');
        const link = document.createElement('a');
        link.href = latestRelease.url;
        link.textContent = latestVersionNumber.textContent;
        link.classList.add('clickable-button');
        link.target = "_blank";
        latestVersionCL.appendChild(link);

        container.appendChild(latestVersionCL);
        document.getElementById('changelog-container').appendChild(container);
    } catch (error) {
        console.error('Error displaying latest release:', error);
    }
}






displayLatestRelease();
