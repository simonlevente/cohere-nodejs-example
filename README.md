# Cohere AI API with NodeJs and Typescript <!-- omit in toc -->

> Node.js client for the official [Cohere](https://cohere.com/).

## Intro

This package is a Node.js wrapper around [Cohere](https://cohere.com/). TS batteries included. ✨

## Install and demo

This demo use `Cohere`. The only thing that needs to change is how you initialize the api with an `apiKey`.

To run the included demo:

1. clone repo
2. install node deps
3. set `COHERE_API_KEY` in .env
4. run yarn tsc index.ts
5. run node index.js
6. load localhost:3000 in the browser

## Compatibility

- This package is ESM-only.
- This package was made with `node = 18`.
- This module assumes that `fetch` is installed.
- If `node < 18`, you may fix some bugs.

## Credits

- [Cohere](https://cohere.com/) for creating this [SDK](https://docs.cohere.com/reference/about/) 🔥


## License

MIT © [Levente Simon](https://simonlevente.github.io)

If you found this project interesting, please consider following me on <a href="https://twitter.com/iamleventesimon"> Twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a> and <a href="https://www.linkedin.com/in/lesimon/"> Linkedin <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg=="></a>.