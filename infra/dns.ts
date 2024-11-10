export const domain = {
    production: "flight-academy.co.uk",
    dev: "dev.flight-academy.co.uk",
}[$app.stage] || $app.stage + ".dev.flight-academy.co.uk";