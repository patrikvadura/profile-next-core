# Profile Next.js Core

Výchozí repozitář pro vývoj webových vizitek 

## Výchozí nastavení

Instalace dependencies a vývojového serveru:

```sh
npm install
```

Spuštění vývojového serveru:

```sh
npm run dev
```

Otevřte [localhost:3000](http://localhost:3000) pomocí prohlížeče pro zobrazení náhledu.

## Nastavení proměnných

V souborech `tailwind.config.ts` a `app/lib/data.json` nastavte potřebné proměnné a obsah.

```ts
theme: {
    extend: {
      colors: {
          primary: '#5B319B', 
          secondary: '#191A44',
      }
    }
}
```

```json
{
  "profile": {
    "name": "Patrik Indra",
    "nameClaim": "Finanční specialista",
    "logo": null,
    "image": "/assets/img/profileImage.webp",
    "cookie": false
  }
}
```

### OpenGraph

V souboru `app/opengraph-image.ts` nahraďte následující část kódu odpovídajícím názvem fonty knihovny Google:

```tsx
const font: string = 'Hind'
```

Zde nezapomeňte změnit název fontu uvinř řetězce (malým písmem na začátku)

```tsx
const fontFileUrlMatch = fontCss.match(
    /url\((https:\/\/fonts\.gstatic\.com\/s\/hind\/v\d+\/[^)]+)\)/,
)
```

Definice barevnosti a obsahu OpenGraph obrázku probíhá v souboru `app/lib/data.json`.

**POZOR**: Obrázek `image` musí být pro správnou funkčnost použit z absolutní adresy, nikoliv relativní.

## Deaktivace funkcí

### Cookie Consent

Odstraňte složku `app/components/CookieConsent`. V komponentě `app/ui/Footer/FooterSocial` odstraňte:

```tsx
const LazyCookieConsentComponent = lazy(() =>
    import('@/app/components/CookieConsent').then(module => ({
        default: data.profile.cookie ? module.default : () => null,
    })),
)
```

a 

```tsx
{data.profile.cookie ? (
    <Suspense fallback={<div>Loading...</div>}>
        <LazyCookieConsentComponent />
    </Suspense>
) : null}
```

### Dark Mode

Odstraňte v souborech `app/ui/Header` a `app/ui/Header/MobileNav` následující části kódu:

`app/ui/Header:`
```tsx
<div className="hidden md:inline">
    <ThemeSwitcher />
</div>
```

`app/ui/Header/MobileNav:`
```tsx
<ThemeSwitcher />
```


