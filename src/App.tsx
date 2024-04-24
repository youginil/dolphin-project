import { A, RouteSectionProps } from '@solidjs/router';
import { Component, For, createMemo } from 'solid-js';
import {
    languageName,
    setLocale,
    supportedLanguages,
    translator,
} from './i18n';
import { setCookie } from './utils';

const Menu: Component<{ horizontal: boolean }> = (props) => {
    const t = translator();
    const menu = createMemo(() => [
        {
            name: t()('home'),
            link: '/',
        },
        {
            name: t()('docs'),
            link: '/docs',
        },
        {
            name: t()('template'),
            link: '/templates',
        },
        {
            name: t()('downloads'),
            link: '/downloads',
        },
    ]);

    return (
        <ul
            class="menu"
            classList={{
                'menu-horizontal px-1': props.horizontal,
                'menu-verital menu-lg dropdown-content bg-base-100 shadow rounded w-52 mt-5':
                    !props.horizontal,
            }}
        >
            <For each={menu()}>
                {(item) => (
                    <li>
                        <A
                            href={item.link}
                            end={true}
                            onClick={(e) => {
                                (e.target as HTMLAnchorElement).blur();
                            }}
                        >
                            {item.name}
                        </A>
                    </li>
                )}
            </For>
        </ul>
    );
};

const App: Component<RouteSectionProps<unknown>> = (props) => {
    return (
        <>
            <div class="navbar bg-slate-50 shadow-xl rounded-box w-auto fixed top-2 left-2 right-2 z-50">
                <div class="navbar-start">
                    <img
                        src="/logo.png"
                        class="w-10 rounded-lg ml-2 max-lg:hidden"
                        alt="logo"
                    />
                    <div class="dropdown">
                        <div
                            tabindex="0"
                            role="button"
                            class="btn btn-ghost lg:hidden"
                        >
                            <i class="bi bi-list text-2xl"></i>
                        </div>
                        <Menu horizontal={false}></Menu>
                    </div>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <Menu horizontal={true}></Menu>
                </div>
                <div class="navbar-end">
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost m-1">
                            <i class="bi bi-translate"></i>
                            {languageName()()}
                        </label>
                        <ul
                            tabindex="0"
                            class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <For each={supportedLanguages}>
                                {(item) => (
                                    <li
                                        onClick={(e) => {
                                            setLocale(item.value);
                                            setCookie(
                                                'language',
                                                item.value,
                                                365 * 86400,
                                            );
                                            setTimeout(() => {
                                                e.target.parentElement?.parentElement?.blur();
                                            }, 0);
                                        }}
                                    >
                                        <a>{item.name}</a>
                                    </li>
                                )}
                            </For>
                        </ul>
                    </div>
                </div>
            </div>
            {props.children}
        </>
    );
};

export default App;
