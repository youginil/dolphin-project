import { For, onMount } from 'solid-js';
import hljs from 'highlight.js';
import { translator } from '../../i18n';
import axios from 'axios';

type ApiDoc = {
    name: string;
    desc: string;
    params?: { name: string; type: string; required: boolean; desc: string }[];
};

export default function DocDeveloper() {
    const t = translator();

    const page = `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title></title>
            <link rel="stylesheet" href="style_lib.css">
            <link rel="stylesheet" href="your_style.css">
            <script src="script_lib.js"></script>
            <script>
            {apis for devlopers}
            </script>
            <script src="your_script.js"></script>
        </head>
        <body>
        </body>
    </html> 
    `;

    const apis: ApiDoc[] = [
        {
            name: '/resource/{name}',
            desc: 'Resource url',
        },
        {
            name: '/asset/{name}',
            desc: 'Template asset url',
        },
        {
            name: 'window.myData',
            desc: 'The first data item',
        },
        {
            name: 'window.apis.answer(answer, callback)',
            desc: 'submit user answer to app',
            params: [
                {
                    name: 'answer',
                    type: 'number',
                    required: true,
                    desc: 'Available values contains <span class="doc-code">1</span>, <span class="doc-code">-1</span> and <span class="doc-code">0</span>. <span class="doc-code">1</span> means CORRECT, <span class="doc-code">-1</span> means WRONG, <span class="doc-code">0</span> means UNCERTAIN',
                },
                {
                    name: 'callback',
                    type: 'function',
                    required: true,
                    desc: '<span class="doc-code">callback(err: string | null)</span>. <span class="doc-code">err</span> is the error message from app, null means no error',
                },
            ],
        },
        {
            name: 'window.apis.next(callback)',
            desc: 'Fetch next data after submitting answer',
            params: [
                {
                    name: 'callback',
                    type: 'function',
                    required: true,
                    desc: '<span class="doc-code">callback(data: any, err: string | null)</span>. "data" is next memorization item, null means no more data, app will jumps to the result page',
                },
            ],
        },
        {
            name: 'window.apis.ttsSet(settings, callback)',
            desc: 'Setting TTS',
            params: [
                {
                    name: 'settings',
                    type: 'object',
                    required: true,
                    desc: '<span class="doc-code">{language?: string; speechRate?: number; volumn?: number; pitch?: number}</span>.<br><span class="doc-code">language</span> is the text language, such as "en-US", "zh-CN", the default value is "en-US", you should set it by yourself;<br><span class="doc-code">speechRate</span> ranges from 0.0 to 1.0;<br><span class="doc-code">volumn</span> ranges from 0.0 to 1.0;<br><span class="doc-code">pitch</span> ranges from 0.5 to 2.0',
                },
                {
                    name: 'callback',
                    type: 'function',
                    required: true,
                    desc: '<span class="doc-code">callback(err: string | null)</span>. same as before',
                },
            ],
        },
        {
            name: 'window.apis.ttsSpeak(text, callback)',
            desc: 'Speak the text content',
            params: [
                {
                    name: 'text',
                    type: 'string',
                    required: true,
                    desc: 'The text should be consistent with the language you set before',
                },
                {
                    name: 'callback',
                    type: 'function',
                    required: true,
                    desc: '<span class="doc-code">callback(err: string | null)</span>. same as before',
                },
            ],
        },
        {
            name: 'window.apis.ttsStop(callback)',
            desc: 'Stop speaking',
            params: [
                {
                    name: 'callback',
                    type: 'function',
                    required: true,
                    desc: '<span class="doc-code">callback(err: string | null)</span>. same as before',
                },
            ],
        },
    ];

    let apiTdsEl: HTMLElement;
    async function loadApiTsd() {
        const res = await axios.get('/api.d.ts', { responseType: 'text' });
        const code = hljs.highlight(res.data, { language: 'typescript' });
        apiTdsEl.innerHTML = code.value;
    }

    onMount(() => {
        hljs.highlightAll();
        loadApiTsd();
    });

    return (
        <>
            <h2 class="doc-title">{t()('developer')}</h2>
            <p class="doc-p">
                {t()('docDevP0')}
                <br />
                <a
                    href="https://space.bilibili.com/503278562/channel/seriesdetail?sid=3907216&ctype=0"
                    class="alink"
                    target="_blank"
                >
                    {t()('learningVideos')}
                </a>
            </p>
            <h3 class="doc-subtitle">{t()('tplEditing')}</h3>
            <p class="doc-p">{t()('docDevP1')}</p>
            <pre>
                <code class="language-html">{page}</code>
            </pre>
            <h3 class="doc-title">API</h3>
            <p class="doc-p">APIs for editing template</p>
            <For each={apis}>
                {(item) => (
                    <>
                        <h4 class="font-serif text-lg font-bold px-2 py-1 rounded bg-neutral-50 mt-4 mb-2">
                            {item.name}
                        </h4>
                        <p class="text-neutral-700 my-2">{item.desc}</p>
                        <div class="overflow-auto mb-4">
                            <table
                                class="doc-table-bordered"
                                classList={{
                                    hidden: item.params === undefined,
                                }}
                            >
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Required</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <For each={item.params || []}>
                                        {(param) => (
                                            <tr>
                                                <td>{param.name}</td>
                                                <td>{param.type}</td>
                                                <td>
                                                    {param.required
                                                        ? 'true'
                                                        : 'false'}
                                                </td>
                                                <td innerHTML={param.desc}></td>
                                            </tr>
                                        )}
                                    </For>
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </For>
            <pre>
                <code class="language-typescript" ref={apiTdsEl!}></code>
            </pre>
            <h3 class="doc-subtitle">{t()('tips')}</h3>
            <ul class="doc-list">
                <li>{t()('docDevP6')}</li>
            </ul>
        </>
    );
}
