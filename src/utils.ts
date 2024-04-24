export function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop()!.split(';').shift();
    }
}

export function setCookie(name: string, value: string, seconds: number) {
    const endTime = Date.now() + seconds * 1000;
    const t = new Date();
    t.setTime(endTime);
    document.cookie = `${name}=${value};expires=${t.toUTCString()};path=/`;
}

export function assetUrl(file: string): string {
    return new URL(`./assets/${file}`, import.meta.url).href;
}
