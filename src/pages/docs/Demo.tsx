import { createMemo, For } from 'solid-js';
import { translator } from '../../i18n';
import { assetUrl } from '../../utils';

export default function DocDemo() {
    const t = translator();

    const steps = createMemo(() => [
        {
            title: t()('demo1'),
            imgs: [assetUrl('images/demo-1.png')],
        },
        {
            title: t()('demo2'),
            imgs: [assetUrl('images/demo-2.png')],
        },
        {
            title: t()('demo3'),
            imgs: [assetUrl('images/demo-3.png')],
        },
        {
            title: t()('demo4'),
            imgs: [
                assetUrl('images/demo-4.png'),
                assetUrl('images/demo-5.png'),
            ],
        },
        {
            title: t()('demo5'),
            imgs: [
                assetUrl('images/demo-6.png'),
                assetUrl('images/demo-7.jpg'),
            ],
        },
        {
            title: t()('demo6'),
            imgs: [assetUrl('images/demo-8.jpg')],
        },
        {
            title: t()('demo7'),
            imgs: [assetUrl('images/demo-9.png')],
        },
        {
            title: t()('demo8'),
            imgs: [
                assetUrl('images/demo-10.png'),
                assetUrl('images/demo-11.jpg'),
                assetUrl('images/demo-12.jpg'),
            ],
        },
        {
            title: t()('demo9'),
            imgs: [assetUrl('images/demo-13.jpg')],
        },
        {
            title: t()('demo10'),
            imgs: [],
        },
    ]);

    return (
        <>
            <h2 class="doc-title">{t()('docDemoTitle')}</h2>
            <p class="doc-p">{t()('docDemoP1')}</p>
            <p class="doc-p">
                <a href="/templates" class="alink">
                    {t()('templateStore')}
                </a>
            </p>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <For each={steps()}>
                        {(item, index) => (
                            <>
                                <h3 class="doc-subtitle">
                                    {index() + 1}. {item.title}
                                </h3>
                                <For each={item.imgs}>
                                    {(img) => (
                                        <img src={img} alt="" class="doc-img" />
                                    )}
                                </For>
                            </>
                        )}
                    </For>
                </div>
            </div>
        </>
    );
}
