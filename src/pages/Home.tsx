import { For, createMemo, createSignal, onMount } from 'solid-js';
import './Home.css';
import { A } from '@solidjs/router';
import { translator } from '../i18n';

const email = 'youginil@outlook.com';

enum MemoryMode {
    flip,
    batch,
    free,
}

export default function Home() {
    const t = translator();
    const features = createMemo(() => [
        {
            title: t()('cardEditing'),
            desc: t()('cardEditingDesc'),
            img: '/images/feature-edit.svg',
        },
        {
            title: t()('sync'),
            desc: t()('syncDesc'),
            img: '/images/feature-sync.svg',
        },
        {
            title: t()('memorization'),
            desc: t()('memorizationDesc'),
            img: '/images/feature-memorize.svg',
        },
        {
            title: t()('test'),
            desc: t()('testDesc'),
            img: '/images/feature-test.svg',
        },
        {
            title: t()('statistics'),
            desc: t()('statisticsDesc'),
            img: '/images/feature-statistics.svg',
        },
        {
            title: t()('diagnosis'),
            desc: t()('diagnosisDesc'),
            img: '/images/feature-diagnosis.svg',
        },
    ]);
    const [mode, setMode] = createSignal<MemoryMode>(MemoryMode.flip);

    const editorFeatures = createMemo(() => [
        {
            title: t()('makeInBatches'),
            desc: t()('makeInBatchesDesc'),
            img: '/images/editor-feature-batch.svg',
        },
        {
            title: t()('multiTpl'),
            desc: t()('multiTplDesc'),
            img: '/images/editor-feature-multi-tpl.svg',
        },
        {
            title: t()('livePreview'),
            desc: t()('livePreviewDesc'),
            img: '/images/editor-feature-preview.svg',
        },
        {
            title: t()('sync'),
            desc: t()('editorSyncDesc'),
            img: '/images/feature-sync.svg',
        },
        {
            title: t()('share'),
            desc: t()('shareDesc'),
            img: '/images/editor-feature-share.svg',
        },
    ]);

    onMount(() => {
        const player = document.getElementById('player');
        player!.innerHTML = `
        <iframe width="100%" height="450" src="//player.bilibili.com/player.html?aid=966132526&bvid=BV1BW4y1A7QB&cid=1404160966&p=1&autoplay=0&high_quality=1&danmaku=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>`;
    });

    return (
        <>
            <div
                class="home-block pt-32 pb-10 bg-no-repeat bg-cover bg-center relative"
                style="background-image: url(/images/sea.jpg)"
            >
                <div class="home-block-body ">
                    <h1 class="text-6xl font-serif mt-10 max-lg:text-4xl">
                        {t()('appName')}
                    </h1>
                    <p class="text-2xl font-serif mt-12 max-lg:text-lg max-lg:mt-8">
                        {t()('intro')}
                    </p>
                    <div class="mt-12 max-lg:mt-8">
                        <A
                            href="/downloads"
                            class="btn btn-primary btn-wide btn-lg max-lg:btn-md"
                        >
                            <i class="bi bi-cloud-download"></i>
                            {t()('download')}
                        </A>
                    </div>
                </div>
                <a
                    href="https://stocksnap.io/author/mattbangophotos"
                    class="absolute bottom-2 right-2 text-blue-600"
                >
                    Photo by Matt Bango
                </a>
            </div>
            <div id="player" class="w-[800px] max-w-full mx-auto my-5"></div>
            <div class="home-block bg-[#7ED7C1]">
                <div class="home-block-body">
                    <h2 class="home-block-title">{t()('features')}</h2>
                    <div class="grid grid-cols-3 mt-10 max-lg:grid-cols-1">
                        <For each={features()}>
                            {(item) => (
                                <div class="card bg-base-100 shadow m-2">
                                    <figure class="h-[250px] p-2">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            class="max-w-full max-h-full"
                                        />
                                    </figure>
                                    <div class="card-body">
                                        <h2 class="card-title">{item.title}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </div>
            <div class="home-block bg-[#AFD3E2]">
                <div class="home-block-body">
                    <h2 class="home-block-title">{t()('memorization')}</h2>
                    <p class="home-block-desc">{t()('memorizationDesc2')}</p>
                    <h3 class="home-block-subtitle">{t()('mode')}</h3>
                    <div class="tabs tabs-boxed">
                        <a
                            class="tab"
                            classList={{
                                'tab-active': mode() === MemoryMode.flip,
                            }}
                            onClick={() => setMode(MemoryMode.flip)}
                        >
                            {t()('flip')}
                        </a>
                        <a
                            class="tab"
                            classList={{
                                'tab-active': mode() === MemoryMode.batch,
                            }}
                            onClick={() => setMode(MemoryMode.batch)}
                        >
                            {t()('batch')}
                        </a>
                        <a
                            class="tab"
                            classList={{
                                'tab-active': mode() === MemoryMode.free,
                            }}
                            onClick={() => setMode(MemoryMode.free)}
                        >
                            {t()('free')}
                        </a>
                    </div>
                    <div class="mt-10 text-center">
                        <div
                            class="card lg:card-side"
                            classList={{ hidden: mode() !== MemoryMode.flip }}
                        >
                            <figure>
                                <img src="/images/mode-flip.svg" alt="" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title justify-center">
                                    {t()('flipMode')}
                                </h2>
                                <p>{t()('flipDesc')}</p>
                            </div>
                        </div>
                        <div
                            class="card lg:card-side"
                            classList={{ hidden: mode() !== MemoryMode.batch }}
                        >
                            <figure>
                                <img src="/images/mode-batch.svg" alt="" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title justify-center">
                                    {t()('batchMode')}
                                </h2>
                                <p>{t()('batchDesc')}</p>
                            </div>
                        </div>
                        <div
                            class="card lg:card-side"
                            classList={{ hidden: mode() !== MemoryMode.free }}
                        >
                            <figure>
                                <img src="/images/mode-custom.svg" alt="" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title justify-center">
                                    {t()('free')}
                                </h2>
                                <p>{t()('freeDesc')}</p>
                            </div>
                        </div>
                    </div>
                    <h3 class="home-block-subtitle">{t()('template')}</h3>
                    <p class="home-block-desc">{t()('templateDesc')}</p>
                    <div class="mt-10 text-center">
                        <img
                            src="/images/template.svg"
                            alt="template"
                            class="w-full max-w-[500px]"
                        />
                    </div>
                </div>
            </div>
            <div class="home-block bg-[#86A789]">
                <div class="home-block-body">
                    <div class="home-block-title">{t()('memoryStrategy')}</div>
                    <p
                        class="home-block-desc"
                        innerHTML={t()('strategyDesc')}
                    ></p>
                    <div class="overflow-auto mt-10">
                        <ul class="timeline timeline-compact max-lg:timeline-vertical">
                            <li>
                                <hr />
                                <div class="timeline-end timeline-box">
                                    0 ~ 30% &gt;&gt; 50%
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div class="timeline-end timeline-box">
                                    30% ~ 60% &gt;&gt; 80%
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div class="timeline-end timeline-box">
                                    60% ~ 90% &gt;&gt; 95%
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div class="timeline-end timeline-box">
                                    90% ~ 100% &gt;&gt; 100%
                                </div>
                                <hr />
                            </li>
                        </ul>
                    </div>
                    <p class="home-block-desc italic">{t()('strategyDesc2')}</p>
                </div>
            </div>
            <div class="home-block bg-[#19A7CE]">
                <div class="home-block-body">
                    <div class="home-block-title">{t()('bookstore')}</div>
                    <p class="home-block-desc">{t()('bookstoreDesc')}</p>
                    <div class="mt-10 text-center">
                        <img
                            src="/images/book-store.svg"
                            alt="book store"
                            class="w-full max-w-[500px]"
                        />
                    </div>
                </div>
            </div>
            <div class="home-block bg-[#C9C9C9]">
                <div class="home-block-body">
                    <div class="home-block-title">{t()('editorAppName')}</div>
                    <p class="home-block-desc">{t()('editorDesc')}</p>
                    <div class="grid grid-cols-3 mt-10 max-lg:grid-cols-1">
                        <For each={editorFeatures()}>
                            {(item) => (
                                <div class="card bg-base-100 shadow m-2">
                                    <figure class="h-[250px] p-2">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            class="max-w-full max-h-full"
                                        />
                                    </figure>
                                    <div class="card-body">
                                        <h2 class="card-title">{item.title}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </div>
            <div class="home-block bg-[#DC8686]">
                <div class="home-block-body">
                    <div class="home-block-title">{t()('privacy')}</div>
                    <p class="home-block-desc">{t()('privacyDesc')}</p>
                    <img
                        src="/images/privacy.svg"
                        alt=""
                        class="w-full max-w-[400px] mt-4"
                    />
                </div>
            </div>
            <div class="home-block bg-[#F3F3F3]">
                <div class="home-block-body">
                    <div class="home-block-title">{t()('contactUs')}</div>
                    <p class="home-block-desc">{t()('contactUsDesc')}</p>
                    <ul class="text-xl mt-10">
                        <li class="flex items-center">
                            <i class="bi bi-envelope"></i>
                            <a class="alink ml-2" href={'mailto:' + email}>
                                {email}
                            </a>
                        </li>
                        <li class="flex items-center mt-2">
                            <i class="bi bi-bug"></i>
                            <a
                                class="alink ml-2"
                                href="https://github.com/dolmem/dolphin/issues"
                                target="_blank"
                            >
                                Github Issues
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
