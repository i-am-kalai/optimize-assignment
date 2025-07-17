# Submission Document

## Application live URL

https://optimize-assignment-self.vercel.app/

## Code changes comparison
https://github.com/SravanScenarix/optimize-assignment/compare/main...i-am-kalai:optimize-assignment:main

## Performance optimizations

### Image type conversion

1.  **Where**: `public/*.png`
2.  **What**: Transformed `.png` images to `.webp`
3.  **Why**: WebP is the preferred format for images transferred over the internet to web applications. It is lightweight and restores close to the actual quality. Here, after performing the transformation, the total size of the images was reduced to **5,645 kB** from **97,045 kB**. A **94.2%** reduction.
4.  **Reference**: https://developers.google.com/speed/webp

---

### Video type conversion

1.  **Where**: `public/*.mp4`
2.  **What**: Transformed `.mp4` videos to `.webm`
3.  **Why**: WebM is the preferred format for videos transferred over the internet to web applications. It is lightweight and restores close to the actual quality. Here, after performing the transformation, the total size of the video was reduced to **8,314 kB** from **60,752 kB**. A **86.31%** reduction.
4.  **Reference**: https://www.gumlet.com/learn/webm-vs-mp4/

---

### Fonts

1.  **Where**: `app/layout.tsx`
2.  **What**: Downloaded fonts CSS from Google and removed unused font weights
3.  **Why**: The initial implementation of downloading all fonts in a single request was too big, and since it is a CSS request, it was render-blocking. To overcome this, cURLed the fonts API and downloaded the CSS. Picked only the font weight with 400 and removed the others since there was of no use the other. The outcome was not as significant as expected but definitely worth the implementation.

---

### CDN for assets

1.  **Where**: `public/*.png`, `public/*.mp4`, `app/layout.tsx`, `app/components/BlogPostCard.tsx`, `app/components/Gallery.tsx`, `app/components/Hero.tsx`.
2.  **What**: Moved assets like images, videos, and CSS for fonts to a hosted CDN.
3.  **Why**: It is advised to keep large assets away from the build and be accessed over the internet. This will reduce the size, time to create, ship, and deploy the build. If the application is served from a web server on the internet, this will also benefit lower load times since asset requests will now go to the CDN and not the web server, reducing the load on it. If the application is already deployed in CDNs, this will still be beneficial as it will reduce DNS resolving latency and directly access the CDN. Note: What I have used here is the storage blob provided by vercel. From what I understand, it is a typical storage service and it has a CDN front to it. There are specialised CDNs that serve images in optimised ways, which can be used for the best results. Example: [ImageKit](https://imagekit.io/)
4.  **Reference**: https://www.digitalocean.com/community/tutorials/using-a-cdn-to-speed-up-static-content-delivery

---

### Images load

1.  **Where**: `app/components/Gallery.tsx`.
2.  **What**: Added lazy loading for images below the fold.
3.  **Why**: Images that are not immediately visible are in no rush to be requested any before the FCP contents. So, they load at a time when they are visited. Combined with the images conversion to `.webp` and being served from CDN, this change will make the experience seemless.
4.  **Reference**: https://web.dev/articles/browser-level-image-lazy-loading

---

## Refactors

### Pexel API integration hook

1.  **Where**: `hooks/usePexelImageGen.tsx`, `app/gallery/page.tsx`, `app/demo/page.tsx`.
2.  **What**: Pexel API integration moved to a React hook.
3.  **Why**: Keeping external integrations inside the component is not advisable. Keeping any logic inside a component is not advisable. All logics being enclosed in a Container that contains the component or a hook that the component can hook into is a cleaner approach. Here, the integration to Pexel was kept inside the Gallery page, which meant it had to be repeated in the demo page. Moving it to a hook avoided it. This also benefits in implementing any changes in the external provider, as it will be done in the hook, and all other components will have to do nothing.
4.  **Reference**: https://react.dev/learn/reusing-logic-with-custom-hooks

---

### Environment variables

1.  **Where**: `hooks/usePexelImageGen.tsx`, `app/layout.tsx`, `app/components/BlogPostCard.tsx`, `app/components/Gallery.tsx`, `app/components/Hero.tsx`, `.env.local`, `env/config.ts`.
2.  **What**: Used environment variables for information related to external integrations.
3.  **Why**: Keeping security risk information such as API keys inside the application build is a potential vulnerability. Also, this information has an expiry and will have to be renewed. Which is why they are best stored as environment variables. Here, the Pexel API key is stored as an env variable. Also, the CDN url where the assets are stored is stored as an environment variable because that is also an external integration. Though the frequency and possibility of changing it is low, keeping it as an environment variable allows us to use different CDNs for different environments.

---

### Utility to format image response

1.  **Where**: `app/components/Gallery.tsx`, `utils/formatImages.ts`.
2.  **What**: Used a utility function to format and add necessary information for images.
3.  **Why**: Isolating logic like this will help with maintaining a cleaner code base. Also, if needed, their logics can be unit tested individually. Though not applicable now, if needed, this can be reused.

---

### DemoResult component

1.  **Where**: `app/demo/page.tsx`, `app/demo/DemoResult.tsx`.
2.  **What**: Created a separate component to display the results of the Demo.
3.  **Why**: The Demo page was getting crowded with lots of information. Creating a separate component which accepted a set of props and displayed information as instructed seemed to be a better approach

---

## Bugfixes

### Pexel API key

1.  **Where**: `hooks/usePexelImageGen.tsx`
2.  **What**: API key missing for Pexel.
3.  **Why**: The API key for Pexel was not provided in the code. Created an account and generated a key for it. Provided the key to the app using an environment variable.

---

### Video src

1.  **Where**: `app/components/Hero.tsx`
2.  **What**: Incorrect file path provided for video.
3.  **Why**: Provided a valid file for the video of the hero background - 7670835-uhd_3840_2160_30fps.webm

---

### Prompt input text colour

1.  **Where**: `app/demo/page.tsx`, `app/globals.css`
2.  **What**: Prompt input text has the same colour as the field, making it non-readable.
3.  **Why**: Changed the colour of the textarea to black from the default inherit to make the contents typed into it visible

---

# Performance results

## Timings recorded

### Before optimisation

**DOM Content Loaded**: 13.44s
**Load**: 1.2 minutes
**Finish**: 3 minutes

### After optimisation

**DOM Content Loaded**: 1.55s
**Load**: 1.95s
**Finish(including below the fold content)**: 25.28 s


## Vercel Speed insights
<img width="1510" height="718" alt="image" src="https://github.com/user-attachments/assets/a1d9833f-b8f8-4d85-a8c7-d99856b74ba4" />

## Lighthout audit
<img width="1510" height="718" alt="image" src="https://github.com/user-attachments/assets/a56aef14-8016-430d-b5b1-2b6fbfddce2e" />


## Google PageSpeed test (For a webpage that loads a video on initial load and 50+ fonts, this is not bad)
<img width="1510" height="718" alt="image" src="https://github.com/user-attachments/assets/c5d354a8-0916-435d-a2ec-9b518a99b737" />

## Debugbear (For Core Web Vitals)
<img width="1510" height="718" alt="image" src="https://github.com/user-attachments/assets/05985e69-8784-4f92-8dc6-e43db0cdbd5e" />

