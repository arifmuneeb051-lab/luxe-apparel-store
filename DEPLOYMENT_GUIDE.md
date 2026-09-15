# LUXE APPAREL — Live Deployment Guide (Live Karne Ka Tareeqa)

Yeh guide aapko step-by-step samjhati hai ke aap apni **LUXE APPAREL** website ko internet par live kaise kar sakte hain taake puri dunya se koi bhi aapka store open kar sakay.

---

## Tareeqa 1: Vercel par 1-Click Live (Sab se Aasan & Recommended)

Vercel modern frontend websites ke liye dunya ka sab se tez aur muft (free) platform hai.

### Steps:
1. Apne browser mein [vercel.com](https://vercel.com) par jayein aur **Sign Up** karein (GitHub ya Google account se).
2. **Add New... ➔ Project** par click karein.
3. Agar aapka code GitHub par hai, to simply repository select karein.
4. Ya fir Vercel CLI ke zariye live karein:
   - Terminal khol kar yeh command chalayein:
     ```bash
     npx vercel
     ```
   - Enter dabate jayein. **1 minute** ke andar aapko aapki live website ka link mil jayega (maslan: `https://luxe-apparel-store.vercel.app`).

> **Note:** Hamare project mein `vercel.json` pehle se configure hai, is liye single-page routing ya reload karne par koi 404 error nahi aayega.

---

## Tareeqa 2: Netlify Drop (Bina Code Likhe Sirf Drag & Drop)

Agar aap baghair kisi terminal command ke sirf mouse se drag-and-drop kar ke live karna chahte hain:

1. Apne store folder mein **`BUILD_PRODUCTION.bat`** par double-click karein. Yeh project ko compile kar ke **`dist`** naam ka folder bana dega.
2. Apne browser mein [app.netlify.com/drop](https://app.netlify.com/drop) open karein.
3. Apne computer se **`dist`** folder ko mouse se pakad kar Netlify Drop ke box mein chorr dein (Drag & Drop).
4. **10 seconds** ke andar aapki website live ho jayegi aur aapko free live link mil jayega (jaise: `https://luxe-apparel-store.netlify.app`).

---

## Tareeqa 3: Custom Domain Lagana (.com ya .pk)

Jab aapki site Vercel ya Netlify par live ho jaye, to aap apna personal domain bhi attach kar sakte hain:
1. GoDaddy, Namecheap ya kisi bhi provider se domain khareedein (maslan `www.luxeapparel.com`).
2. Vercel / Netlify dashboard mein **Settings ➔ Domains** mein jayein.
3. Apna domain likhein aur wahan diye gaye DNS records (CNAME aur A Record) apne domain provider mein add kar dein.
4. SSL Certificate (Green padlock 🔒) free mein automatically lag jayega.

---

## Local Testing (Server On / Off Buttons)

- **Server On:** `START_STORE.bat` par double-click karein ➔ Server start ho kar browser open karega.
- **Server Off:** `STOP_STORE.bat` par double-click karein ➔ Saare server processes band ho jayenge.
