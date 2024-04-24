import hljs from 'highlight.js';
import { createSignal, onMount } from 'solid-js';
import { html_beautify } from 'js-beautify';
import './Basic.css';
import { A } from '@solidjs/router';
import { translator } from '../../i18n';

export default function DocBasic() {
    const t = translator();

    let spellWordEl: HTMLHeadingElement;
    let audioEl: HTMLAudioElement;
    const [spellDone, setSpellDone] = createSignal(false);

    const plainTplCode = html_beautify(`
                <div class="flex flex-col justify-center items-center font-lg">
                    <h3 class="text-2xl font-serif font-bold">look</h3>
                    <em class="font-serif text-gray-500">/lʊk/</em>
                    <ol class="list-decimal">
                        <li>to direct your eyes in order to see</li>
                        <li>to try to find something or someone</li>
                        <li>to appear or seem</li>
                        <li>to face a particular direction</li>
                    </ol>
                </div>
    `);

    function submitSpell() {
        const rightWord = spellWordEl.dataset.word;
        const userWord = spellWordEl.innerText;
        spellWordEl.classList.add(rightWord === userWord ? 'correct' : 'error');
        setSpellDone(true);
    }

    function resetSpell() {
        setSpellDone(false);
        spellWordEl.classList.remove('correct');
        spellWordEl.classList.remove('error');
    }

    onMount(() => {
        hljs.highlightAll();
    });

    return (
        <>
            <h2 class="doc-title">{t()('coreConcepts')}</h2>
            <h3 class="doc-subtitle">{t()('data')}</h3>
            <p class="doc-p">{t()('docBasicP1')}</p>
            <pre>
                <code class="language-json">
                    {
                        '{\n\t"name": "look",\n\t"pronounce": "lʊk",\n\t"definitions": [\n\t\t"to direct your eyes in order to see",\n\t\t"to try to find something or someone",\n\t\t"to appear or seem",\n\t\t"to face a particular direction"\n\t]\n}'
                    }
                </code>
            </pre>
            <p class="doc-p">{t()('docBasicP2')}</p>
            <pre>
                <code class="language-json">
                    {
                        '{\n\t"name": "Tom",\n\t"age": 10,\n\t"gender": "male",\n\t"president": true,\n\t"parents": [\n\t\t{\n\t\t\t"name": "Jack",\n\t\t\t"role": "father"\n\t\t},\n\t\t{\n\t\t\t"name": "Lily",\n\t\t\t"relationship": "mother"\n\t\t}\n\t]\n}'
                    }
                </code>
            </pre>
            <p class="doc-p">{t()('docBasciP3')}</p>
            <pre>
                <code class="language-json">
                    {
                        '[\n\t{\n\t\t"name": "n1",\n\t\t"other_property": "v1"\n\t},\n\t{\n\t\t"name": "n2",\n\t\t"other_property": "v2"\n\t},\n]'
                    }
                </code>
            </pre>
            <p class="doc-p text-red-400">{t()('docBasicP4')}</p>
            <p class="doc-p">{t()('docBasicP5')}</p>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>gender</th>
                        <th>president</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tome</td>
                        <td>10</td>
                        <td>male</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>Alice</td>
                        <td>9</td>
                        <td>female</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>Bob</td>
                        <td>11</td>
                        <td>male</td>
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
            <h3 class="doc-subtitle">{t()('template')}</h3>
            <p class="doc-p">{t()('docBasicP6')}</p>
            <pre>
                <code class="language-html">{plainTplCode}</code>
            </pre>
            <div class="py-4 flex justify-center">
                <div class="flex flex-col justify-center items-center font-lg">
                    <h3 class="text-2xl font-serif font-bold">look</h3>
                    <em class="font-serif text-gray-500">/lʊk/</em>
                    <ol class="list-decimal">
                        <li>to direct your eyes in order to see</li>
                        <li>to try to find something or someone</li>
                        <li>to appear or seem</li>
                        <li>to face a particular direction</li>
                    </ol>
                </div>
            </div>
            <p class="doc-p">{t()('docBasicP7')}</p>
            <div class="py-4 flex justify-center">
                <div class="flex flex-col justify-center items-center font-lg">
                    <h3
                        class="text-2xl font-serif font-bold spell-example"
                        contenteditable
                        data-word="look"
                        ref={spellWordEl!}
                    ></h3>
                    <em class="font-serif text-gray-500">/lʊk/</em>
                    <ol class="list-decimal">
                        <li>to direct your eyes in order to see</li>
                        <li>to try to find something or someone</li>
                        <li>to appear or seem</li>
                        <li>to face a particular direction</li>
                    </ol>
                    <div class="flex justify-center mt-4">
                        <button
                            class="btn btn-primary btn-wide"
                            onClick={submitSpell}
                            disabled={spellDone()}
                        >
                            Submit
                        </button>
                        <button
                            class="btn ml-2"
                            onClick={resetSpell}
                            classList={{ hidden: !spellDone() }}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
            <p class="doc-p">
                {t()('docBasicP8')}
                <A
                    href="/docs/templates"
                    class="text-blue-400 hover:text-blue-600 ml-2"
                >
                    {t()('download')}
                </A>
            </p>
            <h3 class="doc-subtitle">{t()('resource')}</h3>
            <p class="doc-p">{t()('docBasicP9')}</p>
            <div class="py-4 flex justify-center">
                <div class="flex flex-col justify-center items-center font-lg">
                    <h3 class="text-2xl font-serif font-bold">look</h3>
                    <em
                        class="font-serif text-blue-400 cursor-pointer transition-all hover:text-blue-800"
                        onClick={() => {
                            audioEl.play();
                        }}
                    >
                        /lʊk/&#x1F50A;
                    </em>
                    <audio
                        src="/audios/look.mp3"
                        class="fixed left-[1000000000px]"
                        ref={audioEl!}
                    ></audio>
                    <ol class="list-decimal">
                        <li>to direct your eyes in order to see</li>
                        <li>to try to find something or someone</li>
                        <li>to appear or seem</li>
                        <li>to face a particular direction</li>
                    </ol>
                </div>
            </div>
            <p class="doc-p">{t()('docBasicP10')}</p>
        </>
    );
}
