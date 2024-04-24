import { For, createEffect, createMemo, createSignal, onMount } from 'solid-js';
import hljs from 'highlight.js';
import { js_beautify } from 'js-beautify';
import { translator } from '../i18n';

export default function DocTemplates() {
    const t = translator();

    let codeModalEl: HTMLDialogElement;
    let dataCodeEl: HTMLElement;

    const [previewUrl, setPreviewUrl] = createSignal('');
    createEffect(() => {
        document.body.style.overflow = previewUrl() ? 'hidden' : 'auto';
    });
    const showPreview = createMemo(() => previewUrl() !== '');
    const isVideoPreview = createMemo(() => /\.mp4$/.test(previewUrl()));
    const isImagePreview = createMemo(() => /\.(jpg|png)$/.test(previewUrl()));

    const word = `{
        name: 'spotlight',
        phonetic?: 'ˈspɑːt.laɪt',
        audio?: '/resource/spotlight',
        definitions: [
            {
                trans: 'noun.聚光灯;聚光灯照明圈',
                examples?: [
                    'The room was lit by spotlights.',
                    'When the stage is dimmed, spotlights are used to create a tight arc of light.',
                ],
            },
            {
                trans: 'verb.用聚光灯照亮',
                examples?: [
                    'The paintings in the alcove were spotlit from below.',
                ],
            },
        ],
        illustrations?: [
            '/resource/spotlight_1',
            '/resource/spotlight_2',
            '/resource/spotlight_3',
        ],
    }`;

    const filling = `
    {
        "name": "O Captain! My Captain!",
        "content": "O Captain! my Captain! our [[fearful]] trip is done,\nThe ship has weather’d every [[rack]], the [[prize]] we sought is won,\nThe port is near, the [[bells]] I hear, the people all [[exulting]],\nWhile follow eyes the steady keel, the [[vessel]] grim and daring;\nBut O heart! heart! heart!\nO the bleeding drops of red,\nWhere on the [[deck]] my Captain lies,\nFallen cold and dead."
    }
    `;

    const tpls = createMemo(() => [
        {
            name: t()('tplWordNormal'),
            dllink: 'https://gitee.com/i9ver4get/store/releases/download/v2.0.0/Word_Normal.mytpl',
            data: word,
            tip: '',
            cover: 'https://gitee.com/i9ver4get/store/releases/download/v2.0.0/word_normal_cover.jpg',
            preview:
                'https://gitee.com/i9ver4get/store/releases/download/v2.0.0/word_normal_preview.mp4',
        },
        {
            name: t()('tplWordSpelling'),
            dllink: 'https://gitee.com/i9ver4get/store/releases/download/v2.0.0/Word_Spelling.mytpl',
            data: word,
            tip: '',
            cover: 'https://gitee.com/i9ver4get/store/releases/download/v2.0.0/word_spelling_cover.jpg',
            preview:
                'https://gitee.com/i9ver4get/store/releases/download/v2.0.0/word_spelling_preview.mp4',
        },
        {
            name: t()('tplFilling'),
            dllink: 'https://gitee.com/i9ver4get/store/releases/download/v2.0.0/Filling.mytpl',
            data: filling,
            tip: t()('tplFillingTip'),
            cover: 'https://gitee.com/i9ver4get/store/releases/download/v2.0.0/filling_cover.jpg',
            preview:
                'https://gitee.com/i9ver4get/store/releases/download/v2.0.0/filling_preview.mp4',
        },
        {
            name: t()('tplSelection'),
            dllink: 'https://gitee.com/i9ver4get/store/releases/download/v2.0.0/Selection.mytpl',
            data: '{ "name": "peak", "question": "Which peak is the highest?", "options": [ "k2", "Everest", "Kanchenjunga", "Makalu" ], "correct": ["Everest"] }',
            tip: '',
            cover: 'https://gitee.com/i9ver4get/store/releases/download/v2.0.0/selection_cover.jpg',
            preview:
                'https://gitee.com/i9ver4get/store/releases/download/v2.0.0/selection_cover.jpg',
        },
    ]);

    function showDataForm(data: string) {
        dataCodeEl.innerHTML = hljs.highlight(js_beautify(data), {
            language: 'json',
        }).value;
        codeModalEl.showModal();
    }

    onMount(() => {
        hljs.highlightAll();
    });

    return (
        <>
            <div class="max-w-[1000px] m-auto mt-28 max-md:w-full max-md:px-4">
                <div class="grid grid-cols-3 gap-6 mb-10 max-lg:grid-cols-1">
                    <For each={tpls()}>
                        {(item) => (
                            <div class="rounded shadow bg-neutral-50 overflow-hidden">
                                <figure
                                    class="h-40 bg-center bg-no-repeat bg-cover relative"
                                    style={{
                                        'background-image': `url(${item.cover})`,
                                    }}
                                >
                                    <button
                                        class="btn btn-ghost btn-sm btn-circle absolute bottom-2 right-2"
                                        classList={{
                                            hidden: item.preview === '',
                                        }}
                                        onClick={() =>
                                            setPreviewUrl(item.preview)
                                        }
                                    >
                                        <i class="bi bi-zoom-in"></i>
                                    </button>
                                </figure>
                                <div class="p-2">
                                    <h2 class="text-2xl text-center mt-4">
                                        {item.name}
                                    </h2>
                                    <p
                                        class="text-green-700 mt-4"
                                        classList={{
                                            hidden: item.tip === '',
                                        }}
                                    >
                                        {item.tip}
                                    </p>
                                    <div class="flex justify-between items-center mt-4">
                                        <button
                                            class="btn btn-ghost"
                                            onClick={() =>
                                                showDataForm(item.data)
                                            }
                                        >
                                            {t()('dataFormat')}
                                        </button>
                                        <a
                                            class="btn btn-ghost"
                                            href={item.dllink}
                                            target="_blank"
                                        >
                                            {t()('download')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </For>
                </div>
            </div>
            <dialog
                class="modal modal-bottom lg:modal-middle"
                ref={codeModalEl!}
            >
                <div class="modal-box">
                    <div class="overflow-auto">
                        <p class="italic text-red-500">
                            {t()('tplOptionField')}
                        </p>
                        <pre>
                            <code
                                class="language-json"
                                ref={dataCodeEl!}
                            ></code>
                        </pre>
                    </div>
                </div>
                <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div
                class="fixed top-0 bottom-0 left-0 right-0 bg-black overflow-auto transition-all z-50"
                classList={{
                    hidden: !showPreview(),
                }}
            >
                <img
                    src={previewUrl()}
                    class="max-w-full m-auto"
                    classList={{ hidden: isVideoPreview() }}
                />
                <video
                    src={previewUrl()}
                    class="max-w-full max-h-full m-auto"
                    classList={{ hidden: isImagePreview() }}
                    controls
                    autoplay
                ></video>
                <button
                    class="btn btn-circle fixed top-4 right-4"
                    onClick={() => setPreviewUrl('')}
                >
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
        </>
    );
}
