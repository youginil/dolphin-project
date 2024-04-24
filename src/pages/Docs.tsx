import { For, ParentComponent, createMemo, createSignal } from 'solid-js';
import { translator } from '../i18n';
import { A } from '@solidjs/router';
import './Docs.css';

const Docs: ParentComponent = (props) => {
    const t = translator();
    const [showMenu, setShowMenu] = createSignal(false);

    const menu = createMemo(() => [
        {
            title: t()('overview'),
            link: '/docs',
        },
        {
            title: t()('basic'),
            link: '/docs/basic',
        },
        {
            title: t()('demo'),
            link: '/docs/demo',
        },
        {
            title: t()('developer'),
            link: '/docs/developer',
        },
    ]);

    return (
        <>
            <button
                class="btn btn-sm btn-ghost fixed top-28 left-2 lg:hidden z-10"
                onClick={() => setShowMenu(true)}
            >
                <i class="bi bi-three-dots-vertical text-xl text-blue-600"></i>
            </button>
            <div
                class="fixed top-0 bottom-0 left-0 right-0 z-50 transition-all"
                classList={{
                    hidden: !showMenu(),
                }}
                onClick={() => setShowMenu(false)}
            ></div>
            <div
                class="w-[250px] p-4 fixed top-28 left-0 z-50 transition-all max-lg:-left-[250px]"
                classList={{ 'max-lg:left-0': showMenu() }}
            >
                <ul class="menu bg-base-200 w-full rounded-box shadow-lg">
                    <For each={menu()}>
                        {(item) => (
                            <li>
                                <A
                                    href={item.link}
                                    end={true}
                                    onClick={() => setShowMenu(false)}
                                >
                                    {item.title}
                                </A>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
            <div class="ml-[240px] mt-28 max-lg:ml-0">
                <div class="max-w-[900px] p-4 m-auto">{props.children}</div>
            </div>
        </>
    );
};

export default Docs;
