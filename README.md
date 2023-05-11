# Cohere AI API with NodeJs and Typescript <!-- omit in toc -->

> Node.js client for the official [Cohere](https://cohere.com/).

## Intro

This package is a Node.js wrapper around [Cohere](https://cohere.com/). TS batteries included. ✨


<details open>
<summary><strong>April 10, 2023</strong></summary>

<br/>

This package now **fully supports GPT-4**! 🔥

We also just released a [TypeScript chatgpt-plugin package](https://github.com/transitive-bullshit/chatgpt-plugin-ts) which contains helpers and examples to make it as easy as possible to start building your own ChatGPT Plugins in JS/TS. Even if you don't have developer access to ChatGPT Plugins yet, you can still use the [chatgpt-plugin](https://github.com/transitive-bullshit/chatgpt-plugin-ts) repo to get a head start on building your own plugins locally.

If you have access to the `gpt-4` model, you can run the following to test out the CLI with GPT-4:

```bash
npx chatgpt@latest --model gpt-4 "Hello world"
```

<p align="center">
  <img src="https://user-images.githubusercontent.com/552829/229368245-d22fbac7-4b56-4a5e-810b-5ac5793b6ac3.png" width="600px" alt="Using the chatgpt CLI with gpt-4">
</p>

We still support both the official ChatGPT API and the unofficial proxy API, but we now recommend using the official API since it's significantly more robust and supports **GPT-4**.

| Method                      | Free?  | Robust? | Quality?                        |
| --------------------------- | ------ | ------- | ------------------------------- |
| `ChatGPTAPI`                | ❌ No  | ✅ Yes  | ✅️ Real ChatGPT models + GPT-4 |
| `ChatGPTUnofficialProxyAPI` | ✅ Yes | ❌ No️  | ✅ ChatGPT webapp               |

**Note**: We strongly recommend using `ChatGPTAPI` since it uses the officially supported API from OpenAI. We will likely remove support for `ChatGPTUnofficialProxyAPI` in a future release.

1. `ChatGPTAPI` - Uses the `gpt-3.5-turbo` model with the official OpenAI chat completions API (official, robust approach, but it's not free)
2. `ChatGPTUnofficialProxyAPI` - Uses an unofficial proxy server to access ChatGPT's backend API in a way that circumvents Cloudflare (uses the real ChatGPT and is pretty lightweight, but relies on a third-party server and is rate-limited)

</details>

<details>
<summary><strong>Previous Updates</strong></summary>

<br/>

<details>
<summary><strong>March 1, 2023</strong></summary>

<br/>

The [official OpenAI chat completions API](https://platform.openai.com/docs/guides/chat) has been released, and it is now the default for this package! 🔥

| Method                      | Free?  | Robust?  | Quality?                |
| --------------------------- | ------ | -------- | ----------------------- |
| `ChatGPTAPI`                | ❌ No  | ✅ Yes   | ✅️ Real ChatGPT models |
| `ChatGPTUnofficialProxyAPI` | ✅ Yes | ☑️ Maybe | ✅ Real ChatGPT         |

**Note**: We strongly recommend using `ChatGPTAPI` since it uses the officially supported API from OpenAI. We may remove support for `ChatGPTUnofficialProxyAPI` in a future release.

1. `ChatGPTAPI` - Uses the `gpt-3.5-turbo` model with the official OpenAI chat completions API (official, robust approach, but it's not free)
2. `ChatGPTUnofficialProxyAPI` - Uses an unofficial proxy server to access ChatGPT's backend API in a way that circumvents Cloudflare (uses the real ChatGPT and is pretty lightweight, but relies on a third-party server and is rate-limited)

</details>

<details>
<summary><strong>Feb 19, 2023</strong></summary>

<br/>

We now provide three ways of accessing the unofficial ChatGPT API, all of which have tradeoffs:

| Method                      | Free?  | Robust?  | Quality?          |
| --------------------------- | ------ | -------- | ----------------- |
| `ChatGPTAPI`                | ❌ No  | ✅ Yes   | ☑️ Mimics ChatGPT |
| `ChatGPTUnofficialProxyAPI` | ✅ Yes | ☑️ Maybe | ✅ Real ChatGPT   |
| `ChatGPTAPIBrowser` (v3)    | ✅ Yes | ❌ No    | ✅ Real ChatGPT   |

**Note**: I recommend that you use either `ChatGPTAPI` or `ChatGPTUnofficialProxyAPI`.

1. `ChatGPTAPI` - (Used to use) `text-davinci-003` to mimic ChatGPT via the official OpenAI completions API (most robust approach, but it's not free and doesn't use a model fine-tuned for chat)
2. `ChatGPTUnofficialProxyAPI` - Uses an unofficial proxy server to access ChatGPT's backend API in a way that circumvents Cloudflare (uses the real ChatGPT and is pretty lightweight, but relies on a third-party server and is rate-limited)
3. `ChatGPTAPIBrowser` - (_deprecated_; v3.5.1 of this package) Uses Puppeteer to access the official ChatGPT webapp (uses the real ChatGPT, but very flaky, heavyweight, and error prone)

</details>

<details>
<summary><strong>Feb 5, 2023</strong></summary>

<br/>

OpenAI has disabled the leaked chat model we were previously using, so we're now defaulting to `text-davinci-003`, which is not free.

We've found several other hidden, fine-tuned chat models, but OpenAI keeps disabling them, so we're searching for alternative workarounds.

</details>

<details>
<summary><strong>Feb 1, 2023</strong></summary>

<br/>

This package no longer requires any browser hacks – **it is now using the official OpenAI completions API** with a leaked model that ChatGPT uses under the hood. 🔥

```ts
import { ChatGPTAPI } from 'chatgpt'

const api = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY
})

const res = await api.sendMessage('Hello World!')
console.log(res.text)
```

Please upgrade to `chatgpt@latest` (at least [v4.0.0](https://github.com/transitive-bullshit/chatgpt-api/releases/tag/v4.0.0)). The updated version is **significantly more lightweight and robust** compared with previous versions. You also don't have to worry about IP issues or rate limiting.

Huge shoutout to [@waylaidwanderer](https://github.com/waylaidwanderer) for discovering the leaked chat model!

</details>
</details>

If you run into any issues, we do have a pretty active [ChatGPT Hackers Discord](https://www.chatgpthackers.dev/) with over 8k developers from the Node.js & Python communities.

Lastly, please consider starring this repo and <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a> to help support the project.

Thanks && cheers,
[Travis](https://twitter.com/transitive_bs)
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

If you found this project interesting, please consider following me on <a href="https://twitter.com/iamleventesimon"> twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>